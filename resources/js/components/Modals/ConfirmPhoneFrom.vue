<template>
    <form
        @submit.prevent="confirmSms"
        class="needs-validation login-form "
        novalidate
    >
        <Loader v-if="loading"/>
        <p
            class="description"
        >
            Проверьте, а в случае необходимости измените Ваш номер телефона
        </p>
        <div class="form-group form-group-blue">
            <label>
                Ваш номер телефона
            </label>
            <input
                type="tel"
                class="form-control form-control-lg"
                :class="{borderRed: isPhoneInValid}"
                v-model="phone"
                @input="isPhoneInValid = false"
                required
            >
            <div
                class="invalid-feedback"
                :class="{show: isPhoneInValid}"
            >
                Некорректный номер телефона
            </div>
        </div>
        <div
            class="form-group form-group-blue"
        >
            <label>
                Введите пароль из SMS
            </label>
            <input
                type="text"
                class="form-control form-control-lg text-center"
                :class="{borderRed: isSmsInValid}"
                placeholder="_ _ _ _"
                @input="isSmsInValid = false"
                v-model="sms"
            >
            <div
                class="invalid-feedback"
                :class="{show: isSmsInValid}"
            >
                Неверный sms
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
            @click="sendSms"
            class="btn btn-lg btn-link"
        >
            Отправить СМС повторно
        </button>
    </form>
</template>

<script>
import Loader from "../UI/Loader";
export default {
    name: "ConfirmPhoneFrom",
    props: ['user'],
    data() {
        return {
            loading: false,
            phone: '+7',
            isPhoneInValid: false,
            sms:'',
            isSmsInValid: false
        }
    },
    methods: {
        confirmSms() {
            if (this.sms.length !== 4 || this.sms !== '1111') {
                this.isSmsInValid = true
                return
            }
            console.log('update User', this.user)
            axios.post(`/api/users/${this.user.id}`, {
                _method: 'PUT',
                mobile_phone: this.user.mobile_phone,
            }).then(res => {
                console.log('updateUser res', res)
                if (res.data.success) {
                    const updatedUser = res.data.model
                    this.$emit('phoneConfirmed', updatedUser)
                }
            }).catch(err => {
                console.log('updateUser err', err)
            });
        },
        sendSms(phoneNumber) {
            console.log('sendSms', phoneNumber)
        }
    },
    components: {
        Loader
    },
    mounted() {
        this.phone = this.user.mobile_phone
        this.sendSms(this.phone)
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
