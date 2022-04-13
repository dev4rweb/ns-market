import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        partnerPaymentDetail: {
            user_id: null,
            name: '',
            inn: '',
            isPP: '1',
            account_number: '',
            bic: '',
            bank: '',
            correspondent_account: '',
            card_number: ''
        }
    },
    actions: {
        fetchPartnerPaymentDetailAction({commit, getters}) {
            const curUser = getters['getPhysicalPerson']
            const user = getters['getCurrentUser']
            // console.log('fetchPartnerPaymentDetail', curUser)
            if (curUser) {
                commit('setPartnerPaymentDetail', {
                    user_id: curUser.user_id,
                    name: user ? user.full_name : ''
                })
                commit('setLoading', true)
                axios.post(`${WORK_HOST}market/get-user-partner-payment-detail`, {
                    user_id: curUser.user_id
                }).then(res => {
                    console.log('fetchPartnerPaymentDetailAction res', res)
                    if (res.data.success && res.data.model)
                        commit('setPartnerPaymentDetail', res.data.model)
                }).catch(err => {
                    console.log('fetchPartnerPaymentDetailAction err', err)
                }).finally(() => {
                    commit('setLoading', false)
                });
            } else commit('setToastError', 'Something was wrong')
        },
        savePartnerPaymentDetailAction({commit, getters}, ) {
            // console.log('savePartnerPaymentDetailAction', getters['getPartnerPaymentDetail'])
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/save-user-partner-payment-detail`,
                getters['getPartnerPaymentDetail'])
                .then(res => {
                    console.log('savePartnerPaymentDetailAction ', res)
                    if (res.data.success && res.data.model) {
                        commit('setPartnerPaymentDetail', res.data.model)
                        commit('setToastError','Данные успешно сохранены')
                    }
                })
                .catch(err => console.log('savePartnerPaymentDetailAction err', err))
                .finally(()=> commit('setLoading', false));
        }
    },
    mutations: {
        setPartnerPaymentDetail(state, partnerPaymentObj) {
            state.partnerPaymentDetail.user_id = partnerPaymentObj.user_id || state.partnerPaymentDetail.user_id
            state.partnerPaymentDetail.name = partnerPaymentObj.name || state.partnerPaymentDetail.name
            state.partnerPaymentDetail.inn = partnerPaymentObj.inn || state.partnerPaymentDetail.inn
            state.partnerPaymentDetail.isPP = partnerPaymentObj.isPP || state.partnerPaymentDetail.isPP
            state.partnerPaymentDetail.account_number = partnerPaymentObj.account_number || state.partnerPaymentDetail.account_number
            state.partnerPaymentDetail.bic = partnerPaymentObj.bic || state.partnerPaymentDetail.bic
            state.partnerPaymentDetail.bank = partnerPaymentObj.bank || state.partnerPaymentDetail.bank
            state.partnerPaymentDetail.correspondent_account = partnerPaymentObj.correspondent_account || state.partnerPaymentDetail.correspondent_account
            state.partnerPaymentDetail.card_number = partnerPaymentObj.card_number || state.partnerPaymentDetail.card_number
        }
    },
    getters: {
        getPartnerPaymentDetail(state) {
            return state.partnerPaymentDetail
        }
    }
}
