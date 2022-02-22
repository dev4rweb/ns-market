<template>
    <tr>
        <th
            scope="row"
            class="p-3 text-center"
        >
            {{ delivery.price }} руб.
        </th>
        <td
            class="p-3 text-center"
        >
            {{ delivery.deliveryTime }}
        </td>
        <td
            class="p-3 text-center"
        >
            {{ delivery.deliveryService }}
        </td>
        <td
            class="p-3 text-end"
        >
            {{ delivery.payType }}
        </td>
    </tr>
</template>

<script>
export default {
    name: "DeliveryWayTableItem",
    props: ['delivery']
}
</script>

<style scoped>
 tr:hover{
     cursor: pointer;
 }
</style>
