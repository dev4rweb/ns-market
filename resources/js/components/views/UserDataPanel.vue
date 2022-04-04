<template>

    <div class="user-content mb-5" v-if="getCurrentUser && getPhysicalPerson">
        <UpdateWithPhone/>
        <div
            class="row"
            v-if="isEditFields"
        >
            <form
                class="card data-card  needs-validation mb-5"
                @submit.prevent="changingData"
                novalidate
            >
                <h3>Личная информация</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group form-group-data">
                            <label>Имя</label>
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                :class="{borderRed: isFirstNameInValid}"
                                @input="isFirstNameInValid = false"
                                v-model="getCurrentUser.first_name"
                                required
                            >
                        </div>
                        <div
                            class="invalid-feedback"
                            :class="{show: isFirstNameInValid}"
                        >
                            {{ firstNameError }}
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group form-group-data">
                            <label>Отчество</label>
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                v-model="getCurrentUser.middle_name"
                                :class="{borderRed: isMiddleNameInValid}"
                                @input="isMiddleNameInValid = false"
                                required
                            >
                        </div>

                        <div
                            class="invalid-feedback"
                            :class="{show: isMiddleNameInValid}"
                        >
                            {{ middleNameError }}
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group form-group-data">
                            <label>Фамилия</label>
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                v-model="getCurrentUser.last_name"
                                :class="{borderRed: isLastNameInValid}"
                                @input="isLastNameInValid = false"
                                required
                            >
                        </div>

                        <div
                            class="invalid-feedback"
                            :class="{show: isLastNameInValid}"
                        >
                            {{ lastNameError }}
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group form-group-data">
                            <label>Электронная почта <b style="color: red">*</b> </label>
                            <input
                                type="email"
                                class="form-control form-control-lg"
                                v-model="getCurrentUser.email"
                                :class="{borderRed: isEmailInValid}"
                                @input="isEmailInValid = false"
                                required
                            >
                        </div>

                        <div
                            class="invalid-feedback"
                            :class="{show: isEmailInValid}"
                        >
                            {{ emailError }}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group form-group-data">
                            <label>Пол</label>
                            <div class="d-flex justify-content-between align-items-center">
                                <RadioBox label="Мужской" value="М" v-model="getPhysicalPerson.gender"/>
                                <RadioBox label="женский" value="Ж" v-model="getPhysicalPerson.gender"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group form-group-data">
                            <label>Дата рождения</label>
                            <div class="d-flex justify-content-between align-items-center">
                                <input
                                    type="date"
                                    class="form-control form-control-lg"
                                    v-model="getPhysicalPerson.birthday"
                                    :class="{borderRed: isBirthdayInValid}"
                                    @input="isBirthdayInValid = false"
                                    required
                                >
                                <!--                                <input
                                                                    type="text"
                                                                    class="form-control form-control-lg form-date"
                                                                    placeholder="ММ"
                                                                    v-model="getMonth"
                                                                >
                                                                <input
                                                                    type="text"
                                                                    class="form-control form-control-lg form-date"
                                                                    placeholder="ГГГГ"
                                                                    v-model="getYear"
                                                                >-->
                            </div>

                            <div
                                class="invalid-feedback"
                                :class="{show: isBirthdayInValid}"
                            >
                                {{ birthdayError }}
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group form-group-data">
                            <label>Мобильный телефон <b style="color: red">*</b> </label>
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                v-model="getPhone"
                                :class="{borderRed: isPhoneInValid}"
                                @input="isPhoneInValid = false"
                                required
                            >

                            <div
                                class="invalid-feedback"
                                :class="{show: isPhoneInValid}"
                            >
                                {{ phoneError }}
                            </div>
                        </div>
                    </div>
                    <!--                    <div class="col-md-6">
                                            <div class="form-group form-group-data form-gray">
                                                <label>Код из СМС</label>
                                                <input
                                                    type="text"
                                                    class="form-control form-control-lg"
                                                    placeholder="_ _ _ _"
                                                >
                                            </div>
                                            <p>
                                                Для добавления или изменения номера телефона Вам будет отправлено СМС-сообщение с
                                                проверочным
                                                кодом. Введите его в поле выше, чтобы подтвердить операцию.
                                            </p>
                                        </div>-->
                </div>
                <div class="row mb-4 d-flex justify-content-center align-items-center  position-relative">

                    <button
                        class="btn btn-info btn-save btn-wrap"
                        type="submit"
                    >
                        Сохранить изменения
                    </button>

                    <button
                        ref="openModalUpdateWithPhone"
                        style="display:none;"
                        data-bs-target="#updateWithPhone"
                        data-bs-toggle="modal"
                    ></button>

                    <button
                        class="btn btn-secondary btn-save btn-wrap"
                        type="button"
                        @click="escapeChanges"
                    >
                        Отмена
                    </button>
                </div>

            </form>


            <ChangePasswordForm
                @hideEditForm="hideEditForm"
            />
        </div>

        <div class="position-relative" v-else>
            <UserDataReadPanel/>

            <div
                class="row mt-3 mb-5 d-flex justify-content-center align-items-center"
            >
                <button
                    class="btn btn-info btn-save"
                    style="margin-top: -35px; z-index: 1"
                    @click="isEditFields = !isEditFields"
                >
                    Изменить данные
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import RadioBox from "../UI/RadioBox";
import UserDataReadPanel from "./UserDataReadPanel";
import ChangePasswordForm from "../ChangePasswordForm";
import UpdateWithPhone from "../Modals/UpdateWithPhone";
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "UserDataPanel",
    data() {
        return {
            isFirstNameInValid: false,
            firstNameError:'',
            isMiddleNameInValid: false,
            middleNameError:'',
            isLastNameInValid: false,
            lastNameError:'',
            isEmailInValid: false,
            emailError:'',
            isBirthdayInValid: false,
            birthdayError:'',
            isPhoneInValid: false,
            phoneError:'',
            isEditFields: false,
            isShowModal: false
        }
    },
    methods: {
        ...mapMutations(['setCurrentUser']),
        getWindowUser() {
            this.setCurrentUser(window.User)
            console.log('window User', window.User)
        },
        changingData() {
            console.log('changingData getCurrentUser', this.getCurrentUser)
            console.log('changingData getPhysicalPerson', this.getPhysicalPerson.birthday)
            /*if (this.getCurrentUser.first_name.replace(/\s/g, '').length < 2) {
                this.firstNameError = 'Минимальное кол-во символов - 2'
                this.isFirstNameInValid = true
                return;
            }

            if (this.getCurrentUser.middle_name.replace(/\s/g, '').length < 2) {
                this.middleNameError = 'Минимальное кол-во символов - 2'
                this.isMiddleNameInValid = true
                return;
            }

            if (this.getCurrentUser.last_name.replace(/\s/g, '').length < 2) {
                this.lastNameError = 'Минимальное кол-во символов - 2'
                this.isLastNameInValid = true
                return;
            }

            if (this.getCurrentUser.email.replace(/\s/g, '').length < 2) {
                this.emailError = 'Минимальное кол-во символов - 2'
                this.isEmailInValid = true
                return;
            }*/

            if (
                new Date('1950-01-01').getTime() > new Date(this.getPhysicalPerson.birthday).getTime()
                ||
                new Date('2015-01-01').getTime() < new Date(this.getPhysicalPerson.birthday).getTime()
            ) {
                this.birthdayError = 'Некорректный формат даты';
                this.isBirthdayInValid = true;
                return;
            }
            if (this.getCurrentUser.mobile_phone.length < 10) {
                this.phoneError = 'Некорректный формат телефона'
                this.isPhoneInValid = true
                return;
            }

            this.$refs.openModalUpdateWithPhone.click()
            // console.log('getTime', this.getCurrentUser.mobile_phone.length);
            this.isEditFields = false
        },
        escapeChanges() {
            window.location.reload()
            // this.isEditFields = false
        },
        hideEditForm() {
            this.isEditFields = false
        }
    },
    computed: {
        ...mapGetters(['getCurrentUser', 'getPhysicalPerson']),
        /*getDay: {
            get: function () {
                let day = ''
                if (this.getPhysicalPerson.birthday) {
                    day = new Date(this.getPhysicalPerson.birthday).getDay()
                    day = day < 10 ? '0' + day : day
                }
                return day
            },
            set: function (newValue) {
                this.day = newValue
                console.log('setter day', this.day)
            }
        },
        getMonth: {
            get: function () {
                let month = ''
                if (this.getPhysicalPerson.birthday) {
                    month = new Date(this.getPhysicalPerson.birthday).getMonth()
                    month = month < 10 ? '0' + month : month
                }
                return month
            },
            set: function (newValue) {
                this.month = newValue
                console.log('setter month', this.month)
            }
        },
        getYear: {
            get: function () {
                let year = ''
                if (this.getPhysicalPerson.birthday) {
                    year = new Date(this.getPhysicalPerson.birthday).getFullYear()
                }
                return year
            },
            set: function (newValue) {
                this.year = newValue
                console.log('setter year', this.year)
            }
        },
        phoneMask() {
            let phone = this.getCurrentUser.mobile_phone
            let x = phone.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,3})/);
            phone = '+' + x[1] + '(' + x[2] + ') ' + x[3] + '-' + x[4] + '-' + x[5]
            return phone
        }*/
        getPhone: {
            get: function () {
                let phone = '+'
                if (this.getCurrentUser.mobile_phone) {
                    phone += this.getCurrentUser.mobile_phone
                }
                return phone
            },
            set: function (value) {
                this.getCurrentUser.mobile_phone = value.replace(/[^0-9]/g, '')
            }
        }
    },
    components: {
        RadioBox,
        UserDataReadPanel,
        ChangePasswordForm,
        UpdateWithPhone
    },
    mounted() {
        this.getWindowUser()
    }
}
</script>

<style scoped>
.form-gray input {
    border-color: #999999;
    max-width: 184px;
    text-align: center;
}

.form-gray label {
    color: #999999;
}

.btn-save {
    max-width: 198px;
}

.btn-wrap {
    margin-bottom: -100px;
}
.show {
    display: block;
}

.borderRed {
    border-color: red;
}
h3 {
    text-transform: uppercase;
}
</style>
