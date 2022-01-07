<template>
    <form
        @submit.prevent="registerUser"
        class="needs-validation login-form "
        novalidate
    >
        <h4 class="text-center">Вход и регистрация</h4>
        <div class="form-group form-group-blue">
            <label>
                Ваш номер телефона или ID
            </label>
            <input
                type="tel"
                class="form-control form-control-lg"
                v-model="phone"
                disabled
            >
        </div>
        <p
            class="description"
        >
            На указанный номер отправлено SMS-сообщение с временным паролем. Его можно изменить позже в Личном кабинете.
        </p>
        <div class="form-group form-group-blue">
            <label>
                Ваш номер телефона
            </label>
            <input
                type="text"
                class="form-control form-control-lg text-center"
                :class="{borderRed: isSmsInValid}"
                placeholder="_ _ _ _"
                ref="focusMe"
                v-model="pinCode"
                @input="isSmsInValid = false"
                required
            >
            <div
                class="invalid-feedback"
                :class="{show: isSmsInValid}"
            >
                Неправильный код!
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
            @click="sendSms"
        >
            Отправить СМС повторно
        </button>
    </form>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    name: "RegisterForm",
    data() {
        return {
            loading: false,
            isSmsInValid: false,
            phone: '+7',
            pinCode: '',
            rightPinCode: '1111'
        }
    },
    methods: {
        ...mapMutations([
            'setCurrentUser', 'setIsShowRegisterForm', 'setShowWelcomePasswordForm'
        ]),
        registerUser() {
            if (
                this.pinCode.length !== 4
                ||
                this.pinCode !== this.rightPinCode
            ) {
                this.isSmsInValid = true
                return
            }

            alert('Ура! Вы зарегистрированы в системе!')

        },
        sendSms() {
            console.log('send Sms')
        }
    },
    computed:{
        ...mapGetters(["getCurrentPhone"])
    },
    mounted() {
        this.phone = `+${this.getCurrentPhone}`
        this.sendSms()
        setTimeout(() => {
            this.$refs.focusMe.focus();
        }, 500);
    }
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
