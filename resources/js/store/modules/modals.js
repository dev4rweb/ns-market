export default {
    state: {
        isShowMentorPhoneForm: false
    },
    actions: {

    },
    mutations: {
        setShowMentorPhoneForm(state, isShow) {
            state.isShowMentorPhoneForm = isShow
        }
    },
    getters: {
        getIsShowMentorForm() {
            return state.isShowMentorPhoneForm
        }
    }
}
