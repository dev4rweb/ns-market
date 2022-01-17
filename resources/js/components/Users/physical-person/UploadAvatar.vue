<template>
    <div class="avatar-block">
        <img
            v-if="file"
            class="uploaded-avatar"
            :src="avatar" alt="ava">
        <img
            v-else
            class="uploaded-avatar"
            :src="getAvatar" alt="ava">
        <img
            v-if="file === null"
            class="add-photo"
            :src="icCamera"
            alt="icon"
            @click="uploadAvatarHandler"
        >
        <img
            v-if="file"
            :src="icAccept"
            alt="icon"
            class="ava-icon"
            @click="uploadImage"
        >

        <img
            v-if="file"
            :src="icRemove"
            alt="icon"
            class="ava-icon"
            style="top: 40px"
            @click="removeImage"
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
import icAccept from '../../../../assets/img/ic-accept.svg'
import icRemove from '../../../../assets/img/ic-remove.svg'
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    name: "UploadAvatar",
    data() {
        return {
            avatar: avatarDefault,
            icCamera,
            icAccept,
            icRemove,
            file: null,
        }
    },
    methods: {
        ...mapMutations(['setToastError']),
        ...mapActions(['uploadAvatar']),
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
                    this.file = null
                    this.setToastError('Размер файла не должен превышать 2Mb')
                }
            } else {
                this.file = null
                this.setToastError('Некорректный формат файла')
            }
        },
        uploadImage() {
            console.log('uploadImage')
            this.uploadAvatar(this.file)
            this.file = null
        },
        removeImage() {
            console.log('removeImage')
            this.file = null
        }
    },
    computed: {
        ...mapGetters(['getAvatar']),
    },
}
</script>

<style lang="scss" scoped>
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

.ava-icon {
    height: 32px;
    position: absolute;
    right: 0;
    background-color: #fff;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    padding: 5px;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;

    &:hover{
        -webkit-transform: scale(1.2, 1.2);
        -moz-transform: scale(1.2, 1.2);
        -ms-transform: scale(1.2, 1.2);
        -o-transform: scale(1.2, 1.2);
        transform: scale(1.2, 1.2);
        cursor: pointer;
    }
}
</style>
