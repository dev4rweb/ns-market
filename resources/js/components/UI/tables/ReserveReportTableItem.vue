<template>
    <tr>
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ getDate }}</td>
        <td>
            {{ transaction.from_account.id }}<br>
            {{ getFullName(transaction.from_account) }}
        </td>
        <td>
            {{ transaction.to_account.id }}<br>
            {{ getFullName(transaction.to_account) }}
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
    name: "ReserveReportTableItem",
    props: ['transaction', 'index'],
    methods: {
        getFullName(user) {
            if (user) {
                const fn = user.first_name ?? ''
                const ln = user.last_name ?? ''
                const mn = user.middle_name ?? ''
                return `${ln} ${fn} ${mn}`
            }
            return ''
        }
    },
    computed: {
        ...mapGetters(['getWalletPVC']),
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
            if (this.transaction && this.getWalletPVC) {
                return this.getWalletPVC.id === this.transaction.to_account_id ?
                    this.transaction.amount : ''
            }
            return ''
        },
        getExpense() {
            if (this.transaction && this.getWalletPVC) {
                return this.getWalletPVC.id === this.transaction.from_account_id ?
                    this.transaction.amount : ''
            }
            return ''
        },
        getTypeOperation() {
            if (this.transaction) {
                switch (this.transaction.type_code) {
                    case 'reserve_purchase':
                        return `${this.transaction.document}`
                    case 'reserve_movement':
                        return `Перевод баллов в резерв`
                    case 'lo_movement':
                        return `Перевод баллов в ЛО`
                    default:
                        return 'Другая операция'
                }
            }
            return ''
        },
    }
}
</script>

<style scoped>

</style>
