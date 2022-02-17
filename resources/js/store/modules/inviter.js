import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        inviter: null,
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
        findInviterByPhone({commit}, phoneNumber) {
            const mobilePhone = phoneNumber.replace(/[^0-9]/g, '');
            console.log('findInviterByPhone', mobilePhone)
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/inviters-phone`, {
                mobile_phone: mobilePhone
            }).then(res => {
                console.log('findInviterByPhone res ', res)

                if (res.data.success) {
                    alert(`Вы успешно зарегистрировались. Количество найденных наставников - ${res.data.models.length}`)
                } else {

                }
            }).catch(err => {

                console.log('findInviterByPhone err', err)
            }).finally(() => {
                commit('setLoading', false)
            });
        }
    },
    mutations: {
        setInviter(state, inviterUser) {
            state.inviter = inviterUser
        }
    },
    getters: {
        getInviter(state) {
            return state.inviter
        }
    }
}
