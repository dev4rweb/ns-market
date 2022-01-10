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
    </form>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
    name: "WelcomePasswordForm",
    data() {
        return {
            password: '',
            phone: '+7',
            isPasswordInValid: false
        }
    },
    methods: {
        ...mapActions(['localLogin', 'comparePassword']),
        ...mapMutations([
            'setIsNeedToConfirmPhone', 'setShowLoginWithPhone',
            'setShowWelcomePasswordForm', 'setIsConfirmPhoneFrom'
        ]),
        welcomeLogin() {
            console.log('welcomeLogin');
            if (!this.getIsNeedToConfirmPhone) {
                if (this.password.length > 3) {
                    // console.log('localLogin', this.getCurrentUser);
                    this.comparePassword(this.password)
                    // this.localLogin(this.password)
                } else {
                    this.isPasswordInValid = true
                }
            } else {
                this.setIsConfirmPhoneFrom(true)
                this.setShowWelcomePasswordForm(false)
            }
        },

        backToPrevForm() {
            console.log('backToPrevForm')
            this.setShowLoginWithPhone(true)
            this.setShowWelcomePasswordForm(false)
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
