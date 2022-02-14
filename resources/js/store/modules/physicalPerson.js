import {WORK_HOST} from "../routeConsts";
import axios from "axios";

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
                        if (!res.data.model.passport_photos) res.data.model.passport_photos = []
                        if (!res.data.model.photos) res.data.model.photos = []
                        commit('setPhysicalPerson', res.data.model)
                        dispatch('fetchAllAddresses')
                        if (res.data.model.mentor_user_id) {
                            dispatch('fetchMentorUserById', res.data.model.mentor_user_id)
                        }
                        dispatch('getCustomerOrdersByUserId')
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
        },
        updateStatusData({commit, getters}, file) {
            console.log('updateStatusData', file)
            const currentUser = getters['getPhysicalPerson']
            if (currentUser) {
                commit('setLoading', true);
                const fd = new FormData();
                fd.set('user_id', currentUser.user_id);
                fd.set('certificate_photo', file);

                axios.post(`${WORK_HOST}market/update-certificate`, fd)
                    .then(res => {
                        console.log('updateStatusData', res)
                        if (res.data.success) {
                            window.location.reload()
                        } else {
                            commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
                        }
                    })
                    .catch(err => {
                        console.log('updateStatusData err', err)
                        commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    });
            } else {
                commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
            }
        },
        createProfessionalStatusData({commit, getters, dispatch}, file) {
            console.log('updateProfessionalStatusData', file)
            const currentUser = getters['getPhysicalPerson']
            if (currentUser) {
                commit('setLoading', true)
                const fd = new FormData()
                fd.set('user_id', currentUser.user_id);
                fd.set('professional_photo', file)

                axios.post(`${WORK_HOST}market/create-professional`, fd)
                    .then(res => {
                        console.log('updateProfessionalStatusData', res)
                        if (res.data.success) {
                            const message = 'Была подана заявка на изменение статуса'
                            dispatch('sendFeedbackProfessionalData', message)
                        } else {
                            commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
                        }
                    })
                    .catch(err => {
                        console.log('updateProfessionalStatusData err', err)
                        commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    });
            } else {
                commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
            }
        },
        removeProfessionalData({commit, getters, dispatch}, removeObj) {
            console.log('removeProfessionalData', removeObj)
            commit('setLoading', true)

            axios.post(`${WORK_HOST}market/remove-professional`, removeObj)
                .then(res => {
                    console.log('removeProfessionalData', res)
                    if (res.data.success) {
                        const message = 'Заявка на изменение статуса была удалена'
                        dispatch('sendFeedbackProfessionalData', message)
                    } else {
                        commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
                    }
                })
                .catch(err => {
                    console.log('removeProfessionalData err', err)
                    commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        updatePassportData({commit, getters}, files = []) {
            const currentUser = getters['getPhysicalPerson']
            const user = getters['getCurrentUser']
            console.log('updatePassportData MAIN', currentUser.passport_photos)
            console.log('updatePassportData MAIN', files)
            if (currentUser) {
                const fd = new FormData()
                fd.set('user_id', currentUser.user_id);
                fd.set('passport_series', currentUser.passport_series)
                fd.set('passport_number', currentUser.passport_number)
                let passport_photos = currentUser.passport_photos ?? [];
                console.log('updatePassportData files', files, passport_photos)
                if (files.length) {
                    files.forEach(item => fd.set(item.name, item.file))
                    console.log('foreach files', files, passport_photos)
                    if (passport_photos.length) {
                        // console.log('updatePassportData current passport_photos', currentUser.passport_photos);
                        files.forEach(file => {
                            const foundUpdated = passport_photos.find(i => i.name === file.name)
                            // console.log('founded', passport_photos)
                            if (foundUpdated) {
                                // console.log('founded', foundUpdated)
                                foundUpdated.path = "users/physical_persons/passport_photos/" + file.file.name;
                            } else {
                                // console.log('not found')
                                const obj = {
                                    path: "users/physical_persons/passport_photos/" + file.file.name,
                                    originalName: file.file.name,
                                    date: Date.now(),
                                    name: file.name,
                                    note: 'passport_notice',
                                    author_user_full_name: `${user.last_name} ${user.first_name} ${user.middle_name}`
                                }
                                passport_photos.push(obj)
                            }
                        });
                    } else {
                        // console.log('global else', passport_photos)
                        files.forEach(file => {
                            const obj = {
                                path: "users/physical_persons/passport_photos/" + file.file.name,
                                originalName: file.file.name,
                                date: Date.now(),
                                name: file.name,
                                note: 'passport_notice',
                                author_user_full_name: `${user.last_name} ${user.first_name} ${user.middle_name}`
                            }
                            passport_photos.push(obj)
                        });
                        // console.log('updatePassportData passport_photos', passport_photos);
                    }
                    fd.set('passport_photos', JSON.stringify(passport_photos))
                }
                axios.post(`${WORK_HOST}market/update-passports`, fd)
                    .then(res => {
                        console.log('updatePassportData', res)
                        if (res.data.success) {
                            window.location.reload();
                        } else {
                            commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
                        }
                    })
                    .catch(err => {
                        console.log('updatePassportData err', err)
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
                    console.log('female', person)
                    return `${HOST}uploads/users/physical_persons/avatars/placeholder_512x512_female.jpg`
                }
            } else {
                // console.log('else')
                return `${HOST}uploads/users/physical_persons/avatars/placeholder_512x512_male.jpg`
            }
        },
        getFullPathToPassport(state) {
            let HOST = WORK_HOST.replace('/api', '')
            if (state.physicalPerson.passport_photos.length) {
                const photoObj = state.physicalPerson.passport_photos.find(i => i.name === 'passport_photo');
                if (photoObj) {
                    return `${HOST}storage/${photoObj.path}`;
                } else {
                    return null
                }

            } else {
                return null
            }
        },
        getFullPathToPassportAddress(state) {
            let HOST = WORK_HOST.replace('/api', '')
            if (state.physicalPerson.passport_photos.length) {
                const photoObj = state.physicalPerson.passport_photos.find(i => i.name === 'address_photo');
                if (photoObj) {
                    return `${HOST}storage/${photoObj.path}`;
                } else {
                    return null
                }

            } else {
                return null
            }
        },
        getFullPathToInterPassport(state) {
            let HOST = WORK_HOST.replace('/api', '')
            if (state.physicalPerson.passport_photos.length) {
                const photoObj = state.physicalPerson.passport_photos.find(i => i.name === 'interPassport_photo');
                if (photoObj) {
                    return `${HOST}storage/${photoObj.path}`;
                } else {
                    return null
                }

            } else {
                return null
            }
        },

        getFullPathCertificate(state) {
            let HOST = WORK_HOST.replace('/api', '')
            if (state.physicalPerson.photos[0]) {
                return `${HOST}storage/${state.physicalPerson.photos[0].path}`;
            } else {
                return null
            }
        },

        getFullPathToProfessionalDoc(state) {
            let HOST = WORK_HOST.replace('/api', '')
            if (
                state.physicalPerson.statuses
                &&
                state.physicalPerson.statuses.length
            ) {
                const status = state.physicalPerson.statuses.find(i => i.name.includes('сметолог') || i.name.includes('рматолог'))
                if (status) {
                    const path = JSON.parse(status.pivot.confirmation_documents);
                    console.log('getFullPathToProfessionalDoc', status);
                    return `${HOST}uploads/${path[0].path}`;
                } else {
                    return null
                }
            } else {
                return null
            }
        },

        isProfessionalStatus(state) {
            if (state.physicalPerson && state.physicalPerson.statuses) {
                if (
                    state.physicalPerson.statuses
                    &&
                    state.physicalPerson.statuses.length
                ) {
                    const status = state.physicalPerson.statuses.find(
                        i => i.name.includes('сметолог') || i.name.includes('рматолог')
                    )
                    return status.pivot.confirmed_at !== null;
                } else return false
            } else {
                return false
            }
        },
        isPartner(state) {
            if (state.physicalPerson && state.physicalPerson.trade_status) {
                switch (state.physicalPerson.trade_status) {
                    case 'D':
                    case 'K':
                        return true
                    default:
                        return false
                }
            } else {
                return false
            }
        }
    }
}
