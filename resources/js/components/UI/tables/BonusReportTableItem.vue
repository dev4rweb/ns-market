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
        <td v-html="getTypeOperation"></td>
        <td>{{ transaction.comment }}</td>
    </tr>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "BonusReportTableItem",
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
        ...mapGetters(['getWalletSaving', 'getAdminTransactionTypes']),
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
            if (this.transaction && this.getWalletSaving) {
                return this.getWalletSaving.id === this.transaction.to_account_id ?
                    this.transaction.amount : ''
            }
            return ''
        },
        getExpense() {
            if (this.transaction && this.getWalletSaving) {
                return this.getWalletSaving.id === this.transaction.from_account_id ?
                    this.transaction.amount : ''
            }
            return ''
        },
        getTypeOperation() {
            if (this.transaction && this.getAdminTransactionTypes.length) {
                const document = this.transaction.document ?? ''
                const type = this.getAdminTransactionTypes
                    .find(i => i.code == this.transaction.type_code)
                if (type) return `${type.name} <br/> ${document}`
                else return this.transaction.type_code
            }
            return ''
        },
    }
}
</script>

<style scoped>

</style>
