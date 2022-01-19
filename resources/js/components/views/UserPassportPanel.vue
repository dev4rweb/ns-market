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
                            required
                        >
                        <div
                            class="invalid-feedback"
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
                            required
                        >
                        <div
                            class="invalid-feedback"
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
                <div class="col-xl-3 col-lg-4 col-md-5 d-flex align-items-center">
                    <button
                        v-if="getPhysicalPerson && getPhysicalPerson.passport_photos[0]"
                        data-toggle="modal"
                        data-target="#userModalGallery"
                        class="btn btn-lg btn-outline-info"
                        @click="openGallery(getFullPathToPassport)"
                    >
                        Смотреть
                    </button>
                    <button
                        v-else
                        class="btn btn-lg btn-outline-info"
                        @click="handleChange"
                    >
                        Выбрать файл
                    </button>
                </div>
                <div
                    class="col-md-4"
                    v-if="getPhysicalPerson"
                >
                    <img
                        class="img-preview-doc"
                        v-if="getPhysicalPerson.passport_photos[0]"
                        :src="getFullPathToPassport"
                        alt="preview"
                    >
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-xl-3 col-md-4 d-flex align-items-center">
                    <p class="mb-0">Страница с пропиской</p>
                </div>
                <div class="col-xl-3 col-lg-4  col-md-5">
                    <button
                        v-if="getPhysicalPerson && getPhysicalPerson.passport_photos[1]"
                        data-toggle="modal"
                        data-target="#userModalGallery"
                        class="btn btn-lg btn-outline-info"
                        @click="openGallery(getFullPathToPassportAddress)"
                    >
                        Смотреть
                    </button>
                    <button
                        v-else
                        class="btn btn-lg btn-outline-info"
                        @click="handleChange"
                    >
                        Выбрать файл
                    </button>
                </div>
                <div
                    class="col-md-4"
                    v-if="getPhysicalPerson"
                >
                    <img
                        class="img-preview-doc"
                        v-if="getPhysicalPerson.passport_photos[1]"
                        :src="getFullPathToPassportAddress"
                        alt="preview"
                    >
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-xl-3 col-md-4 d-flex align-items-center">
                    <p class="mb-0">Заграничный паспорт</p>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-5">
                    <button
                        v-if="getPhysicalPerson && getPhysicalPerson.passport_photos[2]"
                        data-toggle="modal"
                        data-target="#userModalGallery"
                        class="btn btn-lg btn-outline-info"
                        @click="openGallery(getFullPathToInterPassport)"
                    >
                        Смотреть
                    </button>
                    <button
                        v-else
                        class="btn btn-lg btn-outline-info"
                        @click="handleChange"
                    >
                        Выбрать файл
                    </button>
                </div>
                <div
                    class="col-md-4"
                    v-if="getPhysicalPerson"
                >
                    <img
                        class="img-preview-doc"
                        v-if="getPhysicalPerson.passport_photos[2]"
                        :src="getFullPathToInterPassport"
                        alt="preview"
                    >
                </div>
            </div>

            <div class="row position-relative d-flex justify-content-center">
                <button
                    class="btn btn-lg btn-info w-50"
                    style="margin-bottom: -50px"
                    @click="handleChange"
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
import {mapGetters} from 'vuex'
import UserPassportModal from "../Modals/UserPassportModal";
import UserModalGallery from "../Modals/UserModalGallery";

export default {
    name: "UserPassportPanel",
    data() {
        return {
            isSeriesError: false,
            seriesError: '',
            isNumberError: false,
            numberError: '',
            imgPath: ''
        }
    },
    methods: {
        handleChange() {
            console.log(this.getPhysicalPerson)
        },
        handleQuestion() {
            console.log('handleQuestion')
        },
        openGallery(imgPath) {
            console.log('openGallery', imgPath)
            this.imgPath = imgPath
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
</style>
