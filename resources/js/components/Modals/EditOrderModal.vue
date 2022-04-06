<template>
    <div class="wrapper">
        <div class="card shadow-lg">
            <h3
                class="mb-4"
            >
                В Вашей корзине есть незавершённый заказ. <br>
                Переместить его в черновики?
            </h3>
            <div class="d-flex justify-content-between">
                <button
                    class="btn btn-warning me-3"
                    @click="moveToBasket"
                >
                    Переместить
                </button>
                <button
                    class="btn btn-secondary"
                    @click="cancelToMove"
                >
                    Продолжить работу с текущей корзиной
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    name: "EditOrderModal",
    methods: {
        ...mapMutations(['setEditOrderModal']),
        ...mapActions(['replaceBasketDraftOrderAction']),
        moveToBasket() {
            const order = this.getEditOrderModal
            // console.log('moveToBasket', order)
            this.replaceBasketDraftOrderAction(order)
            this.setEditOrderModal(null)
        },
        cancelToMove() {
            this.setEditOrderModal(null)
        }
    },
    computed: {
        ...mapGetters(['getEditOrderModal'])
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    //background-color: rgba(0, 0, 0, .7);

    .card {
        min-width: 30vw;
        max-width: 500px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        padding: 20px;

        h3 {
            text-align: center;
        }
    }
}
</style>
