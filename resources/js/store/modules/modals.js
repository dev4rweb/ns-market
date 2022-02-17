export default {
    state: {
        isShowMentorPhoneForm: false,
        modalFeedbackConfirmRef: null,
        modalSuccessMessageText: ''
    },
    actions: {

    },
    mutations: {
        setShowMentorPhoneForm(state, isShow) {
            state.isShowMentorPhoneForm = isShow
        },
        setModalFeedbackConfirmRef(state, ref) {
            state.modalFeedbackConfirmRef = ref
        },
        setModalSuccessMessage(state, msg) {
            state.modalSuccessMessageText = msg
        }
    },
    getters: {
        getIsShowMentorForm(state) {
            return state.isShowMentorPhoneForm
        },
        getModalFeedbackConfirmRef(state) {
            return state.modalFeedbackConfirmRef
        },
        getModalSuccessMessage() {
            return state.modalSuccessMessageText
        }
    }
}
