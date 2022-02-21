import {WORK_HOST} from "../routeConsts";
import axios from "axios";
import {generateTempPassword} from "../utils/generateTempPassword";

export default {
    state: {
        inviter: null,
        mentorsInvite: [],
        currentMentorInvite: null
    },
    actions: {
        hasInviter({commit}) {
            const inviter = localStorage.getItem('invite')
            if (inviter) {
                const data = inviter.split(',')
                if (data) {
                    const invite = {
                        mentor_id: data[0],
                        phone: data[1]
                    }
                    commit('setInviter', invite)
                }
            }
        },
        findInviterByPhone({commit, dispatch}, phoneNumber) {
            const mobilePhone = phoneNumber.replace(/[^0-9]/g, '');
            console.log('findInviterByPhone', mobilePhone)
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/inviters-phone`, {
                mobile_phone: mobilePhone
            }).then(res => {
                console.log('findInviterByPhone res ', res)

                if (res.data.success && res.data.models) {
                    const mentors = res.data.models
                    mentors.forEach(i => dispatch('getMentorAsUserById', i.inviter_user_id))
                    commit('setIsShowRegisterForm', false)
                    commit('showMentorListModal', true)
                    // alert(`Вы успешно зарегистрировались. Количество найденных наставников - ${res.data.models.length}`)
                } else {
                    console.log('inviters 0')
                }
            }).catch(err => {

                console.log('findInviterByPhone err', err)
            }).finally(() => {
                // console.log('finally')
                commit('setLoading', false)
            });
        },
        getMentorAsUserById({commit, dispatch}, mentorId) {
            commit('setLoading', true);
            axios.post(`${WORK_HOST}market/get-user-phone`, {
                user_id: mentorId
            }).then(res => {
                console.log('getMentorAsUserById res', res)
                if (res.data.success && res.data.model) {
                    dispatch('getMentorAsPhysicalPerson', res.data.model)
                }
            }).catch(err => {
                console.log('getMentorAsUserById err', err)
            }).finally(() => commit('setLoading', false));
        },
        getMentorAsPhysicalPerson({commit}, mentorAsUser) {
            console.log('getMentorAsPhysicalPerson mentorAsUser', mentorAsUser)
            if (mentorAsUser && mentorAsUser.id) {
                commit('setLoading', true)
                axios.post(`${WORK_HOST}market/get-physical-user`, {
                    user_id: mentorAsUser.id
                }).then(res => {
                    console.log('getMentorAsPhysicalPerson res', res)
                    if (res.data.success && res.data.model) {
                        const mentorInvite = mentorAsUser
                        mentorInvite.physical = res.data.model
                        commit('setMentorsInvite', mentorInvite)
                    }
                }).catch(err => {
                    console.log('getMentorAsPhysicalPerson err', err)
                }).finally(() => commit('setLoading', false));
            }
        },
        registerUserWithInviter({commit, getters, dispatch}) {
            const userPhone = getters['getInviter'].phone
            const mentorId = getters['getCurrentMentorInvite'].id
            // const tempPassword = generateTempPassword(8)
            const tempPassword = 'password'
            console.log('registerUserWithInviter userPhone', userPhone)
            console.log('registerUserWithInviter mentorId', mentorId)
            console.log('registerUserWithInviter tempPassword', tempPassword)
            commit('setLoading', true)

            axios.post(`${WORK_HOST}market/create-inviter`, {
                mobile_phone: userPhone,
                password: 'password',
                mentorId: mentorId
            }).then(res => {
                console.log('registerUserWithInviter res', res)
                if (res.data.success && res.data.model) {
                    commit('showMentorListModal', false)
                    commit('setIsWelcomeRegisteredModal', true)
                    localStorage.setItem('phone_user', userPhone)
                    localStorage.setItem('password', 'password')
                    localStorage.setItem('user_id', res.data.model.id)
                    commit('setCurrentUser', res.data.model)
                    dispatch('sendFreeSms', {
                        mobile_phone: userPhone,
                        message: `. \n Ваш временный пароль: \n ${tempPassword}`,
                        modalMsgResponse: null
                    })
                }
            }).catch(err => {
                console.log('registerUserWithInviter err ', err)
            }).finally(()=> commit('setLoading', false));


        }

    },
    mutations: {
        setInviter(state, inviterUser) {
            state.inviter = inviterUser
        },
        setMentorsInvite(state, mentor) {
            const mentors = state.mentorsInvite
            mentors.push(mentor)
            state.mentorsInvite = mentors
        },
        removeOrSetOneMentorsInvite(state, mentor) {
            state.mentorsInvite = mentor
        },
        setCurrentMentorInvite(state, mentor) {
            state.currentMentorInvite = mentor
        }
    },
    getters: {
        getInviter(state) {
            return state.inviter
        },
        getMentorsInvite(state) {
            return state.mentorsInvite
        },
        getCurrentMentorInvite(state) {
            return state.currentMentorInvite
        }
    }
}
