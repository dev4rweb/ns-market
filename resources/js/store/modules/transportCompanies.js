import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        transportCompanies: null,
        currentTransportCompanyId: null,
    },
    actions: {
        fetchTransportCompanies({commit}) {
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/transport-companies`)
                .then(res => {
                    console.log('fetchTransportCompanies', res)
                    if (res.data.success) {
                        commit('setTransportCompanies', res.data.models)
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
            if (transportCompany && !transportCompany.deliveryService.includes('вывоз')) {
                let company = transportCompany
                if (transportCompany.deliveryService.toLowerCase().includes('почта россии')) {
                    if (transportCompany.name.toLowerCase().includes('клас'))
                        company = state.transportCompanies.find(i => i.name.includes('клас'))
                    if (transportCompany.name.toLowerCase().includes('назем'))
                        company = state.transportCompanies.find(i => i.name.includes('назем'))
                    if (transportCompany.name.toLowerCase().includes('ems'))
                        company = state.transportCompanies.find(i => i.name.includes('ems'))
                } else {
                    company = state.transportCompanies.find(i =>
                        i.name.toLowerCase()
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
