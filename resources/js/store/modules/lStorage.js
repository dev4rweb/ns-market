export default {
    state: {
        isLocalStorageAvailable: false,
        lsOrder: [],
    },
    actions: {
        storageAvailable({commit}) {
            try {
                let storage = window['localStorage'],
                    x = '__storage_test__';
                storage.setItem(x, x);
                storage.removeItem(x);
                // commit('setToastError', 'Ok')
                commit('setLocalStorageAvailable', true)
            } catch (e) {
                // commit('setToastError', "Local storage don't support" )
                commit('setLocalStorageAvailable', false)
            }
        },
        createLSOrderAction({commit, getters, dispatch}, order) {
            dispatch('storageAvailable')
            if (getters['isLocalStorageAvailable']) {
                localStorage.setItem('order', JSON.stringify(order));
                commit('setLSOrder', order)
            } else {
                commit('setToastError', "Local storage don't support")
            }
        },
        hasLSOrderAction({commit}) {
            const lsOrder = localStorage.getItem('order')
            if (lsOrder) {
                commit('setLSOrder', JSON.parse(lsOrder))
            }
        },
        addToBasketAction({getters, commit, dispatch}, orderObj) {
            dispatch('hasLSOrderAction')
            commit('setToBasket', orderObj)
            dispatch('createLSOrderAction', getters['getLSOrder'])
        },
        removeFromBasketAction({commit, getters, dispatch}, orderObj) {
            // console.log('removeFromBasketAction')
            commit('removeBasketItem', orderObj)
            dispatch('createLSOrderAction', getters['getLSOrder'])
        }
    },
    mutations: {
        setLocalStorageAvailable(state, isAvailable) {
            state.isLocalStorageAvailable = isAvailable
        },
        setLSOrder(state, order) {
            state.lsOrder = order
        },
        setToBasket(state, orderObj) {
            const duplicate = state.lsOrder.find(i => i.prodId === orderObj.prodId)
            // console.log('setToBasket orderObj', orderObj)
            // console.log('setToBasket state.lsOrder', state.lsOrder)
            if (duplicate) {
                duplicate.amount = orderObj.amount;
            } else {
                state.lsOrder.push(orderObj)
            }
        },
        removeBasketItem(state, orderObj) {
            state.lsOrder = state.lsOrder.filter(i => i.prodId !== orderObj.prodId)
        }
    },
    getters: {
        isLocalStorageAvailable(state) {
            return state.isLocalStorageAvailable
        },
        getLSOrder(state) {
            return state.lsOrder
        },
        getSumOrder(state, getters) {
            // console.log('getSumOrder', getters.isPartner)
            if (state.lsOrder.length > 0) {
                let sum = 0
                state.lsOrder.forEach(i => {
                    if (getters.isPartner)
                        sum += i.amount * i.product.price_for_partners
                    else sum += i.amount * i.product.price_retail
                });
                return `${sum}`
            } else {
                return '0'
            }
        },
        getEconomicSumOrder(state, getters) {
            if (state.lsOrder.length > 0 && getters.isPartner) {
                let sum = 0
                state.lsOrder.forEach(i => {
                    sum += i.amount * i.product.price_retail
                });
                let dif = sum - getters.getSumOrder
                return `${dif}`
            } else {
                return null
            }
        },
        getWeightOrder(state) {
            if (state.lsOrder.length > 0) {
                let weight = 0
                state.lsOrder.forEach(i => {
                    weight += i.amount * parseFloat(i.product.weight)
                });
                return `${weight.toFixed(3)}`
            } else {
                return `-`
            }
        },
        getVolumeOrder(state) {
            if (state.lsOrder.length > 0) {
                let volume = 0
                state.lsOrder.forEach(i => {
                    volume += i.amount * parseFloat(i.product.volume)
                });
                return `${volume.toFixed(6)} м3`
            } else {
                return `-`
            }
        },
        getPointsOrder(state) {
            if (state.lsOrder.length > 0) {
                let points = 0
                state.lsOrder.forEach(i => {
                    points += i.amount *i.product.points
                });
                return `${points}`
            } else {
                return `-`
            }
        },
        getAmountProduct(state) {
            if (state.lsOrder.length > 0) {
                let amount = 0
                state.lsOrder.forEach(i => {
                    amount += parseInt(i.amount)
                });
                return `${amount}`
            } else {
                return `-`
            }
        }
    }
}
