import {
    getAllTransactionByBillingAccountApi,
    getTransactionTypesApi,
    makeBonusMarkTransactionApi
} from "../actions/transactionsApi";

export default {
    state: {
        transactionTypes: null,
        transactionsBMC: null,
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
        getAllTransactionsByBillingAccountAction({commit, getters}, billingAccount) {
            commit('setLoading', true)
            getAllTransactionByBillingAccountApi(billingAccount)
                .then(res => {
                    console.log('getAllTransactionsByBillingAccountAction', res)
                    if (res.data.success) {
                        const accountBmc = getters['getBillingAccountMBC']
                        if (accountBmc) {
                            accountBmc.income = res.data.income
                            accountBmc.expense = res.data.expense
                            /*res.data.model.data.map(i => {
                                if (i.to_account.id === accountBmc.id) {
                                    accountBmc.income += i.amount
                                } else accountBmc.expense += i.amount
                            });*/
                            commit('setBillingAccountMBC', accountBmc)
                        }
                        commit('setTransactionsBMC', res.data.model);
                    } else {
                        commit('setToastError', 'Не удалось загрузить историю транзакций')
                    }
                })
                .catch(err => {
                    console.log('getAllTransactionsByBillingAccountAction err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        }
    },
    mutations: {
        setTransactionsBMC(state, transactions) {
            state.transactionsBMC = transactions
        }
    },
    getters: {
        getTransactionsBMC(state) {
            return state.transactionsBMC
        }
    }
}
