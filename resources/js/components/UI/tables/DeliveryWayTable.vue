<template>
    <table class="table table-lg table-responsive-lg table-light table-striped table-hover shadow-lg">
        <thead class="table-info">
        <tr class="p-3">
            <th
                class="p-3 text-center"
                scope="col"
                style="border-top-left-radius: 8px;"
            >
                Стоимость
            </th>
            <th
                class="p-3 text-center"
                scope="col"
                style="width: 210px;"
            >
                Срок доставки
            </th>
            <th
                scope="col"
                class="p-3 text-center"
            >
                Служба доставки
            </th>
            <th
                class="p-3 text-end"
                scope="col"
                style="border-top-right-radius: 8px; width: 328px;"
            >
                Оплата
            </th>
        </tr>
        </thead>
        <tbody>
        <DeliveryWayTableItem
            v-if="getDeliveryTable.length"
            v-for="delivery in getDeliveryTable"
            :delivery="delivery"
            :key="delivery.id"
        />
        </tbody>
    </table>
</template>

<script>
import DeliveryWayTableItem from "./DeliveryWayTableItem";
import {mapGetters} from 'vuex'

export default {
    name: "DeliveryWayTable",
    computed: {
        ...mapGetters(['getEDostDelivery', 'getCurrentDaDataAddress']),
        getDeliveryTable() {
            console.log('getDeliveryTable', this.getCurrentDaDataAddress)
            if (this.getCurrentDaDataAddress && !this.getCurrentDaDataAddress.region.includes('Тульск')) {
                return this.getEDostDelivery.filter(i => !i.deliveryService.includes('Самовывоз'));
            } else {
                return this.getEDostDelivery
            }
        }
    },
    components: {
        DeliveryWayTableItem
    },
}
</script>

<style lang="scss" scoped>
.light th, .table-light thead th {
    background-color: #038ED7;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 22px;
}

table, thead {
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
}

tbody {
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 27px;
}

.table > :not(caption) > * > * {
    background-color: rgba(3, 142, 215, 0.06);;
}
</style>
