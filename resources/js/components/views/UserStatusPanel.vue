<template>
    <div class="row mb-5">
        <div class="card data-card">
            <h3
                class="d-flex justify-content-between align-items-center"
            >
                Профессиональная деятельность
                <sup
                    class="me-1"
                    data-toggle="modal"
                    data-target="#userStatusModal"
                >
                    ?
                </sup>
            </h3>
            <p>Если у Вас есть соответствующее профессиональное образование,
                то Вам могут быть доступны специальные товары и услуги.</p>
            <div class="form-check mb-3">
                <input
                    class="form-check-input"
                    type="checkbox"
                    name="flexRadioDefault"
                    v-model="isChecked"
                >
                <label
                    class="form-check-label"
                    @click="isChecked = !isChecked"
                >
                    Косметолог / дерматолог
                </label>
            </div>
            <div v-if="isChecked">
                <h4>Загрузить скан или фото документа, подтверждающего ваше образование.</h4>
                <p><sub>Размер файла не должен превышать 2MB</sub></p>
                <div class="row mb-3">
                    <div class="col-xl-2 col-md-3 d-flex align-items-center">
                        <p class="mb-0">Документ</p>
                    </div>

                    <div
                        class="col-xl-3 col-lg-4 col-md-5 d-flex align-items-center"
                        v-if="getPhysicalPerson && !getFullPathCertificate"
                    >
                        <button
                            v-if="!fileCertificate && !getFullPathCertificate"
                            class="btn btn-lg btn-outline-info"
                            @click="$refs.uploadCertificate.click()"
                        >
                            Выбрать файл
                        </button>
                        <input
                            type="file"
                            style="display: none"
                            ref="uploadCertificate"
                            @change="uploadCertificate"
                        >
                    </div>

                    <div
                        class="col-md-4"
                        v-if="getPhysicalPerson"
                    >
                        <img
                            v-if="fileCertificate"
                            :src="fileCertificatePreview"
                            class="img-preview-doc"
                            alt="preview"
                        >
                        <img
                            v-if="fileCertificate"
                            :src="icRemove"
                            alt="icon"
                            class="ava-icon"
                            @click="fileCertificate = null"
                        >
                        <img
                            class="img-preview-doc"
                            v-if="getPhysicalPerson.photos[0]"
                            :src="getFullPathCertificate"
                            data-toggle="modal"
                            data-target="#userModalGallery"
                            @click="openGallery(getFullPathCertificate)"
                            alt="preview"
                        >
                    </div>
                </div>
                <div class="row mb-3">
                    <p>
                        Обратите внимание!
                        Чтобы проверить Ваш профессиональный статус, Вам необходимо также загрузить данные паспорта. Это
                        можно сделать, нажав на вкладку <a href="/user-passport-panel">«Паспорт»</a>.
                    </p>
                </div>
                <div class="row mb-3">
                    <div class="col-md-12">
                        <button
                            class="btn btn-outline-info"
                            @click="toggleStatus"
                        >
                            <!--                        Загрузить паспорт-->
                            Сменить статус
                        </button>
                    </div>
                </div>

                <div class="row position-relative d-flex justify-content-center">
                    <button
                        class="btn btn-lg btn-info w-50"
                        style="margin-bottom: -50px"
                        @click="submitHandler"
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
        <UserStatusModal/>
        <UserModalGallery :img-path="imgPath"/>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import UserStatusModal from "../Modals/UserStatusModal";
import UserModalGallery from "../Modals/UserModalGallery";
import icAccept from '../../../assets/img/ic-accept.svg'
import icRemove from '../../../assets/img/ic-remove.svg'

export default {
    name: "UserStatusPanel",
    data() {
        return {
            imgPath: '',
            icAccept,
            icRemove,
            isChecked: false,
            fileCertificate: null,
            fileCertificatePreview: null
        }
    },
    methods: {
        ...mapActions(['toggleStatus', 'updateStatusData']),
        ...mapMutations(['setToastError']),
        uploadCertificate() {
            console.log('uploadCertificate', this.$refs.uploadCertificate.files[0])
            this.fileCertificate = this.$refs.uploadCertificate.files[0]
            if (this.fileCertificate && this.fileCertificate.type.includes('image')) {
                if (this.fileCertificate.size < 2 * 1024 * 1024) {
                    this.fileCertificatePreview = URL.createObjectURL(this.fileCertificate);
                } else {
                    this.fileCertificatePreview = null
                    this.setToastError('Размер файла не должен превышать 2Mb')
                }
            } else {
                this.fileCertificate = null
                this.setToastError('Некорректный формат файла')
            }
        },
        openGallery(imgPath) {
            console.log('openGallery', imgPath)
            this.imgPath = imgPath
        },
        submitHandler() {
            console.log('submitHandler', this.getPhysicalPerson)
            if (this.fileCertificate)
                this.updateStatusData(this.fileCertificate)
        }
    },
    computed: {
        ...mapGetters(['getPhysicalPerson', 'getFullPathCertificate'])
    },
    components: {
        UserStatusModal, UserModalGallery
    }
}
</script>

<style lang="scss" scoped>
h3 {
    text-transform: uppercase;
    color: #333333;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    sup {
        color: white;
        background-color: #038ED7;
        font-weight: bold;
        -webkit-transition: all .2s;
        -moz-transition: all .2s;
        -ms-transition: all .2s;
        -o-transition: all .2s;
        transition: all .2s;
        padding: 10px 5px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
        /* Non-prefixed version, currently
                                         supported by Chrome, Edge, Opera and Firefox */
        &:hover {
            cursor: pointer;
            -webkit-transform: scale(1.2, 1.2);
            -moz-transform: scale(1.2, 1.2);
            -ms-transform: scale(1.2, 1.2);
            -o-transform: scale(1.2, 1.2);
            transform: scale(1.2, 1.2);
        }
    }
}

p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
}

.ava-icon {
    position: absolute;
    top: 0;
    left: -10px;
    width: 20px;
    cursor: pointer;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;

    &:hover {
        -webkit-transform: scale(1.2, 1.2);
        -moz-transform: scale(1.2, 1.2);
        -ms-transform: scale(1.2, 1.2);
        -o-transform: scale(1.2, 1.2);
        transform: scale(1.2, 1.2);
    }
}
</style>
