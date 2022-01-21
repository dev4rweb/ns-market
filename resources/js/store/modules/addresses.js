import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        address: []
    },
    actions: {
        fetchAllAddresses({commit, getters}) {
            const currentUser = getters['getPhysicalPerson']
            // console.log('fetchAllAddresses - ', currentUser)
            if (currentUser) {
                commit('setLoading', true);
                axios.post(`${WORK_HOST}market/all-addresses`, {
                    user_id: currentUser.id
                }).then(res => {
                    console.log('fetchAllAddresses', res)
                    if (res.data.success) {
                        commit('setAddresses', res.data.models)
                    }
                }).catch(err => {
                    console.log('fetchAllAddresses err', err)
                    commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
                }).finally(() => {
                    commit('setLoading', false)
                });
            } else {
                commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
            }
        }
    },
    mutations: {
        setAddresses(state, addresses) {
            state.address = addresses
        }
    },
    getters: {
        getAddresses(state) {
            return state.address
        }
    }
}
