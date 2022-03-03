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
            {{ delivery.deliveryService }} <br>
            {{ delivery.payType }}
        </td>
        <td
            class="p-3 text-end"
        >
            {{getCurrentDaDataAddress.country.includes('Россия') ? 'Предоплата' : 'Оплата доставки - при получении'}}
        </td>
    </tr>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
    name: "DeliveryWayTableItem",
    props: ['delivery'],
    methods: {
        ...mapMutations(['setIsShowDpdData', 'setIsShowRecipientData', 'setIsShowDeliveryWayTable',
        'setCurrentDeliveryCompany']),
        selectDeliveryCompany() {
            console.log('selectDeliveryCompany', this.delivery)
            if (this.delivery.deliveryService.includes('DPD')) {
                this.setIsShowDpdData(true)
            } else {
                this.setIsShowRecipientData(true)
            }
            this.setCurrentDeliveryCompany(this.delivery)
            this.setIsShowDeliveryWayTable(false)
        }
    },
    computed:{
        ...mapGetters(['getCurrentDaDataAddress']),
    }
}
</script>

<style scoped>
 tr:hover{
     cursor: pointer;
 }
</style>
