export default {
    state: {
        restCost: 0
    },
    actions: {},
    mutations: {
        setRestCost(state, restCost) {
            state.restCost = restCost
        }
    },
    getters: {
        getRestCost(state) {
            return state.restCost
        }
    }
}
