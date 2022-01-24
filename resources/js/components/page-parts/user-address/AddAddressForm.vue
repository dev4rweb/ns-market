<template>
    <div class="card data-card mb-3">
        <h3>Добавить новый адрес</h3>
        <form
            @submit.prevent="addAddress"
            class="needs-validation"
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
                        v-model="city"
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
                        v-model="street"
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
                        v-model="house"
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
                        v-model="building"
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
                        v-model="housing"
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
                        v-model="apartment"
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
                        v-model="office"
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
                        v-model="postcode"
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
                        v-model="country"
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
                        v-model="region"
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
                        v-model="district"
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
                        :class="{borderRed: isMiddleNameInvalid}"
                        v-model="middle_name"
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
                        :class="{borderRed: isEmailInvalid}"
                        v-model="email"
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
import {mapMutations, mapActions} from 'vuex'
export default {
    name: "AddAddressForm",
    data() {
        return {
            name: '',
            isNameInvalid: false,
            errorName: 'Некорректный формат поля',

            city: '',
            isCityInvalid: false,
            errorCity: 'Некорректный формат поля',

            street: '',
            isStreetInvalid: false,
            errorStreet: 'Некорректный формат поля',

            house: '',
            isHouseInvalid: false,
            errorHouse: 'Некорректный формат поля',

            building: '',
            isBuildingInvalid: false,
            errorBuilding: 'Некорректный формат поля',

            housing: '',
            isHousingInvalid: false,
            errorHousing: 'Некорректный формат поля',

            apartment: '',
            isApartmentInvalid: false,
            errorApartment: 'Некорректный формат поля',

            office: '',
            isOfficeInvalid: false,
            errorOffice: 'Некорректный формат поля',

            postcode: '',
            isPostcodeInvalid: false,
            errorPostcode: 'Некорректный формат поля',

            country: '',
            isCountryInvalid: false,
            errorCountry: 'Некорректный формат поля',

            region: '',
            isRegionInvalid: false,
            errorRegion: 'Некорректный формат поля',

            district: '',
            isDistrictInvalid: false,
            errorDistrict: 'Некорректный формат поля',

            last_name: '',
            isLastNameInvalid: false,
            errorLastName: 'Некорректный формат поля',

            first_name: '',
            isFirstNameInvalid: false,
            errorFirstName: 'Некорректный формат поля',

            middle_name: '',
            isMiddleNameInvalid: false,
            errorMiddleName: 'Некорректный формат поля',

            phone: '',
            isPhoneInvalid: false,
            errorPhone: 'Некорректный формат поля',

            email: '',
            isEmailInvalid: false,
            errorEmail: 'Некорректный формат поля',
        }
    },
    methods: {
        ...mapMutations(['setEditAddress', 'setIsShowAddressForm']),
        ...mapActions(['fetchDaDataAddress']),
        addAddress() {
            if (this.name.length < 3) {
                this.isNameInvalid = true
                return;
            }
            if (this.city.length < 3) {
                this.isCityInvalid = true;
                return;
            }
            if (!this.house.length) {
                this.isHouseInvalid = true
                return;
            }
            if (this.postcode.length < 3) {
                this.isPostcodeInvalid = true
                return;
            }
            if (this.country.length < 3) {
                this.isCountryInvalid = true;
                return;
            }
            if (this.region.length < 3) {
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
            if (this.phone.length < 10) {
                this.isPhoneInvalid = true
                return;
            }
            alert('all Saved')
            this.setEditAddress(null)
            this.setIsShowAddressForm(false)
        },
        canceled() {
            this.setEditAddress(null)
            this.setIsShowAddressForm(false)
        }
    },
    mounted() {
        setTimeout(() => {
            this.$refs.focusMe.focus();
        }, 500);
        this.fetchDaDataAddress()
    }
}
</script>

<style scoped>
.btn-lg{
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
