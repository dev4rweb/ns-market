export default {
    state: {
        transactionTypesPage: false,
        walletsPage: false,
        transactionsPage: false,
        pvAccountPage: true
    },
    actions: {},
    mutations: {
        setPVAccountPage(state, isShow) {
            state.pvAccountPage = isShow
        },
        setTransactionTypesPage(state, isShow) {
            state.transactionTypesPage = isShow
        },
        setWalletsPage(state, isShow) {
            state.walletsPage = isShow
        },
        setTransactionsPage(state, isShow) {
            state.transactionsPage = isShow
        },
    },
    getters: {
        getPVAccountPage(state) {
            return state.pvAccountPage
        },
        getTransactionTypesPage(state) {
            return state.transactionTypesPage
        },
        getWalletsPage(state) {
            return state.walletsPage
        },
        getTransactionsPage(state) {
            return state.transactionsPage
        },
    }
}
