import {
    getAllTransactionByWalletIdApi,
    getTransactionTypesApi,
    makeBonusMarkTransactionApi,
    makeCashTransactionApi,
    makeCashTransferTransactionApi,
    makeMainAccountTransactionApi,
    makeMainTransferTransactionApi, makePaymentSystemTransactionApi, paymentOrderTransactionApi,
    transactionDestroyApi,
    transactionsIndexApi,
    transactionStoreApi,
    transactionUpdateApi
} from "../actions/transactionsApi";

export default {
    state: {
        adminTransactionCreate: {
            project_id: '',
            type_code: '',
            from_account_id: '',
            to_account_id: '',
            amount: '',
            currency_code: '',
            document: '',
            comment: '',
            creator_id: ''
        },
        adminTransactionEdit: null,
        adminTransactions: [],
        transactionTypes: null,
        transactionsBMC: null,
        transactionsReserve: null,
        transactionsMainAccount: null,
        transactionsSavingAccount: null,

        mainAccount: 0,
        savingAccount: 0,
        voucherAccount: 0
    },
    actions: {
        paymentOrderWithOwnResourceAction({dispatch, getters}) {
            const mainAccount = getters['getMainAccount']
            const savingAccount = getters['getSavingAccount']
            const voucherAccount = getters['getVoucherAccount']
            console.log('paymentOrderWithOwnResourceAction', mainAccount, savingAccount, voucherAccount)

            if (mainAccount > 0 && savingAccount > 0 && voucherAccount > 0) {
                dispatch('payWithWholeOwnerResourceAction', {mainAccount, savingAccount, voucherAccount})
                return
            }
            if (voucherAccount > 0 && mainAccount > 0) {
                dispatch('payWithVoucherMainAccountsAction', {voucherAccount, mainAccount})
                return;
            }
            if (voucherAccount > 0 && savingAccount > 0) {
                dispatch('payWithVoucherSavingAccountsAction', {voucherAccount, savingAccount})
                return;
            }
            if (mainAccount > 0 && savingAccount > 0) {
                dispatch('payWithMainSavingAccountsAction', {mainAccount, savingAccount})
                return;
            }
            if (voucherAccount > 0) {
                dispatch('payWithVoucherAccountAction', voucherAccount)
                return;
            }
            if (mainAccount > 0) {
                dispatch('payWithMainAccountAction', mainAccount)
                return;
            }
            if (savingAccount > 0) {
                dispatch('payWithSavingAccount', savingAccount)
                return;
            }
            console.log('unknown payment method')
            // paymentOrderTransactionApi()
        },
        payWithWholeOwnerResourceAction({getters, commit, dispatch}, {mainAccount, savingAccount, voucherAccount}) {
            console.log('full payment with own resource', mainAccount, savingAccount, voucherAccount)
            /*let basketOrder = getters['getOrders']
                .find(i => i.status === 130)
            if (!basketOrder) {
                console.log('NOT FOUND PENDING ORDER')
                basketOrder = getters['getOrders']
                    .find(i => i.status === 0);
            }*/
            const basketOrder = getters['getBasketOrder'];
            const mainWallet = getters['getWalletMain']
            const voucherWallet = getters['getWalletVoucher']
            const savingWallet = getters['getWalletSaving']
            if (basketOrder && mainWallet && voucherWallet && savingWallet) {
                commit('setLoading', true);
                paymentOrderTransactionApi({
                    is_reserve: basketOrder.is_reserve,
                    senderId: voucherWallet.user_id,
                    walletType: voucherWallet.type_id,
                    order_id: basketOrder.id,
                    transferAmount: voucherAccount
                }).then(res => {
                    console.log('first transaction ', res)
                    if (res.data.success)
                        return paymentOrderTransactionApi({
                            is_reserve: basketOrder.is_reserve,
                            senderId: mainWallet.user_id,
                            walletType: mainWallet.type_id,
                            order_id: basketOrder.id,
                            transferAmount: mainAccount
                        })
                    else commit('setToastError', 'first transaction problem')
                }).then(res => {
                    console.log('second transaction ', res)
                    if (res.data.success)
                        return paymentOrderTransactionApi({
                            is_reserve: basketOrder.is_reserve,
                            senderId: savingWallet.user_id,
                            walletType: savingWallet.type_id,
                            order_id: basketOrder.id,
                            transferAmount: savingAccount
                        })
                    else commit('setToastError', 'second transaction problem')
                }).then(res => {
                    console.log('third transaction ', res)
                    if (res.data.success) dispatch('payBasketOrderAction')
                    else commit('setToastError', 'third transaction problem')
                }).finally(() => {
                    commit('setLoading', false)
                });
            } else commit('setToastError', 'Что-то пошло не так!')
        },
        payWithVoucherMainAccountsAction({getters, commit, dispatch}, {voucherAccount, mainAccount}) {
            console.log('pay with voucher and main', voucherAccount, mainAccount)
            const basketOrder = getters['getBasketOrder'];
            const mainWallet = getters['getWalletMain']
            const voucherWallet = getters['getWalletVoucher']
            if (basketOrder && mainWallet && voucherWallet) {
                commit('setLoading', true);
                paymentOrderTransactionApi({
                    is_reserve: basketOrder.is_reserve,
                    senderId: voucherWallet.user_id,
                    walletType: voucherWallet.type_id,
                    order_id: basketOrder.id,
                    transferAmount: voucherAccount
                }).then(res => {
                    console.log('first transaction ', res)
                    if (res.data.success)
                        return paymentOrderTransactionApi({
                            is_reserve: basketOrder.is_reserve,
                            senderId: mainWallet.user_id,
                            walletType: mainWallet.type_id,
                            order_id: basketOrder.id,
                            transferAmount: mainAccount
                        })
                    else commit('setToastError', 'first transaction problem')
                }).then(res => {
                    console.log('second transaction ', res)
                    if (res.data.success) dispatch('payBasketOrderAction')
                    else commit('setToastError', 'second transaction problem')
                }).finally(() => {
                    commit('setLoading', false)
                });
            } else commit('setToastError', 'Что-то пошло не так!')
        },
        payWithVoucherSavingAccountsAction({getters, commit, dispatch}, {voucherAccount, savingAccount}) {
            console.log('pay with voucher and saving', voucherAccount, savingAccount)
            const basketOrder = getters['getBasketOrder'];
            const voucherWallet = getters['getWalletVoucher']
            const savingWallet = getters['getWalletSaving']
            if (basketOrder && voucherWallet && savingWallet) {
                commit('setLoading', true);
                paymentOrderTransactionApi({
                    is_reserve: basketOrder.is_reserve,
                    senderId: voucherWallet.user_id,
                    walletType: voucherWallet.type_id,
                    order_id: basketOrder.id,
                    transferAmount: voucherAccount
                }).then(res => {
                    console.log('first transaction ', res)
                    if (res.data.success)
                        return paymentOrderTransactionApi({
                            is_reserve: basketOrder.is_reserve,
                            senderId: savingWallet.user_id,
                            walletType: savingWallet.type_id,
                            order_id: basketOrder.id,
                            transferAmount: savingAccount
                        })
                    else commit('setToastError', 'first transaction problem')
                }).then(res => {
                    console.log('second transaction ', res)
                    if (res.data.success) dispatch('payBasketOrderAction')
                    else commit('setToastError', 'second transaction problem')
                }).finally(() => {
                    commit('setLoading', false)
                });
            } else commit('setToastError', 'Что-то пошло не так!')
        },
        payWithMainSavingAccountsAction({getters, commit, dispatch}, {mainAccount, savingAccount}) {
            console.log('pay with main and saving', mainAccount, savingAccount);
            const basketOrder = getters['getBasketOrder'];
            const mainWallet = getters['getWalletMain']
            const savingWallet = getters['getWalletSaving']
            if (basketOrder && mainWallet && savingWallet) {
                commit('setLoading', true);
                paymentOrderTransactionApi({
                    is_reserve: basketOrder.is_reserve,
                    senderId: mainWallet.user_id,
                    walletType: mainWallet.type_id,
                    order_id: basketOrder.id,
                    transferAmount: mainAccount
                }).then(res => {
                    console.log('first transaction ', res)
                    if (res.data.success)
                        return paymentOrderTransactionApi({
                            is_reserve: basketOrder.is_reserve,
                            senderId: savingWallet.user_id,
                            walletType: savingWallet.type_id,
                            order_id: basketOrder.id,
                            transferAmount: savingAccount
                        })
                    else commit('setToastError', 'first transaction problem')
                }).then(res => {
                    console.log('second transaction ', res)
                    if (res.data.success) dispatch('payBasketOrderAction')
                    else commit('setToastError', 'second transaction problem')
                }).finally(() => {
                    commit('setLoading', false)
                });
            } else commit('setToastError', 'Что-то пошло не так!')
        },
        payWithVoucherAccountAction({getters, commit, dispatch}, voucherAccount) {
            console.log('pay with voucher', voucherAccount)
            const basketOrder = getters['getBasketOrder'];
            const voucherWallet = getters['getWalletVoucher']
            if (basketOrder && voucherWallet) {
                commit('setLoading', true);
                paymentOrderTransactionApi({
                    is_reserve: basketOrder.is_reserve,
                    senderId: voucherWallet.user_id,
                    walletType: voucherWallet.type_id,
                    order_id: basketOrder.id,
                    transferAmount: voucherAccount
                }).then(res => {
                    console.log('first transaction ', res)
                    if (res.data.success) dispatch('payBasketOrderAction')
                    else commit('setToastError', 'first transaction problem')
                }).finally(() => {
                    commit('setLoading', false)
                });
            } else commit('setToastError', 'Что-то пошло не так!')
        },
        payWithMainAccountAction({getters, commit, dispatch}, mainAccount) {
            console.log('pay wit main account', mainAccount)
            const basketOrder = getters['getBasketOrder'];
            const mainWallet = getters['getWalletMain']
            if (basketOrder && mainWallet) {
                commit('setLoading', true);
                paymentOrderTransactionApi({
                    is_reserve: basketOrder.is_reserve,
                    senderId: mainWallet.user_id,
                    walletType: mainWallet.type_id,
                    order_id: basketOrder.id,
                    transferAmount: mainAccount
                }).then(res => {
                    console.log('first transaction ', res)
                    if (res.data.success) dispatch('payBasketOrderAction')
                    else commit('setToastError', 'first transaction problem')
                }).finally(() => {
                    commit('setLoading', false)
                });
            } else commit('setToastError', 'Что-то пошло не так!')
        },
        payWithSavingAccount({getters, commit, dispatch}, savingAccount) {
            console.log('pay with saving account', savingAccount)
            const basketOrder = getters['getBasketOrder'];
            const savingWallet = getters['getWalletSaving']
            if (basketOrder && savingWallet) {
                commit('setLoading', true);
                paymentOrderTransactionApi({
                    is_reserve: basketOrder.is_reserve,
                    senderId: savingWallet.user_id,
                    walletType: savingWallet.type_id,
                    order_id: basketOrder.id,
                    transferAmount: savingAccount
                }).then(res => {
                    console.log('first transaction ', res)
                    if (res.data.success) dispatch('payBasketOrderAction')
                    else commit('setToastError', 'first transaction problem')
                }).finally(() => {
                    commit('setLoading', false)
                });
            } else commit('setToastError', 'Что-то пошло не так!')
        },
        makeMainTransferTransactionSC({getters, commit}, transferAmount) {
            const cashTransaction = {
                receiverId: getters['getWalletCash'].user_id,
                senderId: getters['getReceiverUser'].id,
                cashAmount: transferAmount
            }
            console.log('makeMainTransferTransactionSC', cashTransaction)
            commit('setLoading', true)
            makeCashTransferTransactionApi(cashTransaction)
                .then(res => {
                    console.log('makeCashTransferTransactionApi', res)
                    if (res.data.success) {
                        const mainTransaction = {
                            senderId: getters['getWalletMain'].user_id,
                            receiverId: getters['getReceiverUser'].id,
                            cashAmount: transferAmount
                        }
                        return makeMainTransferTransactionApi(mainTransaction)
                    } else commit('setToastError', 'Something wrong in cash transaction')
                })
                .then(res => {
                    console.log('makeMainTransferTransactionApi res', res)
                    if (res.data.success) {
                        commit('setToastError', 'Транзакция прошла успешно!')
                        setTimeout(() => {
                            window.location.reload()
                        }, 1500);
                    } else commit('setToastError', 'Something wrong in main transaction')
                })
                .catch(err => {
                    console.log('makeCashTransferTransactionApi err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        makeMainTransactionAction({getters, commit}, transferAmount) {
            console.log('makeMainTransactionAction transferAmount', transferAmount)
            const senderWallet = getters['getWalletCash']
            const receiverWallet = getters['getWalletMain']
            if (senderWallet && receiverWallet) {
                commit('setLoading', true)
                makeCashTransactionApi({
                    senderId: senderWallet.user_id,
                    cashAmount: transferAmount
                }).then(res => {
                    console.log('makeCashTransactionApi', res)
                    if (res.data.success) {
                        return makePaymentSystemTransactionApi({
                            authorId: senderWallet.user_id,
                            cashAmount: transferAmount
                        })
                    } else commit('setToastError', 'Something wrong in makeCashTransactionApi')
                }).then(res => {
                    console.log('makePaymentSystemTransactionApi', res)
                    if (res.data.success) {
                        return makeMainAccountTransactionApi({
                            receiverId: receiverWallet.user_id,
                            transferAmount: transferAmount
                        })
                    } else commit('setToastError', 'Something wrong in makePaymentSystemTransactionApi')
                }).then(res => {
                    console.log('makeMainAccountTransactionApi', res)
                    if (res.data.success) {
                        commit('setToastError', 'Транзакция успешно проведена!')
                        setTimeout(() => {
                            window.location.reload()
                        }, 1500);
                    } else commit('setToastError', 'Something wrong in makeMainAccountTransactionApi')
                }).catch(err => {
                    console.log('makeMainTransactionAction', err)
                }).finally(() => {
                    commit('setLoading', false)
                });
            } else commit('setToastError', 'Some of wallets not found')
        },
        fetchTransactionTypesAction({commit}) {
            commit('setLoading', true)
            getTransactionTypesApi()
                .then(res => {
                    console.log('fetchTransactionTypesAction', res)
                })
                .catch(err => {
                    console.log('fetchTransactionTypesAction err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        makeBonusMarkTransactionAction({commit}, transactionObj) {
            console.log('makeBonusMarkTransactionAction', transactionObj)

            commit('setLoading', true)
            makeBonusMarkTransactionApi(transactionObj)
                .then(res => {
                    console.log('makeBonusMarkTransactionAction', res)

                })
                .catch(err => {
                    console.log('makeBonusMarkTransactionAction err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        getAllTransactionsByWalletIdAction({commit, getters}, query) {
            console.log('getAllTransactionsByWalletIdAction start', query)
            commit('setLoading', true)
            getAllTransactionByWalletIdApi(query)
                .then(res => {
                    console.log('getAllTransactionsByWalletIdAction', res)
                    if (res.data.success) {
                        // const accountBmc = getters['getBillingAccountMBC']
                        /*if (accountBmc) {
                            accountBmc.income = res.data.income
                            accountBmc.expense = res.data.expense
                            /!*res.data.model.data.map(i => {
                                if (i.to_account.id === accountBmc.id) {
                                    accountBmc.income += i.amount
                                } else accountBmc.expense += i.amount
                            });*!/
                            commit('setBillingAccountMBC', accountBmc)
                        }*/
                        if (window.location.href.includes('/user-bank-bonus-report'))
                            commit('setTransactionsBMC', res.data.model);
                        if (window.location.href.includes('/user-bank-reserve-report'))
                            commit('setTransactionsReserve', res.data.model)
                        if (window.location.href.includes('/user-bank-main-report'))
                            commit('setTransactionsMainAccount', res.data.model)
                        if (window.location.href.includes('/user-bank-bonus-rub-report'))
                            commit('setTransactionSavingAccount', res.data.model)
                    } else {
                        commit('setToastError', 'Не удалось загрузить историю транзакций')
                    }
                })
                .catch(err => {
                    console.log('getAllTransactionsByWalletIdAction err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        createTransactionAction({commit, getters}) {
            console.log('createTransactionAction', getters['getAdminTransactionCreate'])
            commit('setLoading', true)
            transactionStoreApi(getters['getAdminTransactionCreate'])
                .then(res => {
                    console.log('createTransactionAction res', res)
                    if (res.data.success) {
                        commit('setToastError', res.data.message)
                        commit('setAdminTransactionCreate', {
                            project_id: '',
                            type_code: '',
                            from_account_id: '',
                            to_account_id: '',
                            amount: '',
                            currency_code: '',
                            document: '',
                            comment: '',
                            creator_id: ''
                        })
                        return transactionsIndexApi()
                    } else commit('setToastError', res.data.message)
                })
                .then(res => {
                    console.log('transactionsIndexApi', res)
                    if (res.data.success) commit('setAdminTransactions', res.data.models)
                })
                .catch(err => {
                    console.log('createTransactionAction err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        updateTransactionAction({commit, getters}) {
            console.log('updateTransactionAction', getters['getAdminTransactionEdit'])
            commit('setLoading', true)
            transactionUpdateApi(getters['getAdminTransactionEdit'])
                .then(res => {
                    console.log('updateTransactionAction res', res)
                    if (res.data.success) {
                        commit('setToastError', res.data.message)
                        commit('setAdminTransactionEdit', null)
                        return transactionsIndexApi()
                    } else commit('setToastError', res.data.message)
                })
                .then(res => {
                    console.log('transactionsIndexApi', res)
                    if (res.data.success) {
                        commit('setAdminTransactions', res.data.models)
                    }
                })
                .catch(err => {
                    console.log('updateTransactionAction err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        removeTransactionAction({commit}, id) {
            console.log('removeTransactionAction', id)
            commit('setLoading', true)
            transactionDestroyApi(id)
                .then(res => {
                    if (res.data.success) {
                        commit('setToastError', res.data.message)
                        return transactionsIndexApi()
                    } else commit('setToastError', 'Something wrong')
                })
                .then(res => {
                    // console.log('get all transactions', res)
                    if (res.data.success) commit('setAdminTransactions', res.data.models)
                })
                .catch(err => {
                    console.log('removeTransactionAction err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        }
    },
    mutations: {
        setMainAccount(state, amount) {
            state.mainAccount = amount
        },
        setVoucherAccount(state, amount) {
            state.voucherAccount = amount
        },
        setSavingAccount(state, amount) {
            state.savingAccount = amount
        },
        setTransactionsMainAccount(state, transactions) {
            state.transactionsMainAccount = transactions
        },
        setAdminTransactionCreate(state, transaction) {
            state.adminTransactionCreate = transaction
        },
        setAdminTransactionEdit(state, transaction) {
            state.adminTransactionEdit = transaction
        },
        setAdminTransactions(state, transactions) {
            state.adminTransactions = transactions
        },
        setTransactionsReserve(state, transactions) {
            state.transactionsReserve = transactions
        },
        setTransactionsBMC(state, transactions) {
            state.transactionsBMC = transactions
        },
        setTransactionSavingAccount(state, transactions) {
            state.transactionsSavingAccount = transactions
        }
    },
    getters: {
        getMainAccount(state) {
            return state.mainAccount
        },
        getVoucherAccount(state) {
            return state.voucherAccount
        },
        getSavingAccount(state) {
            return state.savingAccount
        },
        getTransactionsMainAccount(state) {
            return state.transactionsMainAccount
        },
        getAdminTransactionCreate(state) {
            return state.adminTransactionCreate
        },
        getAdminTransactionEdit(state) {
            return state.adminTransactionEdit
        },
        getAdminTransactions(state) {
            return state.adminTransactions
        },
        getTransactionsReserve(state) {
            return state.transactionsReserve
        },
        getTransactionsBMC(state) {
            return state.transactionsBMC
        },
        getTransactionsSavingAccount(state) {
            return state.transactionsSavingAccount
        }
    }
}
