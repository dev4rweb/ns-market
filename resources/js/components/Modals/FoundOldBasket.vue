<template>
    <div class="login-form">
        <h4 class="text-center">
            В Вашем личном кабинете есть незавершённый заказ от
            {{ getDataOrder }}
        </h4>
        <p class="text-center">
            Чтобы просмотреть его или вернуться  к оформлению,
            пройдите в раздел
            <a href="/user-orders-panel">Мои заказы</a>
        </p>
        <div class="d-flex justify-content-center">
            <button
                class="btn btn-lg btn-primary"
                data-dismiss="modal"
            >
                Понятно
            </button>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "FoundOldBasket",
    methods: {

    },
    computed: {
        ...mapGetters(['getOldBasketOrder']),
        getDataOrder() {
            if (this.getOldBasketOrder) {
                const date = new Date(this.getOldBasketOrder.updated_at)
                const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
                return `${date.getDate()}.${month}.${date.getFullYear()}`;
            }
            return ''
        }
    }
}
</script>

<style scoped>

</style>
