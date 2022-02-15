<template>
    <tr>
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ order.updated_at }}</td>
        <td> {{order.products.length}} </td>
        <td>{{ order.amount_weight }}</td>
        <td>{{ order.amount_score }}</td>
        <td>{{ order.order_price }}</td>
        <td>{{ order.status }}</td>
    </tr>
</template>

<script>
export default {
    name: "MyOrdersTableItem",
    props: ['order', 'index']
}
</script>

<style scoped>

</style>
