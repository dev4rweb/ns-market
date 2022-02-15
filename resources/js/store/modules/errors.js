export default {
    state: {
        error: null,
    },
    actions: {

    },
    mutations: {
        setToastError(state, msg) {
            state.error = msg
            setTimeout(() => {
                state.error = null
            }, 2000);
        },
    },
    getters: {
        getToastError(state) {
            return state.error
        },
    }
}
