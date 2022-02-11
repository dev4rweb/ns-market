<template>
    <table class="table table-lg table-responsive-lg table-light table-striped table-hover shadow-lg">
        <thead  class="table-danger">
        <tr>
            <th scope="col">#</th>
            <th style="width: 120px" scope="col">Код</th>
            <th scope="col">Наименование</th>
            <th scope="col">Срок годности</th>
            <th scope="col">Дата изготовления</th>
            <th scope="col">Годен до</th>
            <th scope="col">Удалить</th>
        </tr>
        </thead>
        <tbody>
            <ExpirationDateTableItem
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
import ExpirationDateTableItem from "./ExpirationDateTableItem";
export default {
    name: "ExpirationDateTable",
    computed: {
        ...mapGetters(['getLSOrder'])
    },
    components: {
        ExpirationDateTableItem
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
