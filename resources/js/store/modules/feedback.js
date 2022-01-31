import {LOCAL_HOST, WORK_HOST} from "../routeConsts";

export default {
    state: {
        feedback: null
    },
    actions: {
        sendFeedbackSupport({commit, getters}, msg) {
            const currentUser = getters['getCurrentUser']
            const modal = getters['getModalFeedbackConfirmRef']
            if (currentUser && modal) {
                const feedbackItem = {
                    full_name: `${currentUser.last_name} ${currentUser.first_name} ${currentUser.middle_name}`,
                    phone: currentUser.mobile_phone,
                    mail: currentUser.email,
                    msg: msg,
                    physical_persons_id: currentUser.id,
                }
                commit('setLoading', true);
                axios.post(`${WORK_HOST}market/feedback-support`, feedbackItem)
                    .then(res => {
                        console.log('sendFeedbackSupport', res)
                        if (res.data.success) {
                            commit('setToastError', 'Сообщение отправлено')
                            // window.location.reload()
                        } else
                            commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');

                        modal.click()
                    })
                    .catch(err => {
                        console.log('sendFeedbackSupport err', err)
                        commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    });
            } else {
                commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
            }
        },
        sendFeedbackProfessionalData({commit, getters}, msg) {
            const currentUser = getters['getCurrentUser']
            if (currentUser) {
                const feedbackItem = {
                    full_name: `${currentUser.last_name} ${currentUser.first_name} ${currentUser.middle_name}`,
                    phone: currentUser.mobile_phone,
                    mail: currentUser.email,
                    msg: msg,
                    physical_persons_id: currentUser.id,
                }
                commit('setLoading', true);
                axios.post(`${WORK_HOST}market/feedback-support`, feedbackItem)
                    .then(res => {
                        console.log('sendFeedbackSupport', res)
                        if (res.data.success) {
                            window.location.reload()
                        } else
                            commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
                        if (WORK_HOST === LOCAL_HOST) {
                            window.location.reload()
                        }
                    })
                    .catch(err => {
                        console.log('sendFeedbackSupport err', err)
                        commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    });
            } else {
                commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
            }
        }
    }
}
