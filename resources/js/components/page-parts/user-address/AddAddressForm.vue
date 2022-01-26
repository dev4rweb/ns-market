<template>
    <div class="card data-card mb-3">
        <h3>Добавить новый адрес</h3>
        <form
            @submit.prevent="addAddress"
            class="needs-validation"
            autocomplete="off"
            novalidate
        >
            <div class="row">
                <div class="form-group form-group-blue">
                    <label>
                        Название метки адреса <span style="color: red">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isNameInvalid}"
                        v-model="name"
                        ref="focusMe"
                        autocomplete="chrome-off"
                        @input="isNameInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isNameInvalid}"
                    >
                        {{ errorName }}
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="form-group form-group-blue">
                    <label>
                        Быстрый поиск адреса
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        @input="cityOnInput"
                        v-model="fastSearch"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        id="dropdownCity"
                        autocomplete="chrome-off"
                        required
                    >
                    <DropdownCityInput/>

                </div>
            </div>

            <div class="row">
                <div class="form-group form-group-blue">
                    <label>
                        Населённый пункт <span style="color: red">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isCityInvalid}"
                        v-model="getCurrentDaDataAddress.city_with_type"
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isCityInvalid}"
                    >
                        {{ errorCity }}
                    </div>
                </div>
            </div>

            <div
                class="row"
                v-if="getCurrentDaDataAddress.settlement_with_type"
            >
                <div class="form-group form-group-blue">
                    <label>
                        Дополнительно
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="getCurrentDaDataAddress.settlement_with_type"
                    >
                </div>
            </div>

            <div class="row">
                <div class="form-group form-group-blue">
                    <label>
                        Улица
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="getCurrentDaDataAddress.street_with_type"
                    >
                </div>
            </div>

            <div class="row">
                <div class="form-group form-group-blue col-md-4">
                    <label>
                        Дом <span style="color: red">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isHouseInvalid}"
                        v-model="getCurrentDaDataAddress.house"
                        @input="isHouseInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isHouseInvalid}"
                    >
                        {{ errorHouse }}
                    </div>
                </div>
                <div class="form-group form-group-blue col-md-4">
                    <label>
                        строение
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="getCurrentDaDataAddress.block"
                    >
                </div>
                <div class="form-group form-group-blue col-md-4">
                    <label>
                        владение
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="getCurrentDaDataAddress.house_type_full"
                    >
                </div>
            </div>

            <div class="row">
                <div class="form-group form-group-blue col-md-4">
                    <label>
                        Квартира
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="getCurrentDaDataAddress.flat"
                    >
                </div>
                <div class="form-group form-group-blue col-md-4">
                    <label>
                        офис
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="office"
                    >
                </div>
            </div>

            <div class="row">

                <div class="form-group form-group-blue col-md-4">
                    <label>
                        Почтовый индекс <span style="color: red">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isPostcodeInvalid}"
                        v-model="getCurrentDaDataAddress.postal_code"
                        @input="isPostcodeInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isPostcodeInvalid}"
                    >
                        {{ errorPostcode }}
                    </div>
                </div>

                <div class="form-group form-group-blue col-md-8">
                    <label>
                        Страна <span style="color: red">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isCountryInvalid}"
                        v-model="getCurrentDaDataAddress.country"
                        @input="isCountryInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isCountryInvalid}"
                    >
                        {{ errorCountry }}
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="form-group form-group-blue col-md-6">
                    <label>
                        Край, область <span style="color: red">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isRegionInvalid}"
                        v-model="getCurrentDaDataAddress.region"
                        @input="isRegionInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isRegionInvalid}"
                    >
                        {{ errorRegion }}
                    </div>
                </div>

                <div class="form-group form-group-blue col-md-6">
                    <label>
                        Район
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="getCurrentDaDataAddress.area_with_type"
                    >
                </div>
            </div>

            <h4 class="mt-3">Получатель</h4>

            <div class="row">

                <div class="form-group form-group-blue col-md-6">
                    <label>
                        Фамилия <span style="color: red">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isLastNameInvalid}"
                        v-model="last_name"
                        @input="isLastNameInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isLastNameInvalid}"
                    >
                        {{ errorLastName }}
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="form-group form-group-blue col-md-6">
                    <label>
                        Имя <span style="color: red">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isFirstNameInvalid}"
                        v-model="first_name"
                        @input="isFirstNameInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isFirstNameInvalid}"
                    >
                        {{ errorFirstName }}
                    </div>
                </div>

                <div class="form-group form-group-blue col-md-6">
                    <label>
                        Отчество
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="middle_name"
                    >
                </div>
            </div>

            <div class="row">

                <div class="form-group form-group-blue col-md-6">
                    <label>
                        Телефон <span style="color: red">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isPhoneInvalid}"
                        v-model="phone"
                        @input="isPhoneInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isPhoneInvalid}"
                    >
                        {{ errorPhone }}
                    </div>
                </div>

                <div class="form-group form-group-blue col-md-6">
                    <label>
                        e-mail
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="email"
                    >
                </div>
            </div>

            <div class="d-flex justify-content-center position-relative">
                <button
                    type="submit"
                    class="btn btn-lg btn-info me-3"
                >
                    Сохранить
                </button>
                <button
                    type="button"
                    class="btn btn-lg btn-secondary"
                    @click="canceled"
                >
                    Отмена
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
import DropdownCityInput from "../../DropdownCityInput";

