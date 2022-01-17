import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        mentorUser: null,
        mentorPhysicalPerson: null,
        isMentorChangePhoneForm: true,
        isMentorPhoneFounded: false,
        isMentorPhoneConfirmation: false,
        temporaryMentor: null,
        temporaryPhysicalMentor: null,
    },
    actions: {
        fetchMentorUserById({commit, dispatch}, mentorUserId) {
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/get-user-phone`, {
                user_id: mentorUserId
            }).then(res => {
                console.log('fetchMentorUserById', res)
                if (res.data.success) {
                    const user = res.data.model
                    if (user) {
                        commit('setMentorUser', user)
                        dispatch('fetchMentorPhysicalPerson', user.id)
                    }
                }
            }).catch(err => {
                console.log('fetchMentorUserById err', err)
            }).finally(() => {
                commit('setLoading', false)
            });
        },
        fetchMentorPhysicalPerson({commit}, mentorUserId) {
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/get-physical-user`, {
                user_id: mentorUserId
            }).then(res => {
                console.log('fetchMentorPhysicalPerson', res)
                if (res.data.success) {
                    const user = res.data.model
                    if (user) {
                        commit('setMentorPhysicalPerson', user)
                    }
                }
            }).catch(err => {
                console.log('fetchMentorPhysicalPerson err', err)
            }).finally(() => {
                commit('setLoading', false)
            });
        },
        findChangingMentorByPhone({commit, dispatch}, phoneNumber) {
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/get-user-phone`, {
                phone: phoneNumber
            }).then(res => {
                console.log('findChangingMentorByPhone', res);
                if (res.data.success) {
                    if (res.data.model.length > 1) {
                        commit('setToastError', 'За этим номером зарегистрировано несколько пользователей. Обратитесь к администрации!')

                    } else if (res.data.model.length === 0) {
                        commit('setToastError', 'Мы не нашли человека с таким номером телефона в нашей базе. Проверьте правильность введённых данных и повторите попытку.');
                    } else if (res.data.model.length === 1) {
                        commit('setTemporaryMentor', res.data.model[0])
                        dispatch('fetchTemporaryMentorPhysicalPerson', res.data.model[0].id)
                    } else {
                        commit('setToastError', 'Непредвиденная ошибка')
                    }
                } else commit('setToastError', 'Что-то пошло не так, попробуйте позже')
            }).catch(err => {
                console.log('findChangingMentorByPhone err', err)
                commit('setToastError', 'Что-то пошло не так, попробуйте позже')
            }).finally(() => {
                commit('setLoading', false)
            });
        },
        fetchTemporaryMentorPhysicalPerson({commit}, mentorUserId) {
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/get-physical-user`, {
                user_id: mentorUserId
            }).then(res => {
                console.log('fetchMentorPhysicalPerson', res)
                if (res.data.success) {
                    const user = res.data.model
                    if (user) {
                        commit('setTemporaryPhysicalMentor', user)
                        commit('setIsMentorChangePhoneForm', false)
                        commit('setIsMentorPhoneFounded', true)
                    }
                }
            }).catch(err => {
                console.log('fetchMentorPhysicalPerson err', err)
            }).finally(() => {
                commit('setLoading', false)
            });
        },
        toggleStatus({commit, getters}) {
            const user = getters['getCurrentUser']
            if (user) {
                commit('setLoading', true);
                axios.post(`${WORK_HOST}market/toggle-status`, {
                    user_id: user.id
                }).then(res => {
                    console.log('toggleStatus', res)
                    if (res.data.success) {
                        commit('setToastError', 'Статус успешно изменен')
                        setTimeout(() => {
                            window.location.reload()
                        }, 2000);
                    } else commit('setToastError', 'Что-то пошло не так, попробуйте позже')
                }).catch(err => {
                    console.log('toggleStatus err', err)
                    commit('setToastError', 'Что-то пошло не так, попробуйте позже')
                }).finally(() => {
                    commit('setLoading', false)
                });
            } else {
                commit('setToastError', 'Что-то пошло не так, попробуйте позже')
            }
        },
        changeMentor({commit, getters}) {
            const user = getters['getCurrentUser']
            const tempMentor = getters['getTemporaryMentor']
            console.log('changeMentor user', user)
            console.log('changeMentor tempMentor', tempMentor)
            if (user && tempMentor) {
                commit('setLoading', true);
                axios.post(`${WORK_HOST}market/change-mentor`, {
                    user_id: user.id,
                    mentor_user_id: tempMentor.id
                }).then(res => {
                    console.log('changeMentor', res)
                    if (res.data.success) {
                        commit('setToastError', 'Наставник успешно изменен')
                        commit('setIsMentorPhoneFounded', false)
                        commit('setIsMentorPhoneConfirmation', true)
                    } else commit('setToastError', 'Что-то пошло не так, попробуйте позже')
                }).catch(err => {
                    console.log('changeMentor err', err)
                    commit('setToastError', 'Что-то пошло не так, попробуйте позже')
                }).finally(() => {
                    commit('setLoading', false)
                });
            } else {
                commit('setToastError', 'Что-то пошло не так, попробуйте позже')
            }
        }
    },
    mutations: {
        setMentorUser(state, mentorUser) {
            state.mentorUser = mentorUser
        },
        setMentorPhysicalPerson(state, mentorPhysicalPerson) {
            state.mentorPhysicalPerson = mentorPhysicalPerson
        },
        setIsMentorChangePhoneForm(state, isShow) {
            state.isMentorChangePhoneForm = isShow
        },
        setIsMentorPhoneFounded(state, isShow) {
            state.isMentorPhoneFounded = isShow
        },
        setIsMentorPhoneConfirmation(state, isShow) {
            state.isMentorPhoneConfirmation = isShow
        },
        setTemporaryMentor(state, tempMentor) {
            state.temporaryMentor = tempMentor
        },
        setTemporaryPhysicalMentor(state, tempPhysicalMentor) {
            state.temporaryPhysicalMentor = tempPhysicalMentor
        }
    },
    getters: {
        getMentorUser(state) {
            return state.mentorUser
        },
        getMentorPhysicalPerson(state) {
            return state.mentorPhysicalPerson
        },
        getIsMentorChangePhoneForm(state) {
            return state.isMentorChangePhoneForm
        },
        getIsMentorPhoneFounded(state) {
            return state.isMentorPhoneFounded
        },
        getIsMentorPhoneConfirmation(state) {
            return state.isMentorPhoneConfirmation
        },
        getTemporaryMentor(state) {
            return state.temporaryMentor
        },
        getMentorAvatar(state) {
            let HOST = WORK_HOST.replace('/api', '')
            let person = state.mentorPhysicalPerson
            if (person) {
                if (person.avatar_image) {
                    return `${HOST}${person.avatar_image.replaceAll(/\\/g, "")}`;
                } else {
                    return `${HOST}uploads/users/physical_persons/avatars/placeholder_512x512_male.jpg`
                }
            } else
                return `${HOST}uploads/users/physical_persons/avatars/placeholder_512x512_male.jpg`
        },
        getTempMentorAvatar(state) {
            let HOST = WORK_HOST.replace('/api', '')
            let person = state.temporaryPhysicalMentor
            if (person) {
                if (person.avatar_image) {
                    return `${HOST}${person.avatar_image.replaceAll(/\\/g, "")}`;
                } else {
                    return `${HOST}uploads/users/physical_persons/avatars/placeholder_512x512_male.jpg`
                }
            } else
                return `${HOST}uploads/users/physical_persons/avatars/placeholder_512x512_male.jpg`
        }
    }
}
