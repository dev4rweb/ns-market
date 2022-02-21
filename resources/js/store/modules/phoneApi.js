import {LOCAL_HOST, WORK_HOST} from "../routeConsts";

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
        phoneVerification({commit}, phoneNumber) {
            const mobilePhone = phoneNumber.replace(/[^0-9]/g, '');
            commit('setLoading', true)
            const isDebug = WORK_HOST === LOCAL_HOST
            console.log('phoneVerification', mobilePhone, isDebug)
            axios.post(`${WORK_HOST}market/phone-verification`, {
                phone_number: mobilePhone,
                is_debug: isDebug
            }).then(res => {
                console.log('phoneVerification res', res)
                if (res.data.success) {
                    commit('setSecret', res.data.secret)
                }
            }).catch(err => {
                console.log('phoneVerification err', err)
            }).finally(() => {
                commit('setLoading', false)
            });
        },
        sendFreeSms({commit}, smsObj) {
            if (WORK_HOST === LOCAL_HOST) {
                commit('setLoading', true)
                setTimeout(() => {
                    commit('setLoading', false);
                    if (smsObj.modalMsgResponse) {
                        const modalSuccess = document.getElementById('modalSuccessMessage')
                        if (modalSuccess) {
                            commit('setModalSuccessMessage', smsObj.modalMsgResponse)
                            modalSuccess.click()
                        }
                    }
                }, 1000);
            } else {
                commit('setLoading', true);
                axios.post(`${WORK_HOST}market/send-message`, {
                    phone_number: smsObj.mobile_phone,
                    message: smsObj.message
                }).then(res => {
                    console.log('sendFreeSms res', res)
                    if (res.data.success && smsObj.modalMsgResponse) {
                        const modalSuccess = document.getElementById('modalSuccessMessage')
                        if (modalSuccess) {
                            commit('setModalSuccessMessage', smsObj.modalMsgResponse)
                            modalSuccess.click()
                        }
                    }
                }).catch(err => {
                    console.log('sendFreeSms err', err)
                }).finally(() => {
                    commit('setLoading', false)
                });
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
