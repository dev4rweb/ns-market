<template>
    <div class="wrapper">
        <div class="card shadow-lg">
            <h3
                class="mb-4"
            >
                Вы действительно хотите удалить заказ от
                {{ getDateOrder }}?
            </h3>
            <div class="d-flex justify-content-end">
                <button
                    class="btn btn-danger me-3"
                    @click="removeOrder"
                >
                    Удалить
                </button>
                <button
                    class="btn btn-secondary"
                    @click="canceledRemove"
                >
                    Отменить
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name: "RemoveOrderModal",
    methods: {
        ...mapMutations(['setRemoveOrderModal']),
        ...mapActions(['removeMyOrderAction']),
        removeOrder() {
            this.removeMyOrderAction(this.getRemoveOrderModal.id)
            this.setRemoveOrderModal(null)
        },
        canceledRemove() {
            this.setRemoveOrderModal(null)
        }
    },
    computed: {
        ...mapGetters(['getRemoveOrderModal']),
        getDateOrder() {
            const order = this.getRemoveOrderModal
            if (order.created_at) {
                const date = new Date(order.created_at)
                const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
                const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
                return `${day}.${month}.${date.getFullYear()}`;
            }
            return ''
        }
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
