import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        orders: [],
        basketOrder: null,
    },
    actions: {
        getCustomerOrdersByUserId({commit, getters, dispatch}) {
            // console.log('getCustomerOrdersByUserId')
            const curUser = getters['getPhysicalPerson']
            if (curUser) {
                commit('setLoading', true)
                axios.post(`${WORK_HOST}customer-orders-user`, {
                    user_id: curUser.user_id
                }).then(res => {
                    console.log('getCustomerOrdersByUserId res', res)
                    if (res.data.success && res.data.models) {
                        commit('setOrders', res.data.models)
                        const basketOrder = res.data.models.find(i => i.status === 0);
                        if (basketOrder) {
                            commit('setBasketOrder', basketOrder)
                            if (!getters['getLSOrder'].length) {
                                console.log('creating new basket order')
                                basketOrder.products.forEach(i => {
                                    const orderObj = {
                                        prodId: i.product.vendor_code,
                                        amount: i.amount_products,
                                        product: i.product,
                                        created_at: parseInt(i.order_id)
                                    }
                                    dispatch('addToBasketAction', orderObj)
                                });
                            }
                        }
                    }
                }).catch(err => {
                    console.log('getCustomerOrdersByUserId err', err)
                }).finally(() => {
                    commit('setLoading', false)
                });
            }
        },
        createBasketOrderOnServer({getters, commit}) {
            const lsOrders = getters['getLSOrder']
            const curUser = getters['getPhysicalPerson']
            // console.log('createBasketOrderOnServer ', curUser)
            if (lsOrders.length > 0 && curUser) {
                commit('setLoading', true)
                const customerOrder = {
                    order_id: Date.now(),
                    customer_id: curUser.user_id,
                    status: 0,
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
                    })
                    .catch(err => {
                        console.log('createBasketOrderOnServer err', err)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    });
            }
        },

        createDraftOrderOnServer({getters, commit, dispatch}) {
            const lsOrders = getters['getLSOrder']
            const curUser = getters['getPhysicalPerson']
            // console.log('createBasketOrderOnServer ', curUser)
            if (lsOrders.length > 0 && curUser) {
                commit('setLoading', true)
                const customerOrder = {
                    order_id: Date.now(),
                    customer_id: curUser.user_id,
                    status: 1,
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
                        console.log('createDraftOrderOnServer res', res)
                        if (res.data.success) {
                            dispatch('removeLSOrderAction')
                        }
                    })
                    .catch(err => {
                        console.log('createDraftOrderOnServer err', err)
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
        setBasketOrder(state, basketOrder) {
            state.basketOrder = basketOrder
        }
    },
    getters: {
        getOrders(state) {
            return state.orders
        },
        getBasketOrder(state) {
            return state.basketOrder
        }
    }
}
