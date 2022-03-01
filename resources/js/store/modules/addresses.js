import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        address: [],
        isShowAddressForm: false,
        editAddress: null,
        recipientInfoData: {
            last_name: '',
            first_name: '',
            middle_name: '',
            phone: '',
            email: '',
        }
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
        },
        createNewAddress({commit}, addressObj) {
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/add-address`, addressObj)
                .then(res => {
                    console.log('createNewAddress', res)
                    if (res.data.success) {
                        commit('setToastError', 'Адрес успешно добавлен')
                        window.location.reload()
                    } else
                        commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
                })
                .catch(err => {
                    console.log('createNewAddress err', err)
                    commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        destroyAddress({commit}, address_id) {
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/remove-address`, {
                address_id: address_id
            })
                .then(res => {
                    console.log('removeAddress', res)
                    if (res.data.success) {
                        commit('setToastError', 'Адрес успешно удален')
                        window.location.reload()
                    } else
                        commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
                })
                .catch(err => {
                    console.log('createNewAddress err', err)
                    commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        updateAddress({commit}, address) {
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/update-address`, address)
                .then(res => {
                    console.log('updateAddress', res)
                    if (res.data.success) {
                        commit('setToastError', 'Адрес успешно обновлен')
                        window.location.reload()
                    } else
                        commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
                })
                .catch(err => {
                    console.log('updateAddress err', err)
                    commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже');
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
    },
    mutations: {
        setAddresses(state, addresses) {
            state.address = addresses
        },
        setIsShowAddressForm(state, isShow) {
            state.isShowAddressForm = isShow
        },
        setEditAddress(state, address) {
            state.editAddress = address
        },
        addNewAddress(state, address) {
            state.address.push(address)
        },
        setRecipientInfoData(state, recipient) {
            state.recipientInfoData = recipient
        }
    },
    getters: {
        getAddresses(state) {
            return state.address
        },
        getIsShowAddressForm(state) {
            return state.isShowAddressForm
        },
        getEditAddress(state) {
            return state.editAddress
        },
        getRecipientInfoData(state) {
            return state.recipientInfoData
        }
    }
}
