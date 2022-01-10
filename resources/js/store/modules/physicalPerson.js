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
                    }
                }).catch(err => {
                    console.log('fetchPhysicalPerson err', err)
                }).finally(() => {
                    commit('setLoading', false)
                });
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
