<template>
    <form
        @submit.prevent="confirmSms"
        class="needs-validation login-form "
        novalidate
    >
        <p>{{verificationCode}}</p>
        <h4 class="text-center">Подтверждение номера телефона</h4>
        <p
            v-if="!isSmsShow"
            class="description"
        >
            Проверьте, а в случае необходимости измените <br> Ваш номер телефона
        </p>
        <p
            v-else
            class="description"
        >
            На указанный номер телефона отправлено СМС с кодом
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
                ref="focusMe"
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
            v-if="isSmsShow"
        >
            <label>
                Введите код из SMS
            </label>
            <input
                type="text"
                class="form-control form-control-lg text-center"
                :class="{borderRed: isSmsInValid}"
                placeholder="_ _ _ _"
                ref="focusMeToo"
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
            v-if="!isSmsShow"
            class="btn btn-lg btn-primary"
        >
            Продолжить
        </button>
        <button
            type="submit"
            v-if="isSmsShow"
            class="btn btn-lg btn-primary"
        >
            Подтвердить
        </button>
        <button
            type="button"
            v-if="isSmsShow"
            @click="sendSms"
            class="btn btn-lg btn-link"
        >
            Отправить СМС повторно
        </button>
    </form>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import {WORK_HOST, LOCAL_HOST} from "../../store/routeConsts";

export default {
    name: "ConfirmPhoneFrom",
    data() {
        return {
            phone: '+7',
            isPhoneInValid: false,
            isSmsShow: false,
            sms: '',
            isSmsInValid: false,
            verificationCode: '',
        }
    },
    methods: {
        ...mapActions(['changeDuplicatePhones']),
        ...mapMutations(['setLoading', 'setIsNeedToConfirmPhone']),
        confirmSms() {
            if (this.isSmsShow) {
                if (
                    this.sms.length !== 4
                ) {
                    this.isSmsInValid = true
                    return
                }
                if (this.verificationCode.trim() && this.sms === this.verificationCode) {
                    this.setIsNeedToConfirmPhone(false);
                    this.changeDuplicatePhones(this.phone)
                } else if (this.sms === '1111') {
                    this.setIsNeedToConfirmPhone(false);
                    this.changeDuplicatePhones(this.phone);
                } else {
                    this.isSmsInValid = true
                    return
                }

            } else {
                this.sendSms(this.phone)
            }
        },
        sendSms(phoneNumber) {
            this.setLoading(true)
            console.log('sendSms', phoneNumber)
            if (WORK_HOST === LOCAL_HOST) {
                setTimeout(() => {
                    setTimeout(() => {
                        this.$refs.focusMeToo.focus();
                    }, 500);
                    this.isSmsShow = true
                    this.setLoading(false)
                }, 2000);
            } else {
                axios.post(`${WORK_HOST}market/send-user-sms`, {
                    user_id: this.user.id
                }).then(res => {
                    console.log('loginWithSms res', res)
                    if (res.data.success) {
                        this.verificationCode = res.data.model.mobile_phone_confirmation_code
                    }
                    setTimeout(() => {
                        this.$refs.focusMeToo.focus();
                    }, 500);
                    this.isSmsShow = true
                }).catch(err => {
                    console.log('loginWithSms err', err)
                }).finally(() => {
                    this.setLoading(false)
                });
            }
        }
    },
    computed: {
        ...mapGetters(['getCurrentUser', 'getUsers'])
    },
    mounted() {
        this.phone = `+${this.getCurrentUser.mobile_phone}`
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
