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
        },
        uploadAvatar({commit, getters}, file) {
            console.log('uploadAvatar', file)
            const currentUser = getters['getPhysicalPerson']
            if (currentUser) {
                commit('setLoading', true)
                const fd = new FormData()
                fd.set('user_id', currentUser.user_id)
                fd.set('image', file)
                axios.post(`${WORK_HOST}market/upload-avatar`, fd)
                    .then(res => {
                        console.log('updatePhysicalPersonData res', res)
                        if (res.data.success) {
                            commit('setPhysicalPerson', res.data.model)
                            window.location.reload()
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
        },
        getAvatar(state) {
            let HOST = WORK_HOST.replace('/api', '')
            // let HOST = 'http://staging-admin.newstarmlm.biz/'
            let person = state.physicalPerson
            if (person) {
                if (person.avatar_image) {
                    console.log('avatar')
                    return `${HOST}${person.avatar_image.replaceAll(/\\/g, "")}`; // remove backslash in path from server
                } else if (person.gender == 'М') {
                    console.log('male')
                    return `${HOST}uploads/users/physical_persons/avatars/placeholder_512x512_male.jpg`
                } else {
                    console.log('female', person )
                    return `${HOST}uploads/users/physical_persons/avatars/placeholder_512x512_female.jpg`
                }
            } else {
                console.log('else')
                return `${HOST}uploads/users/physical_persons/avatars/placeholder_512x512_male.jpg`
            }
        },
        getFullPathToPassport(state) {
            let HOST = WORK_HOST.replace('/api', '')
            if (state.physicalPerson.passport_photos[0]) {
                return `${HOST}storage/${state.physicalPerson.passport_photos[0].path}`
            }
        },
        getFullPathToPassportAddress(state) {
            let HOST = WORK_HOST.replace('/api', '')
            if (state.physicalPerson.passport_photos[1]) {
                return `${HOST}storage/${state.physicalPerson.passport_photos[1].path}`
            }
        },
        getFullPathToInterPassport(state) {
            let HOST = WORK_HOST.replace('/api', '')
            if (state.physicalPerson.passport_photos[2]) {
                return `${HOST}storage/${state.physicalPerson.passport_photos[2].path}`
            }
        },

        getFullPathCertificate(state) {
            let HOST = WORK_HOST.replace('/api', '')
            if (state.physicalPerson.photos[0]) {
                return `${HOST}storage/${state.physicalPerson.photos[0].path}`
            }
        }
    }
}
