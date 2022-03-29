export default {
    state: {
        priceShortTable: 0,
        pointsShortTable: 0,
    },
    actions: {},
    mutations: {
        setPriceShortTable(state, price) {
            state.priceShortTable = price
        },
        setPointsShortTable(state, points) {
            state.pointsShortTable = points
        },
    },
    getters: {
        getPriceShortTable(state) {
            return state.priceShortTable
        },
        getPointsShortTable(state) {
            return state.pointsShortTable
        },
    }
}
