import {findUserByPhoneOrUserIdApi} from "../actions/userApi";

export default {
    state: {
        receiverUserMsg: null,
        receiverUser: null,
    },
    actions: {
        findBonusMarkReceiverByUserIdAction({getters, commit}, userId) {
            // console.log('findBonusMarkReceiverByUserIdAction', userId)
            commit('setLoading', true)
            findUserByPhoneOrUserIdApi(userId)
                .then(res => {
                    console.log('findBonusMarkReceiverByUserIdAction', res)
                    if (res.data.success) {
                        commit('setReceiverUser', res.data.model)
                    } else {
                        commit('setReceiverUserMsg', 'Пользователь не найден')
                    }
                })
                .catch(err => {
                    console.log('findBonusMarkReceiverByUserIdAction err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },

    },
    mutations: {
        setReceiverUser(state, receiverUser) {
            state.receiverUser = receiverUser
        },
        setReceiverUserMsg(state, msg) {
            state.receiverUserMsg = msg
        }
    },
    getters: {
        getReceiverUser(state) {
            return state.receiverUser
        },
        getReceiverUserMsg(state) {
            return state.receiverUserMsg
        }
    }
}
