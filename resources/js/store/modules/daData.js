export default {
    state: {
        daDataAddress: null,
    },
    actions: {
        fetchDaDataAddress({commit}, address = null) {
            const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
            const token = "90222d690c2ffcb6923cb1fc7f3f67ebc4fddf2c";
            const query = "москва хабар";
            const payload = {
                query,
                count: 1
            }
            axios.post(url, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            }).then(res => {
                console.log('fetchDaDataAddress', res)
            }).catch(err => {
                console.log('fetchDaDataAddress err', err)
            });
        }
    },
    mutations: {
        setDaDataAddress(state, address) {
            state.daDataAddress = address
        }
    },
    getters: {
        getDaDataAddress(state) {
            return state.daDataAddress
        }
    }
}
