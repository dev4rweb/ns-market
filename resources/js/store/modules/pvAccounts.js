import {pvAccountDestroyApi, pvAccountIndexApi, pvAccountStoreApi, pvAccountUpdateApi} from "../actions/pvAccountsApi";

export default {
    state: {
        pvAccounts: [],
        pvAccountCreate: {
            period: '',
            wallet_id: '',
            balance: ''
        },
        pvAccountEdit: null
    },
    actions: {
        createPVAccountAction({commit, getters}) {
            console.log('createPVAccountAction', getters['getPvAccountCreate'])
            commit('setLoading', true)
            pvAccountStoreApi(getters['getPvAccountCreate'])
                .then(res => {
                    console.log('createPVAccountAction res', res)
                    if (res.data.success) {
                        commit('setToastError', res.data.message)
                        commit('setPvAccountCreate', {
                            period: '',
                            wallet_id: '',
                            balance: ''
                        })
                        return pvAccountIndexApi()
                    } else commit('setToastError', res.data.message)
                })
                .then(res => {
                    console.log('pvAccountIndexApi', res)
                    if (res.data.success) {
                        commit('setPVAccounts', res.data.models)
                    }
                })
                .catch(err => {
                    console.log('createPVAccountAction err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        updatePVAccountAction({commit, getters}) {
            console.log('updatePVAccountAction', getters['getPvAccountEdit'])
            commit('setLoading', true)
            pvAccountUpdateApi(getters['getPvAccountEdit'])
                .then(res => {
                    console.log('updatePVAccountAction res', res)
                    if (res.data.success) {
                        commit('setToastError', res.data.message)
                        commit('setPvAccountEdit', null)
                        return pvAccountIndexApi()
                    } else commit('setToastError', res.data.message)
                })
                .then(res => {
                    console.log('pvAccountIndexApi', res)
                    if (res.data.success) {
                        commit('setPVAccounts', res.data.models)
                    }
                })
                .catch(err => {
                    console.log('updatePVAccountAction err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        removePVAccountAction({commit}, id) {
            commit('setLoading', true)
            pvAccountDestroyApi(id)
                .then(res => {
                    console.log('removePVAccountAction ', res)
                    if (res.data.success) {
                        commit('setToastError', res.data.message)
                        return pvAccountIndexApi()
                    } else commit('setToastError', 'Something wrong')
                })
                .then(res => {
                    // console.log('pvAccountDestroyApi', res)
                    if (res.data.success) commit('setPVAccounts', res.data.models)
                })
                .catch(err => {
                    console.log('removePVAccountAction err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        }
    },
    mutations: {
        setPVAccounts(state, pvAccounts) {
            state.pvAccounts = pvAccounts
        },
        setPvAccountCreate(state, pvAccount) {
            state.pvAccountCreate = pvAccount
        },
        setPvAccountEdit(state, pvAccount) {
            state.pvAccountEdit = pvAccount
        }
    },
    getters: {
        getPVAccounts(state) {
            return state.pvAccounts
        },
        getPvAccountCreate(state) {
            return state.pvAccountCreate
        },
        getPvAccountEdit(state) {
            return state.pvAccountEdit
        },
    }
}
