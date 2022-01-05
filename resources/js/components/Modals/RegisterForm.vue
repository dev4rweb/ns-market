<template>
    <form
        @submit.prevent="registerUser"
        class="needs-validation login-form "
        novalidate
    >
        <Loader v-if="loading"/>
        <div class="form-group form-group-blue">
            <label>
                Ваш номер телефона или ID
            </label>
            <input
                type="tel"
                class="form-control form-control-lg"
                v-model="phoneNumber"
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
import Loader from "../UI/Loader";

export default {
    name: "RegisterForm",
    props: ['phoneNumber'],
    data() {
        return {
            loading: false,
            isSmsInValid: false,
            pinCode: '',
            rightPinCode: '1111'
        }
    },
    methods: {
        registerUser() {
            if (
                this.pinCode.length !== 4
                ||
                this.pinCode !== this.rightPinCode
            ) {
                this.isSmsInValid = true
                return
            }
            this.loading = true
            const uniqueId = Date.now()
            const newUser = {
                user_id: uniqueId,
                name: 'Новый Пользователь',
                email: `${uniqueId}@unknown.com`,
                mobile_phone: this.phoneNumber,
                password: 'password',
                type: 'client'
            }
            console.log('register User', newUser)
            axios.post('/register', newUser)
                .then(res => {
                console.log('localRegistration res', res)
                if (res.status === 201)
                    this.$emit('registeredUser', newUser)
            }).catch(err => {
                console.log('localRegistration err', err.response.data)
                alert('Что-то пошло не так, попробуйте позже')
            }).finally(() => {
                this.loading = false
            });
        },
        sendSms() {
            console.log('send Sms')
        }
    },
    components: {
        Loader
    },
    mounted() {
        this.sendSms()
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
