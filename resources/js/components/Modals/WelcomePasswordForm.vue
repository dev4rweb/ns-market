<template>
    <form
        @submit.prevent="welcomeLogin"
        class="needs-validation login-form "
        novalidate
    >
        <h4 class="text-center">Вход и регистрация</h4>
        <p
            class="description"
        >
            Здравствуйте, <br>
            {{ welcomeSentence }}
        </p>
        <div class="form-group form-group-blue">
            <label>
                Ваш номер телефона
            </label>
            <input
                type="tel"
                class="form-control form-control-lg"
                v-model="phone"
                disabled
            >
        </div>
        <div class="form-group form-group-blue">
            <label>
                Ваш Пароль
            </label>
            <input
                type="password"
                ref="focusMe"
                class="form-control form-control-lg"
                :class="{borderRed: isPasswordInValid}"
                v-model="password"
                @input="isPasswordInValid = false"
                required
            >
            <div
                class="invalid-feedback"
                :class="{show: isPasswordInValid}"
            >
                Неправильный пароль!
            </div>
        </div>

        <p
            v-if="isSmsMessage"
            style="color: red; font-weight: bold; font-style: italic;"
        >
            Мы отправили для Вас СМС
            с временным паролем.
            Используйте его для входа,
            а затем замените на постоянный.
            Сделать это можно в в разделе
            Мои данные / Личные данные
        </p>

        <button
            type="submit"
            class="btn btn-lg btn-primary"
        >
            Продолжить
        </button>
        <button
            type="button"
            class="btn btn-lg btn-link"
            @click="backToPrevForm"
        >
            Назад
        </button>
        <button
            type="button"
            class="btn btn-lg btn-link"
            @click="forgotPassword"
        >
            Забыли пароль?
        </button>
    </form>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import {generateTempPassword} from "../../store/utils/generateTempPassword";

export default {
    name: "WelcomePasswordForm",
    data() {
        return {
            password: '',
            phone: '+7',
            isPasswordInValid: false,
            isSmsMessage: false
        }
    },
    methods: {
        ...mapActions(['localLogin', 'comparePassword', 'updatePassword']),
        ...mapMutations([
            'setIsNeedToConfirmPhone', 'setShowLoginWithPhone',
            'setShowWelcomePasswordForm', 'setIsConfirmPhoneFrom',
            'setIsForgot'
        ]),
        welcomeLogin() {
            console.log('welcomeLogin');
            if (this.password.length > 3) {
                // console.log('localLogin', this.getCurrentUser);
                this.comparePassword(this.password)
                // this.localLogin(this.password)
            } else {
                this.isPasswordInValid = true
            }
        },

        backToPrevForm() {
            console.log('backToPrevForm')
            this.setShowLoginWithPhone(true)
            this.setShowWelcomePasswordForm(false)
        },

        forgotPassword() {
            console.log('forgot Password')
            this.setIsForgot(true)
            this.isSmsMessage = true
            const rndPassword = generateTempPassword(8)
            localStorage.setItem('password', rndPassword)
            console.log('password', rndPassword)
            this.updatePassword(rndPassword)
        }
    },
    computed: {
        ...mapGetters(['getCurrentUser', 'getIsNeedToConfirmPhone']),
        welcomeSentence() {
            const firstName = this.getCurrentUser.first_name ?? this.getCurrentUser.name
            const middleName = this.getCurrentUser.middle_name ?? ''
            return `${firstName} ${middleName}`
        }
    },
    mounted() {
        this.phone = `+${this.getCurrentUser.mobile_phone}`
        setTimeout(() => {
            this.$refs.focusMe.focus();
        }, 500);
    },
}
</script>

<style scoped>
.login-form {
    width: 100%;
    display: flex;
    flex-direction: column;

}

.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>
