<template>
    <table class="table table-lg table-responsive-lg table-light table-striped table-hover shadow-lg">
        <thead  class="table-danger">
        <tr>
            <th scope="col">#</th>
            <th style="width: 120px" scope="col">Код</th>
            <th scope="col">Наименование</th>
            <th style="width: 90px;" scope="col">Кол-во</th>
            <th scope="col">Цена</th>
            <th scope="col">Баллы</th>
            <th scope="col">Всего баллов</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Удалить</th>
        </tr>
        </thead>
        <tbody>
            <OrderDataTableItem
                v-if="getLSOrder.length"
                v-for="(order, i) in getLSOrder"
                :order="order"
                :key="order.prodId"
                :index="i"
            />
        </tbody>
    </table>
</template>

<script>
import {mapGetters} from 'vuex'
import OrderDataTableItem from "./OrderDataTableItem";
export default {
    name: "OrderDataTable",
    computed: {
        ...mapGetters(['getLSOrder'])
    },
    components: {
        OrderDataTableItem
    }
}
</script>

<style lang="scss" scoped>
table {
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
    font-weight: 800;
}
thead tr th{
    background-color: #EB5757;
    color: white;
}
</style>
