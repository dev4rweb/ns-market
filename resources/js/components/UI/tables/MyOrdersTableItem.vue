<template>
    <tr>
        <th scope="row">{{ index + 1 }}</th>
<!--        <td>{{ order.created_at }}</td>-->
        <td>{{ getDataOrder }}</td>
        <td> {{order.products.length}} </td>
        <td>{{ order.amount_weight }}</td>
        <td>{{ order.amount_score }}</td>
        <td>{{ order.order_price }}</td>
        <td>{{ orderStatus }}</td>
    </tr>
</template>

<script>
import {orderStatuses} from "../../../store/utils/orderStatuses";

export default {
    name: "MyOrdersTableItem",
    props: ['order', 'index'],
    computed: {
        getDataOrder() {
            if (this.order.created_at) {
                const date = new Date(this.order.created_at)
                const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
                return `${date.getDate()}.${month}.${date.getFullYear()}`;
            }
            return ''
        },
        orderStatus() {
            return  orderStatuses(this.order.status)
        }
    }
}
</script>

<style scoped>

</style>
