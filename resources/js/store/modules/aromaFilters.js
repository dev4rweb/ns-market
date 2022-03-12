export default {
    state: {
        searchAromaSidebar: '',
        categoryC: false,
        categoryD: false,
        categoryK: false,
        categoryM: false,
    },
    actions: {},
    mutations: {
        setSearchAromaSidebar(state, searchAroma) {
            state.searchAromaSidebar = searchAroma
        },
        setCategoryC(state, isChecked) {
            state.categoryC = isChecked
        },
        setCategoryD(state, isChecked) {
            state.categoryD = isChecked
        },
        setCategoryK(state, isChecked) {
            state.categoryK = isChecked
        },
        setCategoryM(state, isChecked) {
            state.categoryM = isChecked
        },
    },
    getters: {
        getSearchAromaSidebar(state) {
            return state.searchAromaSidebar
        },
        getCategoryC(state) {
            return state.categoryC
        },
        getCategoryD(state) {
            return state.categoryD
        },
        getCategoryK(state) {
            return state.categoryK
        },
        getCategoryM(state) {
            return state.categoryM
        },
    }
}
