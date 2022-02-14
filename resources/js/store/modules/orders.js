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
        createBasketOrderOnServer({getters, commit, dispatch}) {
            const lsOrders = getters['getLSOrder']
            const curUser = getters['getPhysicalPerson']
            // console.log('createBasketOrderOnServer ', curUser)
            if (lsOrders.length > 0 && curUser) {
                commit('setLoading', true)
                const customerOrder = {
                    order_id: Date.now(),
                    customer_id: curUser.user_id,
                    order_price: getters['getSumOrder'],
                    amount_score: getters['getPointsOrder'],
                    amount_weight: getters['getWeightOrder'],
                    products: []
                }
                lsOrders.forEach(i => {
                    const orderProduct = {
                        product_id: i.product.id,
                        amount_products: i.amount
                    }
                    customerOrder.products.push(orderProduct)
                });

                // console.log('createBasketOrderOnServer', customerOrder)

                axios.post(`${WORK_HOST}customer-orders`, customerOrder)
                    .then(res => {
                        console.log('createBasketOrderOnServer res', res)
                        dispatch('getCustomerOrdersByUserId')
                    })
                    .catch(err => {
                        console.log('createBasketOrderOnServer err', err)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    });
            }
        }
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
