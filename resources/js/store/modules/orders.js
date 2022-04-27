import {WORK_HOST} from "../routeConsts";
import {removeCustomerOrderApi, updateOrCreateBasketOrderApi} from "../actions/ordersApi";

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
                            commit('setOrders',
                                res.data.models
                                    .sort((a, b) =>
                                        (a.updated_at > b.updated_at) ? 1 :
                                            (b.updated_at > a.updated_at) ? -1 : 0
                                    )
                                    .sort((a, b) =>
                                        (a.status > b.status) ? 1 :
                                            (b.status > a.status) ? -1 : 0
                                    )
                            );
                            const basketOrder = res.data.models.find(i => i.status === 0);
                            if (basketOrder) {
                                commit('setBasketOrder', basketOrder);
                                dispatch('createLSOrderIdAction', basketOrder.id)
                                // console.log('BASKET ORDER', basketOrder)
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
        payBasketOrderAction({getters, commit, dispatch}) {
            const basketOrder = getters['getOrders'].find(i => i.status === 0)
            console.log('payBasketOrderAction', basketOrder)
            if (basketOrder) {
                commit('setLoading', true)
                basketOrder.status = 2;
                updateOrCreateBasketOrderApi(basketOrder)
                    .then(res => {
                        console.log('payBasketOrderAction res', res)
                        if (res.data.success) {
                            dispatch('removeLSOrderAction');
                            commit('setBasketOrder', null)
                            commit('setToastError', 'Заказ оплачен и отправлен на сборку')
                            setTimeout(() => {
                                window.location.href = '/user-orders-panel'
                            }, 2000);
                        }
                    })
                    .catch(err => {
                        console.log('payBasketOrderAction err', err)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    });
            }

        },
        replaceBasketDraftOrderAction({commit, getters, dispatch}, draftOrder) {
            const basketOrder = getters['getOrders'].find(i => i.status === 0)
            console.log('changingPlaceBasketDraftOrderAction draftOrder', draftOrder)
            console.log('changingPlaceBasketDraftOrderAction basketOrder', basketOrder)
            if (basketOrder && draftOrder) {
                console.log('need replace')
                commit('setLoading', true)
                basketOrder.status = 1
                updateOrCreateBasketOrderApi(basketOrder)
                    .then(res => {
                        if (res.data.success) {
                            dispatch('removeLSOrderAction');
                            commit('setBasketOrder', null)
                            draftOrder.status = 0
                            return updateOrCreateBasketOrderApi(draftOrder)
                        } else
                            console.log('updateOrCreateBasketOrderApi BASKET res', res)
                    }).then(res => {
                    if (res.data.success) window.location.href = '/basket'
                    else console.log('updateOrCreateBasketOrderApi DRAFT res', res)
                }).catch(err => console.log('updateOrCreateBasketOrderApi err', err))
                    .finally(() => commit('setLoading', false));
            }
            if (!basketOrder && draftOrder) {
                console.log('need update draftOrderStatus')
                commit('setLoading', true)
                draftOrder.status = 0
                updateOrCreateBasketOrderApi(draftOrder)
                    .then(res => {
                        if (res.data.success) {
                            dispatch('removeLSOrderAction');
                            commit('setBasketOrder', null)
                            window.location.reload();
                        } else {
                            console.log('updateOrCreateBasketOrderApi res', res)
                            commit('setToastError', 'Something wrong')
                        }
                    }).catch(err => console.log('updateOrCreateBasketOrderApi err', err))
                    .finally(() => commit('setLoading', false));
            }
        },
        createBasketOrderOnServer({getters, commit, dispatch}) {
            const lsOrders = getters['getLSOrder']
            const lsOrderId = getters['getLSOrderId']
            const curUser = getters['getPhysicalPerson']
            // console.log('createBasketOrderOnServer ', curUser)
            console.log('createBasketOrderOnServer lsOrders', lsOrders)
            console.log('createBasketOrderOnServer lsOrderId', lsOrderId)
            if (lsOrders.length > 0 && curUser) {
                commit('setLoading', true)
                let customerOrder
                if (lsOrderId) {
                    customerOrder = {
                        id: lsOrderId,
                        order_id: Date.now(),
                        customer_id: curUser.user_id,
                        status: 0,
                        order_price: parseInt(getters['getSumOrder']),
                        amount_score: parseInt(getters['getPointsOrder']),
                        amount_weight: parseInt(getters['getWeightOrder']),
                        products: []
                    };
                } else {
                    customerOrder = {
                        order_id: Date.now(),
                        customer_id: curUser.user_id,
                        status: 0,
                        order_price: parseInt(getters['getSumOrder']),
                        amount_score: parseInt(getters['getPointsOrder']),
                        amount_weight: parseInt(getters['getWeightOrder']),
                        products: []
                    };
                }

                lsOrders.forEach(i => {
                    const orderProduct = {
                        product_id: i.product.id,
                        amount_products: i.amount
                    }
                    customerOrder.products.push(orderProduct)
                });

                console.log('createBasketOrderOnServer customerOrder', customerOrder)

                axios.post(`${WORK_HOST}customer-orders`, customerOrder)
                    .then(res => {
                        console.log('createBasketOrderOnServer res', res)
                        if (res.data.success) {
                            dispatch('createLSOrderIdAction', res.data.model.id)
                            // localStorage.setItem('orderId', res.data.model.id)
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
        removeMyOrderAction({commit, getters, dispatch}, id) {
            if (id) {
                commit('setLoading', true)
                removeCustomerOrderApi(id)
                    .then(res => {
                        console.log('removeMyOrderAction', res)
                        if (res.data.success) {
                            const orders = getters['getOrders'].filter(i => i.id !== id)
                            commit('setToastError', 'Заказ удален')
                            commit('setOrders', orders)
                            const basketOrder = getters['getBasketOrder']
                            if (basketOrder && basketOrder.id === id) {
                                commit('setBasketOrder', null)
                                dispatch('removeLSOrderAction')
                            }
                        }
                    })
                    .finally(() => commit('setLoading', false));
            }
        },
        createDraftOrderOnServer({getters, commit, dispatch}, order = null) {
            const lsOrders = getters['getLSOrder']
            const lsOrderId = getters['getLSOrderId']
            const curUser = order ? getters['getCurrentUser'] : getters['getPhysicalPerson']
            console.log('createDraftOrderOnServer ', curUser)
            if (lsOrders.length > 0 && curUser) {
                let customerOrder = null
                if (!order) {
                    commit('setLoading', true)
                    customerOrder = {
                        id: lsOrderId,
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
