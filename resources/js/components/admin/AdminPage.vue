<template>
<div class="container d-flex admin pb-3 pt-3">
    <div class="w-25 me-3">
        <AdminNavbar />
    </div>
    <div class="card w-75 p-3">
        <TransactionTypes v-if="getTransactionTypesPage" />
        <WalletPage v-if="getWalletsPage" />
        <TransactionPage v-if="getTransactionsPage" />
        <PVAccountPage v-if="getPVAccountPage"/>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import AdminNavbar from "./AdminNavbar";
import TransactionTypes from "./trasaction-type/TransactionTypes";
import WalletPage from "./wallet/WalletPage";
import TransactionPage from "./transaction/TransactionPage";
import PVAccountPage from "./pv-account/PVAccountPage";
export default {
    name: "AdminPage",
    computed: {
        ...mapGetters(['getTransactionTypesPage', 'getWalletsPage',
        'getTransactionsPage', 'getPVAccountPage'])
    },
    components: {
        AdminNavbar, TransactionTypes, WalletPage, TransactionPage, PVAccountPage
    }
}
</script>

<style lang="scss" scoped>
.admin {
    min-height: calc(100vh - 510px);
}
</style>
