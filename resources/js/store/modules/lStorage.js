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
            }
            catch(e) {
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
                commit('setToastError', "Local storage don't support" )
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
        }
    }
}
