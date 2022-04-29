<template>
<div>
    <h3>TransactionPage</h3>
    <TransactionUpdate v-if="getAdminTransactionEdit" />
    <TransactionCreate v-else />
    <TransactionIndex />
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import TransactionIndex from "./TransactionIndex";
import TransactionUpdate from "./TransactionUpdate";
import TransactionCreate from "./TransactionCreate";
export default {
    name: "TransactionPage",
    components: {
        TransactionCreate, TransactionUpdate, TransactionIndex
    },
    computed: {
        ...mapGetters(['getAdminTransactionEdit'])
    }
}
</script>

<style scoped>

</style>
