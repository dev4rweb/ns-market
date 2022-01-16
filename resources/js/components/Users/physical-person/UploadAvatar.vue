<template>
    <div class="avatar-block">
        <img
            class="uploaded-avatar"
            :src="getAvatar" alt="ava">
        <img
            class="add-photo"
            :src="icCamera"
            alt="icon"
            @click="uploadAvatarHandler"
        >
        <input
            type="file"
            style="display: none"
            ref="uploadFile"
            @change="fileUploader"
        >
    </div>
</template>

<script>
import avatarDefault from '../../../../assets/img/avatar-profile.png'
import icCamera from '../../../../assets/img/ic-camera.svg'
import {mapMutations, mapGetters} from 'vuex'
export default {
    name: "UploadAvatar",
    data() {
        return {
            avatar: avatarDefault,
            icCamera,
            file: null,
        }
    },
    methods: {
        ...mapMutations(['setToastError']),

        uploadAvatarHandler() {
            console.log('uploadAvatarHandler')
            this.$refs.uploadFile.click()
        },
        fileUploader() {
            console.log('fileUploader', this.$refs.uploadFile.files[0])
            this.file = this.$refs.uploadFile.files[0]
            if (this.file && this.file.type.includes('image')) {
                if (this.file.size < 2 * 1024 * 1024) {
                    this.avatar = URL.createObjectURL(this.file);
                } else {
                    this.setToastError('Размер файла не должен превышать 2Mb')
                }

            } else {
                this.file = null
                this.setToastError('Некорректный формат файла')
            }
        }
    },
    computed: {
        ...mapGetters(['getAvatar']),
    }
}
</script>

<style scoped>
.uploaded-avatar{
    width: 100%;
    max-width: 165px;
    height: auto;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 3px solid #E0E0E0;
    box-sizing: border-box;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
