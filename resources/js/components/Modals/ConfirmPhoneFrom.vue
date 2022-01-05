<template>
    <form
        @submit.prevent="confirmSms"
        class="needs-validation login-form "
        novalidate
    >
        <Loader v-if="loading"/>
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
import Loader from "../UI/Loader";
import {WORK_HOST} from "../api/admin/user";

export default {
    name: "ConfirmPhoneFrom",
    props: ['user', 'users'],
    data() {
        return {
            loading: false,
            phone: '+7',
            isPhoneInValid: false,
            isSmsShow: false,
            sms: '',
            isSmsInValid: false
        }
    },
    methods: {
        confirmSms() {
            if (this.isSmsShow) {
                if (this.sms.length !== 4 || this.sms !== '1111') {
                    this.isSmsInValid = true
                    return
                }
                this.loading = true
                console.log('update User', this.user);
                console.log('update Users phone', this.users[0].mobile_phone);
                axios.post(`${WORK_HOST}market/change-duplicate-phone`, {
                    mobile_phone: this.users[0].mobile_phone,
                    user_id: this.user.id,
                    active_phone: this.phone
                }).then(res => {
                    console.log(res)
                    if (res.data.success) {
                        this.changeLocalPhone();
                    } else {
                        alert('Что-то пошло не по плану...')
                    }
                }).catch(err => {
                    console.log(err)
                }).finally(() => {
                    this.loading = false
                });

            } else {
                this.sendSms(this.phone)
            }
        },
        changeLocalPhone() {
            axios.post(`/api/users/${this.user.id}`, {
                    _method: 'PUT',
                    mobile_phone: this.phone,
                }).then(res => {
                    console.log('updateUser res', res)
                if (res.data.success) {
                    const updatedUser = res.data.model;
                    this.$emit('phoneConfirmed', updatedUser);
                } else {
                    this.user.mobile_phone = this.phone
                    this.$emit('phoneConfirmed', this.user);
                }
                }).catch(err => {
                    console.log('updateUser err', err)
                });
        },
        sendSms(phoneNumber) {
            this.loading = true
            console.log('sendSms', phoneNumber)
            /*setTimeout(() => {
                setTimeout(() => {
                    this.$refs.focusMeToo.focus();
                }, 500);
                this.isSmsShow = true
                this.loading = false
            }, 2000);*/
            axios.post(`${WORK_HOST}market/send-user-sms`, {
                user_id: this.user.id
            }).then(res => {
                console.log('loginWithSms res', res)
                setTimeout(() => {
                    this.$refs.focusMeToo.focus();
                }, 500);
                this.isSmsShow = true
                this.loading = false
            }).catch(err => {
                console.log('loginWithSms err', err)
            }).finally(() => {
                this.loading = false
            });

        }
    },
    components: {
        Loader
    },
    mounted() {
        this.phone = `+${this.user.mobile_phone}`
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
