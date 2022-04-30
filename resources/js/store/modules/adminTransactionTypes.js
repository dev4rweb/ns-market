import {
    getAllTransactionTypesApi, removeTransactionTypeApi,
    updateTransactionTypeApi
} from "../actions/transactionTypesApi";

export default {
    state: {
        adminTransactionTypes: [],
        adminTransactionTypeEdit: null
    },
    actions: {
        getAllTransactionTypesAction({commit}) {
            commit('setLoading', true)
            getAllTransactionTypesApi()
                .then(res => {
                    console.log('getAllTransactionTypesAction', res)
                    if (res.data.success)
                        commit('setAdminTransactionTypes', res.data.models)
                })
                .catch(err => {
                    console.log('getAllTransactionTypesAction err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        updateTransactionTypeAction({commit, getters}) {
            // console.log('updateTransactionTypeAction', getters['getAdminTransactionTypeEdit'])
            commit('setLoading', true)
            updateTransactionTypeApi(getters['getAdminTransactionTypeEdit'])
                .then(res => {
                    console.log('updateTransactionType ', res)
                    if (res.data.success) {
                        commit('setAdminTransactionTypeEdit',null)
                        commit('setToastError',res.data.message)
                        return getAllTransactionTypesApi()
                    } else {
                        commit('setToastError','Something wrong')
                    }
                })
                .then(res => {
                    if (res.data.success) {
                        console.log('getAllTransactionTypesApi', res)
                        commit('setAdminTransactionTypes',res.data.models)
                    }
                })
                .catch(err => {
                    console.log('updateTransactionTypeApi err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        removeTransactionTypeAction({commit}, id) {
            console.log('removeTransactionTypeAction', id)
            commit('setLoading', true)
            removeTransactionTypeApi(id)
                .then(res => {
                    if (res.data.success) {
                        commit('setToastError',res.data.message)
                        return getAllTransactionTypesApi()
                    } else {
                        commit('setToastError','Something wrong')
                    }
                })
                .then(res => {
                    if (res.data.success) {
                        console.log('getAllTransactionTypesApi', res)
                        commit('setAdminTransactionTypes',res.data.models)
                    }
                })
                .catch(err => {
                    console.log('updateTransactionTypeApi err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        }
    },
    mutations: {
        setAdminTransactionTypeEdit(state, type) {
            state.adminTransactionTypeEdit = type
        },
        setAdminTransactionTypes(state, types) {
            state.adminTransactionTypes = types
        }
    },
    getters: {
        getAdminTransactionTypeEdit(state) {
            return state.adminTransactionTypeEdit
        },
        getAdminTransactionTypes(state) {
            return state.adminTransactionTypes
        }
    },
}
