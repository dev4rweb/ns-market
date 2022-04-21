<template>
    <tr>
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ getDate }}</td>
        <td>
            {{ transaction.fromBillingCustomer.owner_id }}<br>
            {{ transaction.fromBillingCustomer.name }}
        </td>
        <td>
            {{ transaction.toBillingCustomer.owner_id }}<br>
            {{ transaction.toBillingCustomer.name }}
        </td>
        <td>{{ getIncome }}</td>
        <td>{{ getExpense }}</td>
        <td>{{ getTypeOperation }}</td>
        <td>{{ transaction.comment }}</td>
    </tr>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "BMReportTableItem",
    props: ['transaction', 'index'],
    computed: {
        ...mapGetters(['getBillingAccountMBC']),
        getDate() {
            if (this.transaction.created_at) {
                const date = new Date(this.transaction.created_at)
                const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
                const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
                const hours = date.getHours()
                const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
                const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
                return `${day}.${month}.${date.getFullYear()} / ${hours}:${minutes}:${seconds}`;
            }
            return ''
        },
        getIncome() {
            if (this.transaction && this.getBillingAccountMBC) {
                return this.getBillingAccountMBC.id === this.transaction.to_account.id ?
                    this.transaction.amount : ''
            }
            return ''
        },
        getExpense() {
            if (this.transaction && this.getBillingAccountMBC) {
                return this.getBillingAccountMBC.id === this.transaction.from_account.id ?
                    this.transaction.amount : ''
            }
            return ''
        },
        getTypeOperation() {
            if (this.transaction) {
                switch (this.transaction.type_code) {
                    case 'bonus_mark_movement':
                        return 'Перевод бонус марок между счетами'
                    case 'bonus_mark_review':
                        return `Начисление бонус марок за публикацию ${this.transaction.document}`
                    default:
                        return 'Другая операция'
                }
            }
            return ''
        }
    }
}
</script>

<style scoped>

</style>