export default {
    name: "AddAddressForm",
    data() {
        return {

            name: '',
            isNameInvalid: false,
            errorName: 'Некорректный формат поля',

            isCityInvalid: false,
            errorCity: 'Некорректный формат поля',

            isHouseInvalid: false,
            errorHouse: 'Некорректный формат поля',

            office: '',

            isPostcodeInvalid: false,
            errorPostcode: 'Некорректный формат поля',

            isCountryInvalid: false,
            errorCountry: 'Некорректный формат поля',

            isRegionInvalid: false,
            errorRegion: 'Некорректный формат поля',

            last_name: '',
            isLastNameInvalid: false,
            errorLastName: 'Некорректный формат поля',

            first_name: '',
            isFirstNameInvalid: false,
            errorFirstName: 'Некорректный формат поля',

            middle_name: '',

            phone: '',
            isPhoneInvalid: false,
            errorPhone: 'Некорректный формат поля',

            email: '',
        }
    },
    methods: {
        ...mapMutations(['setEditAddress', 'setIsShowAddressForm', 'setFastSearchAddress', 'addNewAddress']),
        ...mapActions(['fetchDaDataAddress', 'createNewAddress']),
        addAddress() {
            if (this.name.length < 3) {
                this.isNameInvalid = true
                return;
            }
            if (this.getCurrentDaDataAddress.city_with_type.length < 3) {
                this.isCityInvalid = true;
                return;
            }
            if (!this.getCurrentDaDataAddress.house.length) {
                this.isHouseInvalid = true
                return;
            }
            if (this.getCurrentDaDataAddress.postal_code.length < 3) {
                this.isPostcodeInvalid = true
                return;
            }
            if (this.getCurrentDaDataAddress.country.length < 3) {
                this.isCountryInvalid = true;
                return;
            }
            if (this.getCurrentDaDataAddress.region.length < 3) {
                this.isRegionInvalid = true
                return;
            }
            if (this.last_name.length < 2) {
                this.isLastNameInvalid = true
                return;
            }
            if (this.first_name.length < 2) {
                this.isFirstNameInvalid = true
                return;
            }
            this.phone = this.phone.replace(/[^0-9]/g, '')
            if (this.phone.length < 10) {
                this.isPhoneInvalid = true
                return;
            }

            const newAddress = {
                addressable_id: this.getPhysicalPerson.id,
                name: this.name,
                city: this.getCurrentDaDataAddress.city_with_type,
                street: this.getCurrentDaDataAddress.street_with_type ??
                    this.getCurrentDaDataAddress.settlement_with_type,
                house: this.getCurrentDaDataAddress.house,
                holding: this.getCurrentDaDataAddress.house_type_full ?? '',
                building: this.getCurrentDaDataAddress.block ?? '',
                apartment: this.getCurrentDaDataAddress.flat ?? '',
                office: this.office,
                postcode: this.getCurrentDaDataAddress.postal_code,
                country: this.getCurrentDaDataAddress.country,
                region: this.getCurrentDaDataAddress.region,
                district: this.getCurrentDaDataAddress.area_with_type,
                last_name: this.last_name,
                first_name: this.first_name,
                middle_name: this.middle_name,
                phone: this.phone,
                email: this.email
            }
            this.setEditAddress(null)
            this.setIsShowAddressForm(false)
            this.createNewAddress(newAddress)
        },
        canceled() {
            this.setEditAddress(null)
            this.setIsShowAddressForm(false)
        },
        cityOnInput() {
            this.isCityInvalid = false
            this.fetchDaDataAddress({
                query: this.getFastSearchAddress
            })
        }
    },
    computed: {
        ...mapGetters(['getCurrentDaDataAddress', 'getFastSearchAddress', 'getPhysicalPerson']),
        fastSearch: {
            get() {
                return this.getFastSearchAddress
            },
            set(val) {
                this.setFastSearchAddress(val)
            }
        }
    },
    components: {
        DropdownCityInput
    },
    mounted() {
        setTimeout(() => {
            this.$refs.focusMe.focus();
        }, 500);
    }
}
</script>

<style scoped>
.btn-lg {
    margin-bottom: -50px;
    width: 100%;
    max-width: 200px;
}

.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>
