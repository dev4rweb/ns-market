<template>
    <tr
        @click="selectDeliveryCompany"
    >
        <th
            scope="row"
            class="p-3 text-center"
        >
            {{ delivery.price }} руб.
        </th>
        <td
            class="p-3 text-center"
            v-html="delivery.deliveryTime"
        >
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
import {mapMutations} from 'vuex'
export default {
    name: "DeliveryWayTableItem",
    props: ['delivery'],
    methods: {
        ...mapMutations(['setIsShowDpdData', 'setIsShowRecipientData', 'setIsShowDeliveryWayTable']),
        selectDeliveryCompany() {
            console.log('selectDeliveryCompany', this.delivery)
            if (this.delivery.deliveryService.includes('DPD')) {
                this.setIsShowDpdData(true)

            } else {
                this.setIsShowRecipientData(true)
            }
            this.setIsShowDeliveryWayTable(false)
        }
    }
}
</script>

<style scoped>
 tr:hover{
     cursor: pointer;
 }
</style>
