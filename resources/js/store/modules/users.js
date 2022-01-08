import {WORK_HOST} from "../routeConsts";

export default {
    actions: {
        getUserByPhoneOrUserId({commit}, phoneOrUserId) {
            commit('setLoading', true)
            let isByUserId = false
            const fd = new FormData()
            if (phoneOrUserId.length > 8) {
                phoneOrUserId = phoneOrUserId.slice(1, phoneOrUserId.length)
                fd.set('phone', phoneOrUserId)
                commit('setCurrentPhone', phoneOrUserId)
            } else {
                fd.set('user_id', phoneOrUserId);
                isByUserId = true
            }

            axios.post(`${WORK_HOST}market/get-user-phone`, fd)
                .then(res => {
                    console.log('getUserByPhoneOrUserId', res)
                    commit('setShowLoginWithPhone', false)
                    if (res.data.success) {
                        if (!isByUserId) {
                            const users = res.data.model;
                            commit('setUsers', users);
                            if (!users.length) {
                                console.log('register or login by Id')
                                commit('setShowRegisterLoginForm', true)
                            }
                            if (users.length === 1) {
                                console.log('login with phone')
                                commit('setShowWelcomePasswordForm', true)
                                commit('setCurrentUser', users[0])
                            }
                            if (users.length > 1) {
                                console.log('many users login by Id')
                                commit('setIsNeedToConfirmPhone', true)
                                commit('setIsShowNotUniquePhoneForm', true)
                            }
                        } else {
                            const user = res.data.model
                            if (user) {
                                commit('setCurrentUser', user)
                                commit('setIsNeedToConfirmPhone', true)
                                commit('setIsShowLoginByIdForm', false)
                                commit('setIsShowNotUniquePhoneForm', false)
                                commit('setShowWelcomePasswordForm', true)
                            }
                        }
                    }
                })
                .catch(err => {
                    console.log('getUserByPhoneOrUserId err', err.response.data)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },

        localLogin({commit, getters, dispatch}, password) {
            commit('setLoading', true)
            const user = getters['getCurrentUser']
            if (user) {
                const userLogin = {
                    email: user.email,
                    password: password,
                    remember: false
                };
                dispatch('comparePassword', password)
                /*axios.post('/login', userLogin)
                    .then(res => {
                        console.log('localLogin', res)
                        if (res.status === 204)
                            window.location.href = '/user-panel'
                    }).catch(err => {
                    console.log('localLogin err', err.response.data)
                    if (err.response.data.errors.email[0].includes('These credentials do not match our records.'))
                        dispatch('localRegister', password)
                    else alert('Что-то пошло не так, попробуйте позже')
                }).finally(() => {
                    commit('setLoading', false)
                });*/
            } else {
                alert('Something wrong')
            }

        },

        comparePassword({getters, commit}, password) {
            const user = getters['getCurrentUser']
            console.log('current User compare', user)
            const data = {
                user_id: user.id,
                password: password
            }
            axios.post(`${WORK_HOST}market/compare-password`, data)
                .then(res => {
                    console.log('comparePassword', res)
                })
                .catch(err => {
                    console.log('comparePassword err', err)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },

        localRegister({commit, getters}, password) {
            commit('setLoading', true)
            const newUser = getters['getCurrentUser']
            console.log('localRegistration', newUser)
            const fd = new FormData()
            fd.set('user_id', newUser.id)
            fd.set('name', newUser.name)
            fd.set('email', newUser.email)
            fd.set('first_name', newUser.first_name)
            fd.set('last_name', newUser.last_name)
            fd.set('middle_name', newUser.middle_name)
            fd.set('mobile_phone', newUser.mobile_phone)
            fd.set('password', password)
            fd.set('password_confirmation', password)
            fd.set('type', newUser.type)
            axios.post('/register', fd)
                .then(res => {
                    console.log('localRegistration', res)
                    if (res.status === 201)
                        window.location.href = '/user-panel'
                })
                .catch(err => {
                    console.log('localRegistration err', err.response.data)
                    alert('Что-то пошло не так, попробуйте позже')
                })
                .finally(() => {
                    this.loading = false
                });
        },

        changeDuplicatePhones({commit, getters, dispatch}, phoneNumber) {
            phoneNumber = phoneNumber.slice(1, phoneNumber.length)
            const currentUser = getters['getCurrentUser']
            console.log('changeDuplicatePhones', currentUser, phoneNumber)
            axios.post(`${WORK_HOST}market/change-duplicate-phone`, {
                mobile_phone: phoneNumber,
                user_id: currentUser.id,
                active_phone: phoneNumber
            }).then(res => {
                console.log(res)
                if (res.data.success) {
                    if (res.data.model) {
                        commit('setCurrentUser', res.data.model);
                    }
                    dispatch('changeLocalPhoneNumber', phoneNumber);
                } else {
                    alert('Что-то пошло не по плану...')
                }
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                commit('setLoading', false)
            });
        },

        changeLocalPhoneNumber({commit, getters}, phoneNumber) {
            commit('setLoading', true)
            const currentUser = getters['getCurrentUser']
            console.log('changeLocalPhoneNumber',currentUser, phoneNumber)
            axios.post(`/api/users/${currentUser.id}`, {
                _method: 'PUT',
                mobile_phone: phoneNumber,
            }).then(res => {
                console.log('updateUser res', res)
                if (res.data.success) {
                    const updatedUser = res.data.model;
                    if (updatedUser) {
                        commit('setCurrentUser', updatedUser);
                    }
                    commit('setIsConfirmPhoneFrom', false)
                    commit('setShowWelcomePasswordForm', true)
                } /*else {
                    this.user.mobile_phone = this.phone
                    this.$emit('phoneConfirmed', this.user);
                }*/
            }).catch(err => {
                console.log('updateUser err', err)
            }).finally(() => {
                commit('setLoading', false)
            });
        }
    },
    mutations: {
        setLoading(state, isLoading) {
            state.loading = isLoading
        },
        setUsers(state, users) {
            state.users = users
        },
        setCurrentUser(state, currentUser) {
            state.currentUser = currentUser
        },
        setCurrentPhone(state, currentPhone) {
            state.currentPhone = currentPhone
        },
        setIsNeedToConfirmPhone(state, isNeedToConfirm) {
            state.isNeedToConfirmPhone = isNeedToConfirm
        },
        setShowLoginWithPhone(state, isShow) {
            state.isShowLoginWithPhone = isShow
        },
        setShowWelcomePasswordForm(state, isShow) {
            state.isShowWelcomePasswordForm = isShow
        },
        setShowRegisterLoginForm(state, isShow) {
            state.isShowRegisterLoginForm = isShow
        },
        setIsShowNotUniquePhoneForm(state, isShow) {
            state.isShowNotUniquePhoneForm = isShow
        },
        setIsShowRegisterForm(state, isShow) {
            state.isShowRegisterForm = isShow
        },
        setIsShowLoginByIdForm(state, isShow) {
            state.isShowLoginByIdForm = isShow
        },
        setIsConfirmPhoneFrom(state, isShow) {
            state.isShowConfirmPhoneFrom = isShow
        }
    },
    state: {
        loading: false,
        currentUser: null,
        currentPhone: '+7',
        users: [],
        isNeedToConfirmPhone: false,
        isShowLoginWithPhone: true,
        isShowWelcomePasswordForm: false,
        isShowRegisterLoginForm: false,
        isShowNotUniquePhoneForm: false,
        isShowRegisterForm: false,
        isShowLoginByIdForm: false,
        isShowConfirmPhoneFrom: false,
    },
    getters: {
        isLoading(state) {
            return state.loading
        },
        getUsers(state) {
            return state.users
        },
        getCurrentUser(state) {
            return state.currentUser
        },
        getCurrentPhone(state) {
            return state.currentPhone
        },
        getIsNeedToConfirmPhone(state) {
            return state.isNeedToConfirmPhone
        },
        loginWithPhoneVisible(state) {
            return state.isShowLoginWithPhone
        },
        welcomePasswordFormVisible(state) {
            return state.isShowWelcomePasswordForm
        },
        registerLoginFormVisible(state) {
            return state.isShowRegisterLoginForm
        },
        notUniquePhoneFormVisible(state) {
            return state.isShowNotUniquePhoneForm
        },
        registerFormVisible(state) {
            return state.isShowRegisterForm
        },
        loginByIdFormVisible(state) {
            return state.isShowLoginByIdForm
        },
        confirmPhoneFromVisible(state) {
            return state.isShowConfirmPhoneFrom
        }
    }
}
