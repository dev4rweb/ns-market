import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        mentorUser: null,
        mentorPhysicalPerson: null,
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
        }

    },
    mutations: {
        setMentorUser(state, mentorUser) {
            state.mentorUser = mentorUser
        },
        setMentorPhysicalPerson(state, mentorPhysicalPerson) {
            state.mentorPhysicalPerson = mentorPhysicalPerson
        }
    },
    getters: {
        getMentorUser(state) {
            return state.mentorUser
        },
        getMentorPhysicalPerson(state) {
            return state.mentorPhysicalPerson
        }
    }
}
