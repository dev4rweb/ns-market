<template>
    <!-- Modal -->
    <div class="modal fade"
         id="modalSuccessMsg"
         data-bs-backdrop="static"
         data-bs-keyboard="false"
         tabindex="-1"
         aria-labelledby="modalSuccessMsgLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <h5
                        class="modal-title"
                        id="modalSuccessMsgLabel"
                    >
                        Ваше сообщение успешно отправлено!
                    </h5>
<!--                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>-->
                </div>
<!--                <div class="modal-body">

                </div>-->
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-success"
                        data-bs-dismiss="modal"
                    >
                        Ок
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ModalSuccessMessage",

}
</script>

<style scoped>
h5{
    font-size: 22px;
    text-align: center;
    font-weight: bold;
}
</style>
