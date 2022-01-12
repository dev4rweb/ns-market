<template>

    <div class="user-content " v-if="getCurrentUser && getPhysicalPerson">

        <div
            class="row"
            v-if="isEditFields"
        >
            <div class="card data-card">
                <h3>Личная информация</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group form-group-data">
                            <label>Имя</label>
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                v-model="getCurrentUser.first_name"
                            >
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group form-group-data">
                            <label>Отчество</label>
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                v-model="getCurrentUser.middle_name"
                            >
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
                            >
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group form-group-data">
                            <label>Электронная почта <b style="color: red">*</b> </label>
                            <input
                                type="email"
                                class="form-control form-control-lg"
                                v-model="getCurrentUser.email"
                            >
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
                                    type="text"
                                    class="form-control form-control-lg form-date"
                                    placeholder="ДД"
                                    :value="getDay"
                                >
                                <input
                                    type="text"
                                    class="form-control form-control-lg form-date"
                                    placeholder="ММ"
                                    :value="getMonth"
                                >
                                <input
                                    type="text"
                                    class="form-control form-control-lg form-date"
                                    placeholder="ГГГГ"
                                    :value="getYear"
                                >
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
                                :value="phoneMask"
                            >
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


            </div>
            <div class="row mt-3 mb-5 d-flex justify-content-center align-items-center">

                <button
                    class="btn btn-info btn-save"
                    @click="isEditFields = !isEditFields"
                >
                    Сохранить изменения
                </button>
            </div>

            <ChangePasswordForm />
        </div>

        <UserDataReadPanel
            v-else
        />

        <div class="row mt-3 mb-5 d-flex justify-content-center align-items-center">
            <button
                class="btn btn-info btn-save"
                v-if="!isEditFields"
                @click="isEditFields = !isEditFields"
            >
                Изменить данные
            </button>
        </div>
    </div>
</template>

<script>
import RadioBox from "../UI/RadioBox";
import UserDataReadPanel from "./UserDataReadPanel";
import ChangePasswordForm from "../ChangePasswordForm";
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "UserDataPanel",
    data() {
        return {
            gender: "М",
            isEditFields: false
        }
    },
    methods: {
        ...mapMutations(['setCurrentUser']),
        getWindowUser() {
            this.setCurrentUser(window.User)
            console.log('window User', window.User)
        },

    },
    computed: {
        ...mapGetters(['getCurrentUser', 'getPhysicalPerson']),
        getDay() {
            let day = ''
            if (this.getPhysicalPerson.birthday) {
                day = new Date(this.getPhysicalPerson.birthday).getDay()
                day = day < 10 ? '0' + day : day
            }
            return day
        },
        getMonth() {
            let month = ''
            if (this.getPhysicalPerson.birthday) {
                month = new Date(this.getPhysicalPerson.birthday).getMonth()
                month = month < 10 ? '0' + month : month
            }
            return month
        },
        getYear() {
            let year = ''
            if (this.getPhysicalPerson.birthday) {
                year = new Date(this.getPhysicalPerson.birthday).getFullYear()
            }
            return year
        },
        phoneMask() {
            let phone = this.getCurrentUser.mobile_phone
            let x = phone.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,3})/);
            phone = '+' + x[1] + '(' + x[2] + ') ' + x[3] + '-' + x[4] + '-' + x[5]
            return phone
        }
    },
    components: {
        RadioBox,
        UserDataReadPanel,
        ChangePasswordForm
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

.btn-save{
    max-width: 198px;
}
</style>
