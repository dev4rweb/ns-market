<template>
    <div class="user-content">
        <div class="row">
            <h3>Мои заказы</h3>
        </div>
        <div class="row">
            <MyOrdersTable v-if="getOrders" />
            <h1 v-else>История заказов отсутствует</h1>
        </div>
    </div>
</template>

<script>
import MyOrdersTable from "../UI/tables/MyOrdersTable";
import {mapGetters} from 'vuex'
export default {
    name: "UserOrdersPanel",
    components: {
        MyOrdersTable
    },
    computed: {
        ...mapGetters(['getOrders'])
    }
}
</script>

<style scoped>

</style>
