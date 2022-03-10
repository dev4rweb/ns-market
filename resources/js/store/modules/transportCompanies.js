import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        transportCompanies: null,
        currentTransportCompanyId: null,
    },
    actions: {
        fetchTransportCompanies({commit, dispatch, getters}) {
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/transport-companies`)
                .then(res => {
                    console.log('fetchTransportCompanies', res)
                    if (res.data.success) {
                        commit('setTransportCompanies', res.data.models)
                        if (window.location.href.includes('/order-payment')) {
                            console.log('Create eDost query from updateOrderAddressOrderId')

                            dispatch('fetchEDostDelivery', 'order-payment')
                        }
                    }
                }).catch(err => {
                console.log('fetchTransportCompanies err', err)
            }).finally(() => {
                commit('setLoading', false)
            });
        }
    },
    mutations: {
        setTransportCompanies(state, tCompanies) {
            state.transportCompanies = tCompanies
        },
        setCurrentTransportCompanyId(state, transportCompany) {
            // console.log('setCurrentTransportCompanyId',transportCompany)
            // console.log('setCurrentTransportCompanyId',state.transportCompanies)
            if (transportCompany && !transportCompany.deliveryService.includes('вывоз')) {
                let company = transportCompany
                if (transportCompany.deliveryService.toLowerCase().includes('почта россии')) {
                    if (transportCompany.deliveryService.toLowerCase().includes('клас'))
                        company = state.transportCompanies.find(i => i.name_alias.includes('клас'))
                    if (transportCompany.deliveryService.toLowerCase().includes('назем'))
                        company = state.transportCompanies.find(i => i.name_alias.includes('назем'))
                    if (transportCompany.deliveryService.toLowerCase().includes('ems'))
                        company = state.transportCompanies.find(i => i.name_alias.includes('ems'))
                } else {
                    company = state.transportCompanies.find(i =>
                        i.name_alias.toLowerCase()
                            .includes(transportCompany.deliveryService.toLowerCase()));
                }
                state.currentTransportCompanyId = company.id
            } else state.currentTransportCompanyId = null
        }
    },
    getters: {
        getTransportCompanies(state) {
            return state.transportCompanies
        },
        getCurrentTransportCompanyId(state) {
            return state.currentTransportCompanyId
        },
    }
}
