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
