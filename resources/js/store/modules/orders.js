import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        orders: [],
    },
    actions: {
        getCustomerOrdersByUserId({commit, getters, dispatch}) {
            console.log('getCustomerOrdersByUserId')
            const curUser = getters['getPhysicalPerson']
            if (curUser) {
                commit('setLoading', true)
                axios.post(`${WORK_HOST}customer-orders-user`, {
                    user_id: curUser.user_id
                }).then(res => {
                    console.log('getCustomerOrdersByUserId res', res)
                    if (res.data.success && res.data.models) {
                        commit('setOrders', res.data.models)
                    }
                }).catch(err => {
                    console.log('getCustomerOrdersByUserId err', err)
                }).finally(() => {
                    commit('setLoading', false)
                });
            }
        },
    },
    mutations: {
        setOrders(state, orders) {
            state.orders = orders
        },

    },
    getters: {
        getOrders(state) {
            return state.orders
        },
        getBasketOrder(state) {
            if (state.orders.length > 0)
                return state.orders.find(i => i.status === 0)
            else return null
        }
    }
}
