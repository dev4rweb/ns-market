import {patchCustomerOrderApi} from "../actions/ordersApi";
import {payWithCreditCardApi} from "../actions/paymentApi";
import {
    makeCashTransactionApi,
    makeMainAccountTransactionApi,
    makePaymentSystemTransactionApi
} from "../actions/transactionsApi";

export default {
    state: {
        card_number: '1111-2222-3333-5555'
    },
    actions: {
        orderPayWithCreditCardAction({getters, commit, dispatch}) {
            const basketOrder = getters['getBasketOrder']
            basketOrder.status = 130
            const senderWallet = getters['getWalletCash']
            const receiverWallet = getters['getWalletMain']
            commit('setLoading', true)
            patchCustomerOrderApi(basketOrder)
                .then(res => {
                    // dispatch('removeLSOrderAction');
                    // commit('setBasketOrder', null)
                    console.log('patchCustomerOrderApi', res)
                    if (res.data.success)
                        return payWithCreditCardApi({
                            cardNumber: '2222-3333-4444-555',
                            orderPrice: getters['getRestCost']
                        })
                    else commit('setToastError', 'Something wrong in patchCustomerOrderApi')
                })
                .then(res => {
                    console.log('payWithCreditCardApi', res)
                    if (res.data.success)
                        return makeCashTransactionApi({
                            senderId: senderWallet.user_id,
                            cashAmount: getters['getRestCost']
                        })
                })
                .then(res => {
                    console.log('makeCashTransactionApi', res)
                    if (res.data.success) {
                        return makePaymentSystemTransactionApi({
                            authorId: senderWallet.user_id,
                            cashAmount: getters['getRestCost']
                        })
                    } else commit('setToastError', 'Something wrong in makeCashTransactionApi')
                })
                .then(res => {
                    console.log('makePaymentSystemTransactionApi', res)
                    if (res.data.success) {
                        return makeMainAccountTransactionApi({
                            receiverId: receiverWallet.user_id,
                            transferAmount: getters['getRestCost']
                        })
                    } else commit('setToastError', 'Something wrong in makePaymentSystemTransactionApi')
                })
                .then(res => {
                    console.log('makeMainAccountTransactionApi', res)
                    if (res.data.success) {
                        commit('setMainAccount', getters['getMainAccount'] + getters['getRestCost'])
                        basketOrder.status = 0
                        return patchCustomerOrderApi(basketOrder)
                    } else commit('setToastError', 'Something wrong in makeMainAccountTransactionApi')
                })
                .then(res => {
                    console.log('changing basket order status', res)
                    if (res.data.success) {
                        dispatch('paymentOrderWithOwnResourceAction')
                    } else commit('setToastError', 'Something wrong in changing status')
                })
                .catch(err => {
                    console.log('orderPayWithCreditCardAction err', err)
                    commit('setLoading', false)
                });
        }
    },
    mutations: {},
    getters: {}
}
