<template>
    <div class="row">
        <div class="card data-card">
            <h3
                class="d-flex justify-content-between align-items-center"
            >
                Профессиональная деятельность
                <sup
                    class="me-1"
                >
                    ?
                </sup>
            </h3>
            <p>Если у Вас есть соответствующее профессиональное образование,
                то Вам могут быть доступны специальные товары и услуги.</p>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" name="flexRadioDefault" >
                <label class="form-check-label">
                    Косметолог / дерматолог
                </label>
            </div>
            <h4>загрузить скан или фото документа, подтверждающего ваше образование.</h4>
            <p><sub>Размер файла не должен превышать 2MB</sub></p>
            <div class="row mb-3">
                <div class="col-xl-2 col-md-3 d-flex align-items-center">
                    <p class="mb-0">Документ</p>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-5 d-flex align-items-center">
                    <a
                        v-if="getPhysicalPerson && getPhysicalPerson.photos[0]"
                        :href="getFullPathCertificate"
                        target="_blank"
                        class="btn btn-lg btn-outline-info"
                    >
                        Смотреть
                    </a>
                    <button
                        v-else
                        class="btn btn-lg btn-outline-info"
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
                        v-if="getPhysicalPerson.photos[0]"
                        :src="getFullPathCertificate"
                        alt="preview"
                    >
                </div>
            </div>
            <div class="row">
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
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "UserStatusPanel",
    methods: {
        ...mapActions(['toggleStatus'])
    },
    computed: {
        ...mapGetters(['getPhysicalPerson', 'getFullPathCertificate'])
    }
}
</script>

<style lang="scss" scoped>
h3{
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
</style>
