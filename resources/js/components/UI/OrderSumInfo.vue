<template>
    <div
        v-if="getLSOrder.length > 0"
        class="card shadow p-2 order-info"
    >
        <h3>Итого</h3>
        <div class="d-flex justify-content-between">
            <span class="title">Количество товаров</span>
            <span>{{ getLSOrder.length }}</span>
        </div>
        <div class="d-flex justify-content-between">
            <span class="title">Масса заказа</span>
            <span>{{ getWeightOrder }}</span>
        </div>
        <div class="d-flex justify-content-between">
            <span class="title">Рассчётный объём</span>
            <span>{{ getVolumeOrder }}</span>
        </div>
        <div class="d-flex justify-content-between">
            <span class="title">Сумма баллов</span>
            <span>617 PV</span>
        </div>
        <div class="d-flex justify-content-between mt-3">
            <span class="title">К оплате</span>
            <span class="price">{{ getSumOrder }}</span>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "OrderSumInfo",
    computed: {
        ...mapGetters(['getSumOrder', 'getLSOrder', 'getWeightOrder', 'getVolumeOrder'])
    }
}
</script>

<style lang="scss" scoped>
.order-info {
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    width: 100%;
    max-width: 330px;

    span {
        font-size: 18px;
    }

    .title {
        font-weight: 600;
    }

    .price {
        font-size: 20px;
        font-weight: bold;
    }
}
</style>
