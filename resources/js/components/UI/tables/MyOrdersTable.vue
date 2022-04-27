<template>
    <table class="table table-lg table-responsive-lg table-light table-striped shadow-lg">
        <thead class="table-success">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Дата</th>
            <th scope="col">Наименований</th>
            <th scope="col">Масса</th>
            <th scope="col">Тип покупки</th>
            <th scope="col">PV</th>
            <th scope="col">Сумма</th>
            <th scope="col">Статус</th>
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <MyOrdersTableItem
            v-if="getOrders.length"
            v-for="(order, i) in getOrders"
            :order="order"
            :key="i"
            :index="i"
        />
        </tbody>
    </table>
</template>

<script>
import MyOrdersTableItem from "./MyOrdersTableItem";
import {mapGetters} from 'vuex'

export default {
    name: "MyOrdersTable",
    components: {
        MyOrdersTableItem
    },
    computed: {
        ...mapGetters(['getOrders'])
    }
}
</script>

<style lang="scss" scoped>
.table-success {
    tr {
        th {
            background-color: #94be3e;
            //background-color: #a8f705;
            color: white;
        }
    }
}
</style>
