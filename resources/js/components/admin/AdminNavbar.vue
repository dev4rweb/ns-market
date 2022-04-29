<template>
    <div class="list-group">
        <button
            type="button"
            class="list-group-item list-group-item-action"
            :class="{active: getTransactionTypesPage}"
            @click="openPage(1, getTransactionTypesPage)"
        >
            Transaction Types
        </button>
        <button
            type="button"
            class="list-group-item list-group-item-action"
            :class="{active: getWalletsPage}"
            @click="openPage(2, getWalletsPage)"
        >
            Wallets
        </button>
        <button
            type="button"
            class="list-group-item list-group-item-action"
            :class="{active: getTransactionsPage}"
            @click="openPage(3, getTransactionsPage)"
        >
            Transactions
        </button>
        <button
            type="button"
            class="list-group-item list-group-item-action"
            :class="{active: getPVAccountPage}"
            @click="openPage(4, getPVAccountPage)"
        >
            PV Accounts
        </button>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "AdminNavbar",
    methods: {
        ...mapMutations(['setTransactionTypesPage', 'setWalletsPage',
            'setTransactionsPage', 'setPVAccountPage']),
        openPage(pageNum, isActive) {
            if (!isActive) {
                this.closeAllPage()
                // console.log('openPage', pageNum, isActive)
                switch (pageNum) {
                    case 1:
                        this.setTransactionTypesPage(true)
                        break
                    case 2:
                        this.setWalletsPage(true)
                        break
                    case 3:
                        this.setTransactionsPage(true)
                        break
                    case 4:
                        this.setPVAccountPage(true)
                        break
                }
            }
        },
        closeAllPage() {
            this.setTransactionTypesPage(false)
            this.setWalletsPage(false)
            this.setTransactionsPage(false)
            this.setPVAccountPage(false)
        }
    },
    computed: {
        ...mapGetters(['getTransactionTypesPage', 'getWalletsPage',
            'getTransactionsPage', 'getPVAccountPage'])
    }
}
</script>

<style scoped>

</style>
