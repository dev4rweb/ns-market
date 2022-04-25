import {
    getAllTransactionByWalletIdApi,
    getTransactionTypesApi,
    makeBonusMarkTransactionApi
} from "../actions/transactionsApi";

export default {
    state: {
        transactionTypes: null,
        transactionsBMC: null,
        transactionsReserve: null,
    },
    actions: {
        fetchTransactionTypesAction({commit}) {
            commit('setLoading', true)
            getTransactionTypesApi()
                .then(res => {
                    console.log('fetchTransactionTypesAction', res)
                })
                .catch(err => {
                    console.log('fetchTransactionTypesAction err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        makeBonusMarkTransactionAction({commit}, transactionObj) {
            console.log('makeBonusMarkTransactionAction', transactionObj)

            commit('setLoading', true)
            makeBonusMarkTransactionApi(transactionObj)
                .then(res => {
                    console.log('makeBonusMarkTransactionAction', res)

                })
                .catch(err => {
                    console.log('makeBonusMarkTransactionAction err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        getAllTransactionsByWalletIdAction({commit, getters}, query) {
            console.log('getAllTransactionsByWalletIdAction start', query)
            commit('setLoading', true)
            getAllTransactionByWalletIdApi(query)
                .then(res => {
                    console.log('getAllTransactionsByWalletIdAction', res)
                    if (res.data.success) {
                        // const accountBmc = getters['getBillingAccountMBC']
                        /*if (accountBmc) {
                            accountBmc.income = res.data.income
                            accountBmc.expense = res.data.expense
                            /!*res.data.model.data.map(i => {
                                if (i.to_account.id === accountBmc.id) {
                                    accountBmc.income += i.amount
                                } else accountBmc.expense += i.amount
                            });*!/
                            commit('setBillingAccountMBC', accountBmc)
                        }*/
                        if (window.location.href.includes('/user-bank-bonus-report'))
                            commit('setTransactionsBMC', res.data.model);
                        if(window.location.href.includes('/user-bank-reserve-report'))
                            commit('setTransactionsReserve', res.data.model)
                    } else {
                        commit('setToastError', 'Не удалось загрузить историю транзакций')
                    }
                })
                .catch(err => {
                    console.log('getAllTransactionsByWalletIdAction err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        }
    },
    mutations: {
        setTransactionsReserve(state, transactions) {
            state.transactionsReserve = transactions
        },
        setTransactionsBMC(state, transactions) {
            state.transactionsBMC = transactions
        }
    },
    getters: {
        getTransactionsReserve(state) {
            return state.transactionsReserve
        },
        getTransactionsBMC(state) {
            return state.transactionsBMC
        }
    }
}
