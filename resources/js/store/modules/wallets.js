import {createWalletApi, getWalletByTypeApi, getWalletsByUserIdApi} from "../actions/walletApi";
import {getCurrency} from "../utils/currency";

export default {
    state: {
        walletMain: null,
        walletSaving: null,
        walletVoucher: null,
        walletMBC: null,
        walletPVC: null,
        walletPartnerPV: null
    },
    actions: {
        getAllWalletsAction({getters, commit, dispatch}) {
            // const walletsAmount = getters['isPartner'] ? 6 : 5
            const walletsAmount = 6
            console.log('getAllWalletsAction', walletsAmount)
            const curUser = getters['getPhysicalPerson']
            if (curUser) {
                commit('setLoading', true);
                getWalletsByUserIdApi(curUser.user_id)
                    .then(res => {
                        console.log('getWalletsByUserIdApi', res)
                        if (res.data.success) {
                            if (!res.data.models.length) {
                                console.log('Need to create all wallets');
                                for (let i = 1; i <= walletsAmount; i++) {
                                    dispatch('createWalletAction', i)
                                }
                            }
                            if (res.data.models.length === walletsAmount) {
                                console.log('Need to add everything to state');
                                res.data.models.forEach(i => {
                                    switch (i.type_id) {
                                        case 1:
                                            commit('setWalletMain', i)
                                            break;
                                        case 2:
                                            commit('setWalletSaving', i)
                                            break;
                                        case 3:
                                            commit('setWalletVoucher', i)
                                            break;
                                        case 4:
                                            commit('setWalletMBC', i)
                                            break;
                                        case 5:
                                            commit('setWalletPVC', i)
                                            break;
                                        case 6:
                                            commit('setWalletPartnerPV', i)
                                            break;
                                    }
                                });
                            }
                            if (
                                res.data.models.length > 0 &&
                                res.data.models.length < walletsAmount
                            ) {
                                console.log('Need to find absents wallet')
                                for (let i = 1; i <= walletsAmount; i++) {
                                    const wallet = res.data.models.find(wal => wal.type_id === i)
                                    if (wallet) {
                                        switch (wallet.type_id) {
                                            case 1:
                                                commit('setWalletMain', wallet)
                                                break;
                                            case 2:
                                                commit('setWalletSaving', wallet)
                                                break;
                                            case 3:
                                                commit('setWalletVoucher', wallet)
                                                break;
                                            case 4:
                                                commit('setWalletMBC', wallet)
                                                break;
                                            case 5:
                                                commit('setWalletPVC', wallet)
                                                break;
                                            case 6:
                                                commit('setWalletPartnerPV', wallet)
                                                break;
                                        }
                                    } else dispatch('getWalletByTypeAction', i);
                                }
                            }
                        }
                    })
                    .catch(err => {
                        console.log('getAllWalletsAction err', err)
                        commit('setToastError', 'Something wrong')
                    })
                    .finally(() => {
                        console.log('finally')
                        commit('setLoading', false)
                    });
            }
        },
        createWalletAction({getters, commit}, type_id) {
            const curUser = getters['getPhysicalPerson'];
            if (curUser) {
                commit('setLoading', true);
                createWalletApi(curUser.user_id, type_id, getCurrency(type_id),
                    type_id === 1 ? 1 : 0)
                    .then(res => {
                            console.log('createWalletAction', res)
                            if (res.data.success && res.data.model) {
                                const walletType = res.data.model.type_id
                                switch (walletType) {
                                    case 1:
                                        commit('setWalletMain', res.data.model)
                                        break;
                                    case 2:
                                        commit('setWalletSaving', res.data.model)
                                        break;
                                    case 3:
                                        commit('setWalletVoucher', res.data.model)
                                        break;
                                    case 4:
                                        commit('setWalletMBC', res.data.model)
                                        break;
                                    case 5:
                                        commit('setWalletPVC', res.data.model)
                                        break;
                                    case 6:
                                        commit('setWalletPartnerPV', res.data.model)
                                        break;
                                }
                            }
                        })
                    .catch(err => {
                        console.log('createWalletAction err', err)
                    })
                    .finally(() => {
                        commit('setLoading', false);
                    });
            }
        },
        getWalletByTypeAction({commit, getters, dispatch}, type_id) {
            const curUser = getters['getPhysicalPerson'];
            if (curUser) {
                commit('setLoading', true);
                getWalletByTypeApi(curUser.user_id, type_id)
                    .then(res => {
                        console.log('getWalletByTypeAction', res)
                        if (res.data.success && !res.data.model)
                            dispatch('createWalletAction', type_id)
                    })
                    .catch(err => {
                        console.log('getWalletByTypeAction err', err)
                    })
                    .finally(() => {
                        commit('setLoading', false);
                    });
            }
        }
    },
    mutations: {
        setWalletMain(state, walletMain) {
            state.walletMain = walletMain
        },
        setWalletSaving(state, walletSaving) {
            state.walletSaving = walletSaving
        },
        setWalletVoucher(state, walletVoucher) {
            state.walletVoucher = walletVoucher
        },
        setWalletMBC(state, walletMBC) {
            state.walletMBC = walletMBC
        },
        setWalletPVC(state, walletPVC) {
            state.walletPVC = walletPVC
        },
        setWalletPartnerPV(state, walletPartnerPV) {
            state.walletPartnerPV = walletPartnerPV
        },
    },
    getters: {
        getWalletMain(state) {
            return state.walletMain
        },
        getWalletSaving(state) {
            return state.walletSaving
        },
        getWalletVoucher(state) {
            return state.walletVoucher
        },
        getWalletMBC(state) {
            return state.walletMBC
        },
        getWalletPVC(state) {
            return state.walletPVC
        },
        getWalletPartnerPV(state) {
            return state.walletPartnerPV
        },
    }
}
