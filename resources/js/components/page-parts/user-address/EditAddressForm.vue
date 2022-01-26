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
                        Название метки адреса <span style="color: red">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isNameInvalid}"
                        v-model="getEditAddress.name"
                        ref="focusMe"
                        @input="isNameInvalid = false"
                        :disabled="getEditAddress.is_main_address"
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
                        v-model="street"
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
                        v-model="building"
                    >
                </div>
                <div class="form-group form-group-blue col-md-4">
                    <label>
                        владение
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="holding"
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
                        v-model="apartment"
                    >
                </div>
                <div class="form-group form-group-blue col-md-4">
                    <label>
                        офис
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="getEditAddress.office"
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
                        v-model="district"
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
                        v-model="getEditAddress.last_name"
                        @input="isLastNameInvalid = false"
                        :disabled="getEditAddress.is_main_address"
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
                        :disabled="getEditAddress.is_main_address"
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
                        v-model="getEditAddress.middle_name"
                        :disabled="getEditAddress.is_main_address"
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
                        v-model="getEditAddress.phone"
                        @input="isPhoneInvalid = false"
                        :disabled="getEditAddress.is_main_address"
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
                        v-if="getEditAddress.is_main_address"
                        type="email"
                        class="form-control form-control-lg"
                        :class="{borderRed: isEmailInvalid}"
                        v-model="getCurrentUser.email"
                        @input="isEmailInvalid = false"
                        disabled
                    >
                    <input
                        v-else
                        type="email"
                        class="form-control form-control-lg"
                        :class="{borderRed: isEmailInvalid}"
                        v-model="getEditAddress.email"
                        @input="isEmailInvalid = false"
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
                    style="margin-bottom: -50px;"
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
import {mapMutations, mapGetters, mapActions} from 'vuex'
import DropdownCityInput from "../../DropdownCityInput";

