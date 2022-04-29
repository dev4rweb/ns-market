<template>
<div>
    <h3>TransactionTypes</h3>
    <TransactionTypeUpdate v-if="getAdminTransactionTypeEdit" />
    <TransactionTypeCreate v-else />
    <TransactionsTypeIndex />
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import TransactionsTypeIndex from "./TransactionsTypeIndex";
import TransactionTypeCreate from "./TransactionTypeCreate";
import TransactionTypeUpdate from "./TransactionTypeUpdate";
export default {
    name: "TransactionTypes",
    components: {
        TransactionsTypeIndex, TransactionTypeCreate, TransactionTypeUpdate
    },
    computed: {
        ...mapGetters(['getAdminTransactionTypeEdit'])
    }
}
</script>

<style scoped>

</style>
