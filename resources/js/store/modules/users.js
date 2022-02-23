import {WORK_HOST} from "../routeConsts";

export default {
    actions: {
        getUserByPhoneOrUserId({commit}, phoneOrUserId) {
            commit('setLoading', true)
            let isByUserId = false
            phoneOrUserId = phoneOrUserId.replace(/[^0-9]/g, '')
            const fd = new FormData()
            if (phoneOrUserId.length > 10) {
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
            axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            commit('setLoading', true)
            const user = getters['getCurrentUser']
            if (user) {
                const userLogin = {
                    // _token: window.csrf,
                    // email: user.email,
                    mobile_phone: user.mobile_phone,
                    password: password,
                    remember: false
                };
                console.log('userLogin', userLogin)
                axios.post('/login', userLogin)
                    .then(res => {
                        console.log('localLogin', res)
                        if (res.status === 204) {
                            if (getters['getFromBasketPage']) {
                                window.location.href = getters['getFromBasketPage'];
                            } else {
                                window.location.href = '/user-panel';
                            }
                        }

                    }).catch(err => {
                    console.log('localLogin err', err.response.data)
                    if (err.response.data.errors.mobile_phone[0].includes('These credentials do not match our records.'))
                        dispatch('localRegister', password)
                    else commit('setToastError','Что-то пошло не так, попробуйте позже')
                }).finally(() => {
                    commit('setLoading', false)
                });
            } else {
                alert('Something wrong')
            }

        },

        comparePassword({getters, commit, dispatch}, password) {
            commit('setLoading', true)
            const user = getters['getCurrentUser']
            console.log('current User compare', user)
            const data = {
                user_id: user.id,
                password: password
            }
            axios.post(`${WORK_HOST}market/compare-password`, data)
                .then(res => {
                    console.log('comparePassword', res)
                    if (res.data.success && res.data.message) {
                        const isNeedToConfirm = getters['getIsNeedToConfirmPhone']
                        if (!isNeedToConfirm)
                            dispatch('localLogin', password);
                        else {
                            commit('setShowWelcomePasswordForm', false)
                            commit('setIsConfirmPhoneFrom', true)
                            commit('setPassword', password)
                        }
                    } else {
                        commit('setToastError', 'Неправильный пароль')
                    }
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
            // fd.set('name', newUser.name)
            // fd.set('email', newUser.email)
            fd.set('first_name', newUser.first_name)
            fd.set('last_name', newUser.last_name)
            // fd.set('middle_name', newUser.middle_name)
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
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
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

        changeLocalPhoneNumber({commit, getters, dispatch}, phoneNumber) {
            commit('setLoading', true)
            const currentUser = getters['getCurrentUser']
            console.log('changeLocalPhoneNumber', currentUser, phoneNumber)
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
                    const password = getters['getPassword']
                    if (password) {
                        dispatch('localLogin', password)
                    }
                }
            }).catch(err => {
                console.log('updateUser err', err)
            }).finally(() => {
                commit('setLoading', false)
            });
        },

        changePassword({commit, getters, dispatch}, passwords) {
            const currentUser = getters['getCurrentUser']
            if (currentUser) {
                commit('setLoading', true);
                const data = {
                    user_id: currentUser.id,
                    password: passwords.old_password
                }
                axios.post(`${WORK_HOST}market/compare-password`, data)
                    .then(res => {
                        console.log('comparePassword', res)
                        if (res.data.success && res.data.message) {
                            dispatch('updatePassword', passwords.new_password);
                        } else {
                            commit('setToastError', 'Неверно введен предыдущий пароль')
                        }
                    })
                    .catch(err => {
                        console.log('comparePassword err', err)
                        commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    });
            } else {
                commit('setToastError', 'Что-то пошло не по плану')
            }
        },

        updatePassword({commit, getters, dispatch}, password) {
            commit('setLoading', true)
            const currentUser = getters['getCurrentUser']
            console.log('updatePassword', password)
            axios.post(`${WORK_HOST}market/update-password`, {
                user_id: currentUser.id,
                password: password
            }).then(res => {
                if (res.data.success) {
                    dispatch('updatePasswordLocal', password);
                } else {
                    commit('setToastError', res.data.message)
                }
            }).catch(err => {
                console.log(err.response.data)
            }).finally(() => {
                commit('setLoading', false)
            });
        },
        updatePasswordLocal({commit, getters, dispatch}, password) {
            console.log('updatePasswordLocal', password)
            const currentUser = getters['getCurrentUser']
            axios.post('/api/update-password', {
                user_id: currentUser.id,
                password: password
            }).then(res => {
                console.log('updatePasswordLocal', res)
                if (res.data.success) {
                    if (getters['getIsForgot']) {
                        commit('setToastError', 'Временный пароль отправлен на Ваш номер телефона')
                        dispatch('sendFreeSms', {
                            mobile_phone: currentUser.mobile_phone,
                            message: `. \n Ваш временный пароль: \n ${password}`
                        })
                        commit('setIsForgot', false)
                    } else {
                        commit('setToastError', 'Пароль успешно изменен');
                    }
                } else {
                    commit('setToastError', res.data.message)
                }
            }).catch(err => {
                console.log('updatePasswordLocal err', err.response.data)
                commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
            }).finally(() => {
                commit('setLoading', false)
            });

        },

        updateUserData({commit, getters, dispatch}) {
            const currentUser = getters['getCurrentUser']
            console.log('updateUserData currentUser', currentUser)
            if (currentUser) {
                commit('setLoading', true)
                axios.post(`${WORK_HOST}market/update-user`, currentUser)
                    .then(res => {
                        console.log('updateUserData res', res)
                        if (res.data.success) {
                            commit('setCurrentUser', res.data.model)
                            dispatch('updatePhysicalPersonData')
                        } else
                            commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
                    })
                    .catch(err => {
                        console.log('updateUserData err', err)
                        commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    });
            } else {
                commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
            }
        },
        updateUserDataLocal({commit, getters}) {
            const currentUser = getters['getCurrentUser']
            console.log('updateUserDataLocal currentUser', currentUser)
            if (currentUser) {
                commit('setLoading', true)
                axios.post(`/api/update-user-data`, currentUser)
                    .then(res => {
                        console.log('updateUserDataLocal res', res)
                        if (res.data.success) {
                            commit('setToastError', 'Данные успешно обновлены')
                            setTimeout(() => {
                                window.location.reload()
                            }, 2000);
                        } else
                            commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
                    })
                    .catch(err => {
                        console.log('updateUserDataLocal err', err)
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
        setIsForgot(state, isForgot) {
            state.isForgot = isForgot
        },
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
        },
        setPassword(state, password) {
            state.password = password
        }
    },
    state: {
        loading: false,
        currentUser: null,
        isForgot: false,
        currentPhone: '+7',
        password: null,
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
        getIsForgot(state) {
            return state.isForgot
        },
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
        },
        getPassword(state) {
            return state.password
        }
    }
}
