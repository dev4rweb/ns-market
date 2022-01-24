<template>
    <div class="card data-card mb-3">
        <h3>Редактировать адрес</h3>
        <form
            v-if="getEditAddress"
            @submit.prevent="saveAddress"
            class="needs-validation"
            novalidate
        >
            <div class="row">
                <div class="form-group form-group-blue">
                    <label>
                        Название <span style="color: red">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isNameInvalid}"
                        v-model="getEditAddress.name"
                        ref="focusMe"
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
                        Населённый пункт <span style="color: red">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isCityInvalid}"
                        v-model="getEditAddress.city"
                        @input="isCityInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isCityInvalid}"
                    >
                        {{ errorCity }}
                    </div>
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
                        :class="{borderRed: isStreetInvalid}"
                        v-model="getEditAddress.street"
                        @input="isStreetInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isStreetInvalid}"
                    >
                        {{ errorStreet }}
                    </div>
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
                        v-model="getEditAddress.house"
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
                        :class="{borderRed: isBuildingInvalid}"
                        v-model="getEditAddress.building"
                        @input="isBuildingInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isBuildingInvalid}"
                    >
                        {{ errorBuilding }}
                    </div>
                </div>
                <div class="form-group form-group-blue col-md-4">
                    <label>
                        корпус
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isHousingInvalid}"
                        v-model="getEditAddress.housing"
                        @input="isHousingInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isHousingInvalid}"
                    >
                        {{ errorHousing }}
                    </div>
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
                        :class="{borderRed: isApartmentInvalid}"
                        v-model="getEditAddress.apartment"
                        @input="isApartmentInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isApartmentInvalid}"
                    >
                        {{ errorApartment }}
                    </div>
                </div>
                <div class="form-group form-group-blue col-md-4">
                    <label>
                        офис
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isOfficeInvalid}"
                        v-model="getEditAddress.office"
                        @input="isOfficeInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isOfficeInvalid}"
                    >
                        {{ errorApartment }}
                    </div>
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
                        v-model="getEditAddress.postcode"
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
                        v-model="getEditAddress.country"
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
                        v-model="getEditAddress.region"
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
                        :class="{borderRed: isDistrictInvalid}"
                        v-model="getEditAddress.district"
                        @input="isDistrictInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isDistrictInvalid}"
                    >
                        {{ errorDistrict }}
                    </div>
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
                        v-model="getEditAddress.last_name"
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
                        v-model="getEditAddress.first_name"
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
                        :class="{borderRed: isMiddleNameInvalid}"
                        v-model="getEditAddress.middle_name"
                        @input="isMiddleNameInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isMiddleNameInvalid}"
                    >
                        {{ errorMiddleName }}
                    </div>
                </div>
            </div>

            <div class="row" v-if="getEditAddress.is_main_address">

                <div class="form-group form-group-blue col-md-6">
                    <label>
                        Телефон <span style="color: red">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isPhoneInvalid}"
                        v-model="getEditAddress.phone"
                        @input="isPhoneInvalid = false"
                        disabled
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
                        :class="{borderRed: isEmailInvalid}"
                        v-model="getCurrentUser.email"
                        @input="isEmailInvalid = false"
                        required
                        disabled
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isEmailInvalid}"
                    >
                        {{ errorEmail }}
                    </div>
                </div>
            </div>

            <div class="row" v-else>

                <div class="form-group form-group-blue col-md-6">
                    <label>
                        Телефон <span style="color: red">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isPhoneInvalid}"
                        v-model="getEditAddress.phone"
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
                        :class="{borderRed: isEmailInvalid}"
                        v-model="getEditAddress.email"
                        @input="isEmailInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isEmailInvalid}"
                    >
                        {{ errorEmail }}
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-end">
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
import {mapMutations, mapGetters} from 'vuex'
export default {
    name: "EditAddressForm",
    data() {
        return {
            isNameInvalid: false,
            errorName: 'Некорректный формат поля',

            isCityInvalid: false,
            errorCity: 'Некорректный формат поля',

            isStreetInvalid: false,
            errorStreet: 'Некорректный формат поля',

            isHouseInvalid: false,
            errorHouse: 'Некорректный формат поля',

            isBuildingInvalid: false,
            errorBuilding: 'Некорректный формат поля',

            isHousingInvalid: false,
            errorHousing: 'Некорректный формат поля',

            isApartmentInvalid: false,
            errorApartment: 'Некорректный формат поля',

            isOfficeInvalid: false,
            errorOffice: 'Некорректный формат поля',

            isPostcodeInvalid: false,
            errorPostcode: 'Некорректный формат поля',

            isCountryInvalid: false,
            errorCountry: 'Некорректный формат поля',

            isRegionInvalid: false,
            errorRegion: 'Некорректный формат поля',

            isDistrictInvalid: false,
            errorDistrict: 'Некорректный формат поля',

            isLastNameInvalid: false,
            errorLastName: 'Некорректный формат поля',

            isFirstNameInvalid: false,
            errorFirstName: 'Некорректный формат поля',

            isMiddleNameInvalid: false,
            errorMiddleName: 'Некорректный формат поля',

            isPhoneInvalid: false,
            errorPhone: 'Некорректный формат поля',

            isEmailInvalid: false,
            errorEmail: 'Некорректный формат поля',
        }
    },
    methods: {
        ...mapMutations(['setEditAddress', 'setIsShowAddressForm']),
        saveAddress() {
            if (this.getEditAddress.name.length < 3) {
                this.isNameInvalid = true
                return;
            }
            if (this.getEditAddress.city.length < 3) {
                this.isCityInvalid = true;
                return;
            }
            if (!this.getEditAddress.house.length) {
                this.isHouseInvalid = true
                return;
            }
            if (this.getEditAddress.postcode.length < 3) {
                this.isPostcodeInvalid = true
                return;
            }
            if (this.getEditAddress.country.length < 3) {
                this.isCountryInvalid = true
                return;
            }
            if (this.getEditAddress.region.length < 3) {
                this.isRegionInvalid = true
                return;
            }
            if (this.getEditAddress.last_name.length < 2) {
                this.isLastNameInvalid = true
                return;
            }
            if (this.getEditAddress.first_name.length < 2) {
                this.isFirstNameInvalid = true
                return;
            }
            if (this.getEditAddress.phone.length < 10) {
                this.isPhoneInvalid = true
                return;
            }
            alert('in progress')
            this.setEditAddress(null)
            this.setIsShowAddressForm(false)
        },
        canceled() {
            this.setEditAddress(null)
            this.setIsShowAddressForm(false)
        }
    },
    computed: {
        ...mapGetters(['getEditAddress', 'getCurrentUser'])
    }
}
</script>

<style scoped>

.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>
