<template>
    <form
        @submit.prevent="registerUser"
        class="needs-validation login-form "
        novalidate
    >
        <h4 class="text-center">Регистрация</h4>
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
import {mapGetters, mapMutations, mapActions} from 'vuex'
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
        ...mapActions(['phoneVerification', 'findInviterByPhone']),
        registerUser() {
            if (
                this.pinCode.length !== 4
            ) {
                this.isSmsInValid = true
                return
            }
            // console.log('registerUser', this.getSecret, this.pinCode)
            if (
                this.pinCode == this.getSecret
                ||
                this.pinCode === this.rightPinCode
            ) {
                this.findInviterByPhone(this.phone)
            } else {
                this.isSmsInValid = true;
            }
        },
        sendSms() {
            console.log('send Sms')
            this.phoneVerification(this.phone)
        }
    },
    computed:{
        ...mapGetters(["getCurrentPhone", 'getSecret'])
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
