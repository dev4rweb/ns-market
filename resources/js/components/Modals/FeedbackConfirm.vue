<template>
    <div
        class="modal fade"
        id="staticModalFeedback"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticModalFeedbackLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title text-center" id="staticModalFeedbackLabel">
                        Техническая поддержка.
                    </h3>
                </div>
                <div class="modal-body">
                    <p class="text-center">
                        В случае необходимости сотрудники <br>
                        службы поддержки свяжутся с Вами.
                    </p>
                    <p class="text-center">
                        Благодарим Вас за понимание и участие <br>
                        в улучшении сервисов New Star market
                    </p>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-info"
                        @click="backToMain"
                    >
                        Ok
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FeedbackConfirm",
    methods: {
        backToMain() {
            window.location.href = '/user-panel'
        }
    }
}
</script>

<style scoped>

</style>
