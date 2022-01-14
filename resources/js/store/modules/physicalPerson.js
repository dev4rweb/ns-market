import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        physicalPerson: null
    },
    actions: {
        fetchPhysicalPerson({commit, getters, dispatch}) {
            commit('setLoading', true)
            if (!getters['getCurrentUser']) {
                commit('setCurrentUser', window.User)
                dispatch('getUserByPhoneOrUserId', getters['getCurrentUser'].user_id)
            }
            if (getters['getCurrentUser']) {
                // console.log('fetchPhysicalPerson currentUser', getters['getCurrentUser'])
                axios.post(`${WORK_HOST}market/get-physical-user`, {
                    user_id: getters['getCurrentUser'].user_id
                }).then(res => {
                    console.log('fetchPhysicalPerson', res)
                    if (res.data.model) {
                        commit('setPhysicalPerson', res.data.model)
                        if (res.data.model.mentor_user_id) {
                            dispatch('fetchMentorUserById', res.data.model.mentor_user_id)
                        }
                    }
                }).catch(err => {
                    console.log('fetchPhysicalPerson err', err)
                }).finally(() => {
                    commit('setLoading', false)
                });
            }
        },
        updatePhysicalPersonData({commit, getters, dispatch}) {
            const currentUser = getters['getPhysicalPerson']
            console.log('updatePhysicalPersonData currentUser', currentUser)
            if (currentUser) {
                commit('setLoading', true)
                axios.post(`${WORK_HOST}market/update-physical-person`, currentUser)
                    .then(res => {
                        console.log('updatePhysicalPersonData res', res)
                        if (res.data.success) {
                            commit('setPhysicalPerson', res.data.model)
                            dispatch('updateUserDataLocal')
                        } else
                            commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
                    })
                    .catch(err => {
                        console.log('updatePhysicalPersonData err', err)
                        commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    });
            } else {
                commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
            }
        }
    },
    mutations: {
        setPhysicalPerson(state, physicalPerson) {
            state.physicalPerson = physicalPerson
        }
    },
    getters: {
        getPhysicalPerson(state) {
            return state.physicalPerson
        }
    }
}
