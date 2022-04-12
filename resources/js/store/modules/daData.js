export default {
    state: {
        isSearchingAddress: false,
        fastSearch: '',
        daDataAddress: [],
        currentDaDataAddress: {
            city_with_type: '',
            postal_code: '',
            street_with_type: '',
            area_with_type: '',
            house: '',
            house_type_full: '',
            country: '',
            block: '',
            region: '',
            flat: '',
            settlement_with_type: null,
            street: '',
            building: '',
            city: ''
        },
        daDataBank: null
    },
    actions: {
        fetchBankDaData({commit, dispatch}, query = 'сбербанк') {
            const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/bank";
            const token = "90222d690c2ffcb6923cb1fc7f3f67ebc4fddf2c";
            const queryObj = {query: query}
            return  axios.post(url, queryObj, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            }).then(res => {
                // console.log('fetchBankDaData res', res)
                return res
            }).catch(err => {
                // console.log('fetchBankDaData err', err)
                return err
            });
        },
        fetchDaDataAddress({commit, dispatch}, queryObj) {
            const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
            const token = "90222d690c2ffcb6923cb1fc7f3f67ebc4fddf2c";
            const query = "москва хабар";
            const payload = {
                query: queryObj.query,
                count: 7,
                locations: [
                    {country: 'Беларусь'},
                    {country: 'Казахстан'},
                    {country: 'Россия'},
                    {country: 'Абхазия'},
                    {country: 'Армения'},
                    {country: 'Кыргызстан'},
                    {country: 'Узбекистан'},
                    {country: 'Болгария'},
                ]
                /*from_bound: {value: queryObj.value},
                to_bound: {value: queryObj.value},*/
            }
            axios.post(url, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            }).then(res => {
                // console.log('fetchDaDataAddress', res)
                if (res.status === 200) {
                    commit('setDaDataAddress', res.data.suggestions);
                }

            }).catch(err => {
                console.log('fetchDaDataAddress err', err)
            });
        }
    },
    mutations: {
        setDaDataBank(state, daDataBank) {
            state.daDataBank = daDataBank
        },
        setDaDataAddress(state, address) {
            state.daDataAddress = address
        },
        setCurrentDaDataAddress(state, address) {
            state.currentDaDataAddress = address
        },
        setFastSearchAddress(state, value) {
            state.fastSearch = value
        },
        setIsSearchingDaDataAddress(state, isSearching) {
            state.isSearchingAddress = isSearching
        }
    },
    getters: {
        getDaDataBank(state) {
            return state.daDataBank
        },
        getDaDataAddress(state) {
            return state.daDataAddress
        },
        getCurrentDaDataAddress(state) {
            return state.currentDaDataAddress
        },
        getFastSearchAddress(state) {
            return state.fastSearch
        },
        getIsSearchingDaDataAddress(state) {
            return state.isSearchingAddress
        }
    }
}
