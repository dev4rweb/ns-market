import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        orderAddress: null
    },
    actions: {
        updateOrCreateOrderAddressOnServer({commit}, orderAddress) {
            console.log('updateOrCreateOrderAddressOnServer request', orderAddress)
            if (orderAddress) {
                commit('setLoading', true)
                axios.post(`${WORK_HOST}customer-order-addresses`, orderAddress)
                    .then(res => {
                        console.log('createOrderAddressOnServer', res)
                        if (res.data.success) {
                            commit('setOrderAddress', res.data.models)
                            window.location.href = 'order-payment'
                        }
                    }).catch(err => {
                    console.log('createOrderAddressOnServer err', err)
                }).finally(() => {
                    commit('setLoading', false)
                });
            }
        },
        updateOrderAddressOrderId({commit, dispatch}, orderObj) {
            if (orderObj) {
                commit('setLoading', true)
                axios.post(`${WORK_HOST}customer-order-addresses/update-order`, orderObj)
                    .then(res => {
                        console.log('updateOrderAddressOrderId', res)
                        if (res.data.success) {
                            commit('setOrderAddress', res.data.model)
                            if (res.data.model) {
                                const addr = res.data.model
                                // commit('setFastSearchAddress', address)
                            }
                            if (window.location.href.includes('/order-payment')) {
                                dispatch('fetchTransportCompanies');
                            }
                        }
                    }).catch(err => {
                    console.log('updateOrderAddressOrderId err', err)
                }).finally(() => {
                    commit('setLoading', false)
                });
            }
        }
    },
    mutations: {
        setOrderAddress(state, orderAddress) {
            state.orderAddress = orderAddress
        }
    },
    getters: {
        getOrderAddress(state) {
            return state.orderAddress
        }
    }
}
