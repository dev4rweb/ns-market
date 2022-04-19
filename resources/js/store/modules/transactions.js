import {getTransactionTypesApi, makeBonusMarkTransactionApi} from "../actions/transactionsApi";

export default {
    state: {
        transactionTypes: null
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
        }
    },
    mutations: {},
    getters: {}
}
