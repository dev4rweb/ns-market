export default {
    state: {
        error: null
    },
    actions: {

    },
    mutations: {
        setToastError(state, msg) {
            state.error = msg
        }
    },
    getters: {
        getToastError(state) {
            return state.error
        }
    }
}