export default {
    name: "EditAddressForm",
    data() {
        return {
            isNameInvalid: false,
            errorName: 'Некорректный формат поля',

            isCityInvalid: false,
            errorCity: 'Некорректный формат поля',

            isHouseInvalid: false,
            errorHouse: 'Некорректный формат поля',

            isPostcodeInvalid: false,
            errorPostcode: 'Некорректный формат поля',

            isCountryInvalid: false,
            errorCountry: 'Некорректный формат поля',

            isRegionInvalid: false,
            errorRegion: 'Некорректный формат поля',

            isLastNameInvalid: false,
            errorLastName: 'Некорректный формат поля',

            isFirstNameInvalid: false,
            errorFirstName: 'Некорректный формат поля',

            isPhoneInvalid: false,
            errorPhone: 'Некорректный формат поля',

            isEmailInvalid: false,
            errorEmail: 'Некорректный формат поля',
        }
    },
    methods: {
        ...mapMutations(['setEditAddress', 'setIsShowAddressForm', 'setFastSearchAddress',
            'setIsSearchingDaDataAddress']),
        ...mapActions(['fetchDaDataAddress', 'updateAddress']),
        saveAddress() {
            if (this.getEditAddress.name.length < 3) {
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
                this.isCountryInvalid = true
                return;
            }
            if (this.region.length < 3) {
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

            const email = this.getEditAddress.is_main_address ?
                this.getCurrentUser.email : this.getEditAddress.email


            const editedAddress = {
                id: this.getEditAddress.id,
                addressable_id: this.getEditAddress.addressable_id,
                name: this.getEditAddress.name,
                city: this.city,
                street: this.street,
                house: this.house,
                holding: this.holding,
                building: this.building,
                apartment: this.apartment,
                office: this.getEditAddress.office,
                postcode: this.postcode,
                country: this.country,
                region: this.region,
                district: this.district,
                last_name: this.getEditAddress.last_name,
                first_name: this.getEditAddress.first_name,
                middle_name: this.getEditAddress.middle_name,
                phone: this.getEditAddress.phone,
                email: email,
            }
            console.log('saveAddress', editedAddress)
            this.setEditAddress(null)
            this.setIsShowAddressForm(false)
            this.updateAddress(editedAddress)
        },
        canceled() {
            this.setEditAddress(null)
            this.setIsShowAddressForm(false)
        },
        cityOnInput() {
            this.fetchDaDataAddress({
                query: this.getFastSearchAddress
            })
        }
    },
    computed: {
        ...mapGetters(['getEditAddress', 'getCurrentUser', 'getCurrentDaDataAddress', 'getFastSearchAddress',
            'getPhysicalPerson', 'getIsSearchingDaDataAddress']),
        fastSearch: {
            get() {
                return this.getFastSearchAddress
            },
            set(val) {
                this.setFastSearchAddress(val)
            }
        },
        city: {
            get() {
                if(this.getIsSearchingDaDataAddress)
                    return this.getCurrentDaDataAddress.city_with_type
                else return this.getEditAddress.city
            },
            set(val) {
                if(this.getIsSearchingDaDataAddress)
                    this.getCurrentDaDataAddress.city_with_type = val
                else this.getEditAddress.city = val
            }
        },
        street: {
            get() {
                if(this.getIsSearchingDaDataAddress)
                    return this.getCurrentDaDataAddress.street_with_type
                else return this.getEditAddress.street
            },
            set(val) {
                if(this.getIsSearchingDaDataAddress)
                    this.getCurrentDaDataAddress.street_with_type = val
                else this.getEditAddress.street = val
            }
        },
        house: {
            get() {
                if(this.getIsSearchingDaDataAddress)
                    return this.getCurrentDaDataAddress.house
                else return this.getEditAddress.house
            },
            set(val) {
                if(this.getIsSearchingDaDataAddress)
                    this.getCurrentDaDataAddress.house = val
                else this.getEditAddress.house = val
            }
        },
        building: {
            get() {
                if(this.getIsSearchingDaDataAddress)
                    return this.getCurrentDaDataAddress.block
                else return this.getEditAddress.building
            },
            set(val) {
                if(this.getIsSearchingDaDataAddress)
                    this.getCurrentDaDataAddress.block = val
                else this.getEditAddress.building = val
            }
        },
        holding: {
            get() {
                if(this.getIsSearchingDaDataAddress)
                    return this.getCurrentDaDataAddress.house_type_full
                else return this.getEditAddress.building
            },
            set(val) {
                if(this.getIsSearchingDaDataAddress)
                    this.getCurrentDaDataAddress.house_type_full = val
                else this.getEditAddress.building = val
            }
        },
        apartment: {
            get() {
                if(this.getIsSearchingDaDataAddress)
                    return this.getCurrentDaDataAddress.flat
                else return this.getEditAddress.apartment
            },
            set(val) {
                if(this.getIsSearchingDaDataAddress)
                    this.getCurrentDaDataAddress.flat = val
                else this.getEditAddress.apartment = val
            }
        },
        postcode: {
            get() {
                if(this.getIsSearchingDaDataAddress)
                    return this.getCurrentDaDataAddress.postal_code
                else return this.getEditAddress.postcode
            },
            set(val) {
                if(this.getIsSearchingDaDataAddress)
                    this.getCurrentDaDataAddress.postal_code = val
                else this.getEditAddress.postcode = val
            }
        },
        country: {
            get() {
                if(this.getIsSearchingDaDataAddress)
                    return this.getCurrentDaDataAddress.country
                else return this.getEditAddress.country
            },
            set(val) {
                if(this.getIsSearchingDaDataAddress)
                    this.getCurrentDaDataAddress.country = val
                else this.getEditAddress.country = val
            }
        },
        region: {
            get() {
                if(this.getIsSearchingDaDataAddress)
                    return this.getCurrentDaDataAddress.region
                else return this.getEditAddress.region
            },
            set(val) {
                if(this.getIsSearchingDaDataAddress)
                    this.getCurrentDaDataAddress.region = val
                else this.getEditAddress.region = val
            }
        },
        district: {
            get() {
                if(this.getIsSearchingDaDataAddress)
                    return this.getCurrentDaDataAddress.area_with_type
                else return this.getEditAddress.district
            },
            set(val) {
                if(this.getIsSearchingDaDataAddress)
                    this.getCurrentDaDataAddress.area_with_type = val
                else this.getEditAddress.district = val
            }
        },
    },
    components: {
        DropdownCityInput
    },
    mounted() {
        this.setIsSearchingDaDataAddress(false)
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
