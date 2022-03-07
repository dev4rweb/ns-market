import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        orderAddress: null
    },
    actions: {
        updateOrCreateOrderAddressOnServer({commit}, orderAddress) {
            if (orderAddress) {
                commit('setLoading', true)
                axios.post(`${WORK_HOST}customer-order-addresses`, orderAddress)
                    .then(res => {
                        console.log('createOrderAddressOnServer', res)
                    }).catch(err => {
                    console.log('createOrderAddressOnServer err', err)
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
