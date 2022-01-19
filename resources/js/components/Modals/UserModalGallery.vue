<template>
    <div
        class="modal fade"
        id="userModalGallery"
        tabindex="-1"
        aria-labelledby="userModalGalleryLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <div class="modal-content">
                <img :src="imgPath" alt="photo">
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserModalGallery",
    props: ['imgPath']
}
</script>

<style scoped>
.modal.show .modal-dialog {
    width: auto;
    height: auto;
}

img {
    width: 100%;
    overflow-y: auto;
}

.modal-content {
    height: fit-content;
}

span {
    font-size: 70px;
    position: absolute;
    color: black;
    top: 0;
    right: 15px;
}
</style>
