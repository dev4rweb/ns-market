<template>
    <div class="row mb-5">
        <div class="card data-card">
            <h3
                class="d-flex justify-content-between align-items-center"
            >
                Паспортные данные
                <sup
                    class="me-1"
                    data-toggle="modal"
                    data-target="#userPassportModal"
                >
                    ?
                </sup>
            </h3>
            <p v-if="getCurrentUser">
                <span v-if="getCurrentUser.last_name">{{ getCurrentUser.last_name }} </span>
                <span v-if="getCurrentUser.first_name">{{ getCurrentUser.first_name }} </span>
                <span v-if="getCurrentUser.middle_name">{{ getCurrentUser.middle_name }} </span>
            </p>
            <div v-if="getPhysicalPerson" class="row mb-3">
                <div class="col-lg-2 col-md-3">
                    <div class="form-group form-group-blue">
                        <label>
                            Серия <b style="color: red">*</b>
                        </label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model="getPhysicalPerson.passport_series"
                            @input="isSeriesError = false"
                            required
                        >
                        <div
                            class="invalid-feedback"
                            :class="{show: isSeriesError}"
                        >
                            {{ seriesError }}
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group form-group-blue">
                        <label>
                            Номер <b style="color: red">*</b>
                        </label>
                        <input
                            type="text"
                            v-model="getPhysicalPerson.passport_number"
                            class="form-control form-control-lg"
                            @input="isNumberError = false"
                            required
                        >
                        <div
                            class="invalid-feedback"
                            :class="{show: isNumberError}"
                        >
                            {{ numberError }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <h4>загрузить скан или фото паспорта</h4>
                <p><sub>Размер файла не должен превышать 2MB</sub></p>
            </div>
            <div class="row mb-3">
                <div class="col-xl-3 col-md-4 d-flex align-items-center">
                    <p class="mb-0">Главная страница <b style="color: red">*</b></p>
                </div>
                <div
                    class="col-xl-3 col-lg-4 col-md-5 d-flex align-items-center"
                    v-if="getPhysicalPerson && !getFullPathToPassport"
                >
                    <button
                        v-if="!filePassport && !getFullPathToPassport"
                        class="btn btn-lg btn-outline-info"
                        @click="$refs.uploadPassport.click()"
                    >
                        Выбрать файл
                    </button>
                    <input
                        type="file"
                        style="display: none"
                        ref="uploadPassport"
                        @change="uploadPassport"
                    >
                </div>
                <div
                    class="col-md-4"
                    v-if="getPhysicalPerson"
                >
                    <img
                        v-if="filePassport"
                        :src="filePassportPreview"
                        class="img-preview-doc"
                        alt="preview"
                    >
                    <img
                        v-if="filePassport"
                        :src="icRemove"
                        alt="icon"
                        class="ava-icon"
                        @click="filePassport = null"
                    >
                    <img
                        class="img-preview-doc"
                        data-toggle="modal"
                        data-target="#userModalGallery"
                        @click="openGallery(getFullPathToPassport)"
                        v-if="getFullPathToPassport"
                        :src="getFullPathToPassport"
                        alt="preview"
                    >
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-xl-3 col-md-4 d-flex align-items-center">
                    <p class="mb-0">Страница с пропиской</p>
                </div>
                <div
                    class="col-xl-3 col-lg-4  col-md-5"
                    v-if="getPhysicalPerson && !getFullPathToPassportAddress"
                >

                    <button
                        v-if="!filePassportAddress && !getFullPathToPassportAddress"
                        class="btn btn-lg btn-outline-info"
                        @click="$refs.uploadPassportAddress.click()"
                    >
                        Выбрать файл
                    </button>
                    <input
                        type="file"
                        style="display: none"
                        ref="uploadPassportAddress"
                        @change="uploadPassportAddress"
                    >
                </div>
                <div
                    class="col-md-4"
                    v-if="getPhysicalPerson"
                >
                    <img
                        v-if="filePassportAddress"
                        :src="filePassportAddressPreview"
                        class="img-preview-doc"
                        alt="preview"
                    >
                    <img
                        v-if="filePassportAddress"
                        :src="icRemove"
                        alt="icon"
                        class="ava-icon"
                        @click="filePassportAddress = null"
                    >
                    <img
                        class="img-preview-doc"
                        v-if="getFullPathToPassportAddress"
                        :src="getFullPathToPassportAddress"
                        data-toggle="modal"
                        data-target="#userModalGallery"
                        @click="openGallery(getFullPathToPassportAddress)"
                        alt="preview"
                    >
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-xl-3 col-md-4 d-flex align-items-center">
                    <p class="mb-0">Заграничный паспорт</p>
                </div>
                <div
                    class="col-xl-3 col-lg-4 col-md-5"
                    v-if="getPhysicalPerson && !getFullPathToInterPassport"
                >
                    <button
                        v-if="!fileInterPassport && !getFullPathToInterPassport"
                        class="btn btn-lg btn-outline-info"
                        @click="$refs.uploadInterPassport.click()"
                    >
                        Выбрать файл
                    </button>
                    <input
                        type="file"
                        style="display: none"
                        ref="uploadInterPassport"
                        @change="uploadInterPassport"
                    >
                </div>
                <div
                    class="col-md-4 position-relative"
                    v-if="getPhysicalPerson"
                >
                    <img
                        v-if="fileInterPassport"
                        :src="interPassportPreview"
                        class="img-preview-doc"
                        alt="preview"
                    >
                    <img
                        v-if="fileInterPassport"
                        :src="icRemove"
                        alt="icon"
                        class="ava-icon"
                        @click="fileInterPassport = null"
                    >
                    <img
                        class="img-preview-doc"
                        v-if="getFullPathToInterPassport"
                        :src="getFullPathToInterPassport"
                        data-toggle="modal"
                        data-target="#userModalGallery"
                        @click="openGallery(getFullPathToInterPassport)"
                        alt="preview"
                    >
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
        <UserPassportModal/>
        <UserModalGallery :img-path="imgPath"/>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import UserPassportModal from "../Modals/UserPassportModal";
import UserModalGallery from "../Modals/UserModalGallery";
import icAccept from '../../../assets/img/ic-accept.svg'
import icRemove from '../../../assets/img/ic-remove.svg'

export default {
    name: "UserPassportPanel",
    data() {
        return {
            isSeriesError: false,
            seriesError: 'Некорректный формат серии',
            isNumberError: false,
            numberError: 'Некорректный формат номера',
            imgPath: '',

            icAccept,
            icRemove,

            filePassport: null,
            filePassportPreview: null,

            filePassportAddress: null,
            filePassportAddressPreview: null,

            interPassportPreview: null,
            fileInterPassport: null,
        }
    },
    methods: {
        ...mapMutations(['setToastError']),
        ...mapActions(['updatePassportData']),
        uploadPassport() {
            console.log('uploadPassport', this.$refs.uploadPassport.files[0])
            this.filePassport = this.$refs.uploadPassport.files[0]
            if (this.filePassport && this.filePassport.type.includes('image')) {
                if (this.filePassport.size < 2 * 1024 * 1024) {
                    this.filePassportPreview = URL.createObjectURL(this.filePassport);
                } else {
                    this.filePassportPreview = null
                    this.setToastError('Размер файла не должен превышать 2Mb')
                }
            } else {
                this.filePassport = null
                this.setToastError('Некорректный формат файла')
            }
        },
        uploadPassportAddress() {
            console.log('uploadPassport', this.$refs.uploadPassportAddress.files[0])
            this.filePassportAddress = this.$refs.uploadPassportAddress.files[0]
            if (this.filePassportAddress && this.filePassportAddress.type.includes('image')) {
                if (this.filePassportAddress.size < 2 * 1024 * 1024) {
                    this.filePassportAddressPreview = URL.createObjectURL(this.filePassportAddress);
                } else {
                    this.filePassportAddressPreview = null
                    this.setToastError('Размер файла не должен превышать 2Mb')
                }
            } else {
                this.filePassportAddress = null
                this.setToastError('Некорректный формат файла')
            }
        },
        uploadInterPassport() {
            console.log('uploadInterPassport', this.$refs.uploadInterPassport.files[0])
            this.fileInterPassport = this.$refs.uploadInterPassport.files[0]
            if (this.fileInterPassport && this.fileInterPassport.type.includes('image')) {
                if (this.fileInterPassport.size < 2 * 1024 * 1024) {
                    this.interPassportPreview = URL.createObjectURL(this.fileInterPassport);
                } else {
                    this.interPassportPreview = null
                    this.setToastError('Размер файла не должен превышать 2Mb')
                }
            } else {
                this.fileInterPassport = null
                this.setToastError('Некорректный формат файла')
            }
        },
        openGallery(imgPath) {
            console.log('openGallery', imgPath)
            this.imgPath = imgPath
        },
        submitHandler() {
            if (
                this.getPhysicalPerson.passport_series.length < 1
                ||
                this.getPhysicalPerson.passport_series.length > 5
            ) {
                this.isSeriesError = true
                return
            }
            if (
                this.getPhysicalPerson.passport_number.length < 1
                ||
                this.getPhysicalPerson.passport_number.length > 10
            ) {
                this.isNumberError = true
                return
            }
            let files = [];
            if (this.filePassport) files.push({name: 'passport_photo', file: this.filePassport})
            if (this.filePassportAddress) files.push({name: 'address_photo', file: this.filePassportAddress})
            if (this.fileInterPassport) files.push({name: 'interPassport_photo', file: this.fileInterPassport})
            console.log('submitHandler', this.getPhysicalPerson, files)
            this.updatePassportData(files)
        }
    },
    computed: {
        ...mapGetters([
            'getPhysicalPerson', 'getCurrentUser', 'getFullPathToPassport',
            'getFullPathToPassportAddress', 'getFullPathToInterPassport'
        ])
    },
    components: {
        UserPassportModal,
        UserModalGallery
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


.show {
    display: block;
}

.borderRed {
    border-color: red;
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
