<template>
    <div class="accordion-item card data-card mb-3">
        <h2 class="accordion-header" :id="'heading'+address.id">

            <div
                v-if="isEdit"
                class="form-group form-group-blue"
            >
                <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="address.name"
                >
                <div
                    class="invalid-feedback"
                >
                    Error
                </div>
            </div>
            <button
                v-else
                class="accordion-button"
                :class="{collapsed: address.id !== 1}"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse'+address.id"
                :aria-expanded="isOpen"
                :aria-controls="'collapse'+address.id">
                {{ address.name }}
            </button>
        </h2>
        <div
            v-if="isEdit"
            :id="'collapse'+address.id"
            class="accordion-collapse collapse"
            :class="{show: address.id === 1}"
            :aria-labelledby="'heading'+address.id"
            data-bs-parent="#accordionUserAddresses"
        >
            <div class="accordion-body">
                <div class="d-flex justify-content-end">
                    <button
                        type="button"
                        class="btn btn-outline-success"
                        @click="isEdit=false"
                    >
                        Сохранить
                    </button>
                </div>
                <div class="row">
                    <div class="form-group form-group-blue col-md-6">
                        <label>
                            Фамилия
                        </label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model="address.last_name"

                        >
                        <div
                            class="invalid-feedback"
                        >
                            Error
                        </div>
                    </div>

                    <div class="form-group form-group-blue col-md-6">
                        <label>
                            Имя
                        </label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model="address.first_name"

                        >
                        <div
                            class="invalid-feedback"
                        >
                            Error
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group form-group-blue col-md-6">
                        <label>
                            Отчество
                        </label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model="address.middle_name"

                        >
                        <div
                            class="invalid-feedback"
                        >
                            Error
                        </div>
                    </div>

                    <div class="form-group form-group-blue col-md-6">
                        <label>
                            Мобильный телефон
                        </label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model="address.phone"
                            disabled
                        >
                        <div
                            class="invalid-feedback"
                        >
                            Error
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group form-group-blue col-md-6">
                        <label>
                            Страна
                        </label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model="address.country"

                        >
                        <div
                            class="invalid-feedback"
                        >
                            Error
                        </div>
                    </div>

                    <div class="form-group form-group-blue col-md-6">
                        <label>
                            Индекс
                        </label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model="address.postcode"

                        >
                        <div
                            class="invalid-feedback"
                        >
                            Error
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group form-group-blue col-md-6">
                        <label>
                            Край, область
                        </label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model="address.region"

                        >
                        <div
                            class="invalid-feedback"
                        >
                            Error
                        </div>
                    </div>

                    <div class="form-group form-group-blue col-md-6">
                        <label>
                            Населённый пункт
                        </label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model="address.city"

                        >
                        <div
                            class="invalid-feedback"
                        >
                            Error
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group form-group-blue col-md-6">
                        <label>
                            Улица
                        </label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model="address.street"

                        >
                        <div
                            class="invalid-feedback"
                        >
                            Error
                        </div>
                    </div>

                    <div class="form-group form-group-blue col-md-6">
                        <label>
                            Дом
                        </label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model="address.house"

                        >
                        <div
                            class="invalid-feedback"
                        >
                            Error
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group form-group-blue col-md-6">
                        <label>
                            Корпус
                        </label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model="address.housing"

                        >
                        <div
                            class="invalid-feedback"
                        >
                            Error
                        </div>
                    </div>
                    <div class="form-group form-group-blue col-md-6">
                        <label>
                            Строение
                        </label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model="address.building"

                        >
                        <div
                            class="invalid-feedback"
                        >
                            Error
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group form-group-blue">
                            <label>
                                Квартира
                            </label>
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                v-model="address.apartment"

                            >
                            <div
                                class="invalid-feedback"
                            >
                                Error
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group form-group-blue">
                            <label>
                                Офис
                            </label>
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                v-model="address.office"

                            >
                            <div
                                class="invalid-feedback"
                            >
                                Error
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-else
            :id="'collapse'+address.id"
            class="accordion-collapse collapse"
            :class="{show: address.id === 1}"
            :aria-labelledby="'heading'+address.id"
            data-bs-parent="#accordionUserAddresses"
        >
            <div class="accordion-body">
                <div class="d-flex justify-content-end">
                    <button
                        type="button"
                        class="btn btn-outline-primary me-3"
                        @click="isEdit = true"
                    >
                        Изменить
                    </button>
                    <button
                        type="button"
                        class="btn btn-outline-danger"
                    >
                        Удалить
                    </button>
                </div>
                <div class="form-group form-group-blue">
                    <label>
                        ФИО получателя
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="fullName"
                        disabled
                    >
                    <div
                        class="invalid-feedback"
                    >
                        Error
                    </div>
                </div>

                <div class="form-group form-group-blue">
                    <label>
                        Мобильный телефон
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="address.phone"
                        disabled
                    >
                    <div
                        class="invalid-feedback"
                    >
                        Error
                    </div>
                </div>

                <div class="form-group form-group-blue">
                    <label>
                        Страна
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="address.country"
                        disabled
                    >
                    <div
                        class="invalid-feedback"
                    >
                        Error
                    </div>
                </div>

                <div class="form-group form-group-blue">
                    <label>
                        Индекс
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="address.postcode"
                        disabled
                    >
                    <div
                        class="invalid-feedback"
                    >
                        Error
                    </div>
                </div>

                <div class="form-group form-group-blue">
                    <label>
                        Край, область
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="address.region"
                        disabled
                    >
                    <div
                        class="invalid-feedback"
                    >
                        Error
                    </div>
                </div>

                <div class="form-group form-group-blue">
                    <label>
                        Населённый пункт
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="address.city"
                        disabled
                    >
                    <div
                        class="invalid-feedback"
                    >
                        Error
                    </div>
                </div>

                <div class="form-group form-group-blue">
                    <label>
                        Улица, дом, корпус, строение
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="fullStreet"
                        disabled
                    >
                    <div
                        class="invalid-feedback"
                    >
                        Error
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group form-group-blue">
                            <label>
                                Квартира
                            </label>
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                v-model="address.apartment"
                                disabled
                            >
                            <div
                                class="invalid-feedback"
                            >
                                Error
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group form-group-blue">
                            <label>
                                Офис
                            </label>
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                v-model="address.office"
                                disabled
                            >
                            <div
                                class="invalid-feedback"
                            >
                                Error
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserAddressAccordionItem",
    props: {
        address: {
            type: Object,
            required: true
        },
        index: Number
    },
    data() {
        return {
            isEdit: false
        }
    },
    computed: {
        isOpen() {
            return this.address.id === 1
        },
        fullName() {
            return `${this.address.last_name} ${this.address.first_name} ${this.address.middle_name}`
        },
        fullStreet() {
            return `${this.address.street} ${this.address.house} к. ${this.address.housing} с. ${this.address.building}`
        }
    }
}
</script>

<style lang="scss" scoped>
.accordion-flush {
    .accordion-item {
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;

        .accordion-button {
            padding: 0;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 20px;
        }

        .accordion-button:not(.collapsed) {
            box-shadow: none;
            background-color: #ffffff;
            color: #333333;
        }
    }
}

.accordion-body {
    padding: 1rem 0 0 0;
}

</style>
