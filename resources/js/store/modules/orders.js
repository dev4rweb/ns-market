import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        orders: [],
        basketOrder: null,
        oldBasketOrder: null
    },
    actions: {
        checkOldBasketOnServer({commit, getters, dispatch}) {
            const curUser = getters['getCurrentUser']
            console.log('checkOldBasketOnServer', curUser)
            if (curUser) {
                commit('setLoading', true)
                axios.post(`${WORK_HOST}customer-orders-user`, {
                    user_id: curUser.id
                }).then(res => {
                    console.log('checkOldBasketOnServer res', res)
                    if (res.data.success && res.data.models) {
                        const basketOrder = res.data.models.find(i => i.status === 0);
                        console.log('checkOldBasketOnServer basketOrder', basketOrder)
                        if (basketOrder) {
                            dispatch('createDraftOrderOnServer', basketOrder)
                            commit('setOldBasketOrder', basketOrder)
                            commit('setShowWelcomePasswordForm', false);
                            commit('setIsShowFoundOldBasket', true)
                        } else {
                            if (getters['getFromBasketPage']) {
                                window.location.href = getters['getFromBasketPage'];
                            } else {
                                window.location.href = '/user-panel';
                            }
                        }
                    }
                }).catch(err => console.log('checkOldBasketOnServer err', err))
                    .finally(() => commit('setLoading', false));
            }
        },
        getCustomerOrdersByUserId({commit, getters, dispatch}) {
            // console.log('getCustomerOrdersByUserId')
            const curUser = getters['getPhysicalPerson']
            if (curUser) {
                commit('setLoading', true)
                axios.post(`${WORK_HOST}customer-orders-user`, {
                    user_id: curUser.user_id
                }).then(res => {
                    console.log('getCustomerOrdersByUserId res', res)
                    if (res.data.success) {
                        if (res.data.models) {
                            commit('setOrders', res.data.models)
                            const basketOrder = res.data.models.find(i => i.status === 0);
                            if (basketOrder) {
                                commit('setBasketOrder', basketOrder);
                                console.log('BASKET ORDER', basketOrder)
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
                                } else {
                                    // console.log('ELSE creating new basket order')
                                }
                            } else {
                                // console.log('BASKET_ORDER NOT FOUND')
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
        createBasketOrderOnServer({getters, commit, dispatch}) {
            const lsOrders = getters['getLSOrder']
            const curUser = getters['getPhysicalPerson']
            console.log('createBasketOrderOnServer ', curUser)
            console.log('createBasketOrderOnServer ', lsOrders)
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
                        if (res.data.success) {
                            dispatch('updateOrderAddressOrderId', {
                                user_id: res.data.model.customer_id,
                                order_id: res.data.model.id
                            })
                        }
                    })
                    .catch(err => {
                        console.log('createBasketOrderOnServer err', err)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    });
            }
        },

        createDraftOrderOnServer({getters, commit, dispatch}, order = null) {
            const lsOrders = getters['getLSOrder']
            const curUser = order ? getters['getCurrentUser'] : getters['getPhysicalPerson']
            console.log('createDraftOrderOnServer ', curUser)
            if (lsOrders.length > 0 && curUser) {
                let customerOrder = null
                if (!order) {
                    commit('setLoading', true)
                    customerOrder = {
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
                } else {
                    order.status = 1
                    customerOrder = order
                }

                console.log('createDraftOrderOnServer', customerOrder)

                axios.post(`${WORK_HOST}customer-orders`, customerOrder)
                    .then(res => {
                        console.log('createDraftOrderOnServer res', res)
                        if (res.data.success) {
                            if (!order)
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
        },

        createOrderAddress({getters, dispatch},) {
            const currentOrder = getters['getBasketOrder']
            const recipientInfoData = getters['getRecipientInfoData']
            const currentDaDataAddress = getters['getCurrentDaDataAddress']
            const transportCompanyId = getters['getCurrentTransportCompanyId']
            const dpdCode = getters['getCurrentDpdOffice']
            console.log('createOrderAddress', currentOrder)
            console.log('createOrderAddress currentDaDataAddress', currentDaDataAddress)
            console.log('createOrderAddress recipientInfoData', recipientInfoData)
            // window.location.href = '/order-payment'
            dispatch('updateOrCreateOrderAddressOnServer', {
                order_id: currentOrder.id,
                user_id: currentOrder.customer_id,
                recipient_full_name: `${recipientInfoData.first_name} ${recipientInfoData.last_name}`,
                recipient_phone: recipientInfoData.phone,
                recipient_email: recipientInfoData.email,
                transport_company_id: transportCompanyId,
                country: currentDaDataAddress.country,
                region: currentDaDataAddress.region,
                city: currentDaDataAddress.city,
                street: currentDaDataAddress.street,
                house_num: currentDaDataAddress.house,
                // ownership: currentOrder.order_id,
                // house_building: currentOrder.order_id,
                apartment: currentDaDataAddress.flat,
                // isEdit: currentOrder.order_id,
                // sender_id: currentOrder.order_id,
                // isRemember: currentOrder.order_id,
                // track_num: currentOrder.order_id,
                dpd_code: dpdCode ? dpdCode.code : null,
            })
        }
    },
    mutations: {
        setOldBasketOrder(state, oldBasketOrder) {
            state.oldBasketOrder = oldBasketOrder
        },
        setOrders(state, orders) {
            state.orders = orders
        },
        setBasketOrder(state, basketOrder) {
            state.basketOrder = basketOrder
        }
    },
    getters: {
        getOldBasketOrder(state) {
            return state.oldBasketOrder
        },
        getOrders(state) {
            return state.orders
        },
        getBasketOrder(state) {
            return state.basketOrder
        }
    }
}
