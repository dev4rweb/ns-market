export default {
    state: {
        isShowMentorPhoneForm: false,
        modalFeedbackConfirmRef: null
    },
    actions: {

    },
    mutations: {
        setShowMentorPhoneForm(state, isShow) {
            state.isShowMentorPhoneForm = isShow
        },
        setModalFeedbackConfirmRef(state, ref) {
            state.modalFeedbackConfirmRef = ref
        }
    },
    getters: {
        getIsShowMentorForm(state) {
            return state.isShowMentorPhoneForm
        },
        getModalFeedbackConfirmRef(state) {
            return state.modalFeedbackConfirmRef
        }
    }
}
