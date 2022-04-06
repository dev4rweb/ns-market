export default {
    state: {
        isShowMentorPhoneForm: false,
        modalFeedbackConfirmRef: null,
        modalSuccessMessageText: '',
        isShowMentorListModal: false,
        isWelcomeRegisteredModal: false,
        isShowFoundOldBasket: false,
        removeOrderModal: null,
        editOrderModal: null
    },
    actions: {

    },
    mutations: {
        setRemoveOrderModal(state, order) {
            state.removeOrderModal = order
        },
        setEditOrderModal(state, order) {
            state.editOrderModal = order
        },
        setIsShowFoundOldBasket(state, isShow) {
            state.isShowFoundOldBasket = isShow
        },
        setShowMentorPhoneForm(state, isShow) {
            state.isShowMentorPhoneForm = isShow
        },
        setModalFeedbackConfirmRef(state, ref) {
            state.modalFeedbackConfirmRef = ref
        },
        setModalSuccessMessage(state, msg) {
            state.modalSuccessMessageText = msg
        },
        showMentorListModal(state, isShow) {
            state.isShowMentorListModal = isShow
        },
        setIsWelcomeRegisteredModal(state, isShow) {
            state.isWelcomeRegisteredModal = isShow
        }
    },
    getters: {
        getEditOrderModal(state) {
            return state.editOrderModal
        },
        getRemoveOrderModal(state) {
            return state.removeOrderModal
        },
        getIsShowFoundOldBasket(state) {
            return state.isShowFoundOldBasket
        },
        getIsShowMentorForm(state) {
            return state.isShowMentorPhoneForm
        },
        getModalFeedbackConfirmRef(state) {
            return state.modalFeedbackConfirmRef
        },
        getModalSuccessMessage(state) {
            return state.modalSuccessMessageText
        },
        getIsShowMentorListModal(state) {
            return state.isShowMentorListModal
        },
        getIsWelcomeRegisteredModal(state) {
            return state.isWelcomeRegisteredModal
        }
    }
}
