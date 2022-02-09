export default  {
    state: {
        orderActiveTable: 1
    },
    actions: {

    },
    mutations: {
        setOrderActiveTable(state, activeTable) {
            state.orderActiveTable = activeTable
        }
    },
    getters: {
        getOrderActiveTable(state) {
            return state.orderActiveTable
        }
    }
}
