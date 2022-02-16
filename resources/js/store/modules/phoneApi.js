import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        secret: null
    },
    actions: {
        verificationBySms({commit, getters, dispatch}) {
            const currentUser = getters['getCurrentUser']
            console.log('verificationBySms currentUser', currentUser)
            if (currentUser) {
                commit('setLoading', true)
                axios.post(`${WORK_HOST}market/send-user-sms`, {
                    user_id: currentUser.id,
                    mobile_phone: currentUser.mobile_phone
                }).then(res => {
                    console.log('updateUserPhysicalPersonBySms res', res)
                    if (res.data.success)
                        commit('setSecret', res.data.model.mobile_phone_confirmation_code)
                     else
                        commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
                }).catch(err => {
                    console.log('updateUserPhysicalPersonBySms err', err)
                    commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
                }).finally(() => {
                    commit('setLoading', false)
                });
            } else {
                commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
            }
        },
        sendFreeSms({commit}, smsObj) {
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/send-message`, {
                phone_number: smsObj.mobile_phone,
                message: smsObj.message
            }).then(res => {
                console.log('sendFreeSms res', res)
            }).catch(err => {
                console.log('sendFreeSms err', err)
            }).finally(() => {
                commit('setLoading', false)
            });
        }
    },
    mutations: {
        setSecret(state, secret) {
            state.secret = secret
        }
    },
    getters: {
        getSecret(state) {
            return state.secret
        }
    }
}
