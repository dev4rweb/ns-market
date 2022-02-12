export default  {
    state: {
        orderActiveTable: 1,
        fromBasketPage: null,
    },
    actions: {

    },
    mutations: {
        setOrderActiveTable(state, activeTable) {
            state.orderActiveTable = activeTable
        },
        setFromBasketPage(state, url) {
            state.fromBasketPage = url
        }
    },
    getters: {
        getOrderActiveTable(state) {
            return state.orderActiveTable
        },
        getFromBasketPage(state) {
            return state.fromBasketPage
        }
    }
}
