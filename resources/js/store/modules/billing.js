import {
    createBillingAccountApi,
    createBillingCustomerApi,
    getBillingAccountByTypeApi,
    getBillingCustomerApi
} from "../actions/billingAccountApi";

export default {
    state: {
        billingCustomer: null,
        billingAccountMain: null,
        billingAccountSaving: null,
        billingAccountVoucher: null,
        billingAccountMBC: null,
        billingAccountPVC: null
    },
    actions: {
        fetchAllBillingAccountsAction({dispatch}) {
            for (let i = 1; i <= 5; i++) {
                dispatch('fetchBillingAccountByTypeAction', i)
            }
        },
        fetchBillingAccountByTypeAction({commit, getters, dispatch}, type_id) {
            const billingCustomer = getters['getBillingCustomer']
            if (billingCustomer) {
                commit('setLoading', true)
                getBillingAccountByTypeApi(billingCustomer.id, type_id)
                    .then(res => {
                        console.log('fetchBillingAccountByTypeAction', res)
                        if (res.data.success) {
                            if (res.data.model) {
                                switch (type_id) {
                                    case 1:
                                        commit('setBillingAccountMain', res.data.model)
                                        break;
                                    case 2:
                                        commit('setBillingAccountSaving', res.data.model)
                                        break;
                                    case 3:
                                        commit('setBillingAccountVoucher', res.data.model)
                                        break;
                                    case 4:
                                        commit('setBillingAccountMBC', res.data.model)
                                        if(window.location.href.includes('/user-bank-bonus-report'))
                                            dispatch('getAllTransactionsByBillingAccountAction', res.data.model.id)
                                        break;
                                    case 5:
                                        commit('setBillingAccountPVC', res.data.model)
                                        break;
                                    default:
                                        break;
                                }
                            } else {
                                dispatch('createBillingAccountAction', type_id)
                            }
                        }
                    })
                    .catch(err => {
                        console.log('fetchBillingAccountByTypeAction err', err)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    });
            } else commit('setToastError', 'Something wrong')
        },
        createBillingAccountAction({commit, getters, dispatch}, type_id) {
            const billingCustomer = getters['getBillingCustomer']
            if (billingCustomer) {
                commit('setLoading', true)
                createBillingAccountApi(billingCustomer.id, type_id)
                    .then(res => {
                        console.log('createBillingAccountAction', res)
                        if (res.data.success && res.data.model) {
                            dispatch('fetchBillingAccountByTypeAction', type_id)
                        }
                    })
                    .catch(err => {
                        console.log('createBillingAccountAction err', err)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    });
            } else commit('setToastError', 'Something wrong')
        },
        fetchBillingCustomerAction({commit, getters, dispatch}) {
            const person = getters['getPhysicalPerson']
            if (person) {
                commit('setLoading', true)
                getBillingCustomerApi(person.user_id)
                    .then(res => {
                        console.log('fetchBillingCustomerAction', res)
                        if (res.data.success) {
                            if (res.data.model) {
                                commit('setBillingCustomer', res.data.model)
                                dispatch('fetchAllBillingAccountsAction')
                            } else {
                                dispatch('createBillingCustomerAction')
                            }
                        }
                    })
                    .catch(err => {
                        console.log('fetchBillingCustomerAction err', err)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    });
            } else commit('setToastError', 'Something wrong')
        },
        createBillingCustomerAction({commit, getters, dispatch}) {
            const curUser = getters['getCurrentUser']
            const person = getters['getPhysicalPerson']
            if (person && curUser) {
                commit('setLoading', true)
                createBillingCustomerApi(curUser.full_name, person.user_id)
                    .then(res => {
                        console.log('createBillingCustomerAction', res)
                        if (res.data.success && res.data.model) {
                            dispatch('fetchBillingCustomerAction')
                        }
                    })
                    .catch(err => {
                        console.log('createBillingCustomerAction err', err)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    });
            } else commit('setToastError', 'Something wrong')
        }
    },
    mutations: {
        addBMCIncome(state, income) {
            state.billingAccountMBC.income ?
                state.billingAccountMBC.income += income:
                state.billingAccountMBC.income = income
        },
        addBMCExpense(state, expense) {
            state.billingAccountMBC.expnese ?
                state.billingAccountMBC.expnese += expense :
                state.billingAccountMBC.expnese = expense
        },
        setBillingCustomer(state, billingCustomer) {
            state.billingCustomer = billingCustomer
        },
        setBillingAccountMain(state, billingAccountMain) {
            state.billingAccountMain = billingAccountMain
        },
        setBillingAccountSaving(state, billingAccountSaving) {
            state.billingAccountSaving = billingAccountSaving
        },
        setBillingAccountVoucher(state, billingAccountVoucher) {
            state.billingAccountVoucher = billingAccountVoucher
        },
        setBillingAccountMBC(state, billingAccountMBC) {
            state.billingAccountMBC = billingAccountMBC
        },
        setBillingAccountPVC(state, billingAccountPVC) {
            state.billingAccountPVC = billingAccountPVC
        }
    },
    getters: {
        getMBCIncome(state) {
            return state.billingAccountMBC.income
        },
        getBillingCustomer(state) {
            return state.billingCustomer
        },
        getBillingAccountMain(state) {
            return state.billingAccountMain
        },
        getBillingAccountSaving(state) {
            return state.billingAccountSaving
        },
        getBillingAccountVoucher(state) {
            return state.billingAccountVoucher
        },
        getBillingAccountMBC(state) {
            return state.billingAccountMBC
        },
        getBillingAccountPVC(state) {
            return state.billingAccountPVC
        }
    }
}
