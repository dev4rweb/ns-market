<template>
    <div>
<!--        <Loader v-if="loading"/>-->
        <LoginWithPhone />
<!--        <form
            @submit.prevent="login"
            class="needs-validation login-form "
            novalidate
        >
            <p
                class="description"
            >
                {{ description }}
            </p>
            <div class="form-group form-group-blue">
                <label>
                    Ваш номер телефона или ID
                </label>
                <input
                    type="tel"
                    class="form-control form-control-lg"
                    :class="{borderRed: isPhoneInValid || isPasswordInValid}"
                    v-model="phone"
                    @input="isPhoneInValid = false"
                    required
                >
                <div
                    class="invalid-feedback"
                    :class="{show: isPhoneInValid}"
                >
                    Мы не нашли человека с таким номером телефона в нашей базе. Проверьте правильность введённых данных и
                    повторите попытку.
                </div>
            </div>
            <div
                class="form-group form-group-blue"
                v-if="isPasswordShow"
            >
                <label>
                    Ваш пароль
                </label>
                <input
                    type="password"
                    class="form-control form-control-lg"
                    :class="{borderRed: isPasswordInValid}"
                    @input="isPasswordInValid = false"
                    v-model="password"
                >
                <div
                    class="invalid-feedback"
                    :class="{show: isPasswordInValid}"
                >
                    Ошибка в номере телефона или пароле. Проверьте правильность данных и повторите попытку.
                </div>
            </div>
            <div
                class="form-group form-group-blue"
                v-if="isSmsShow"
            >
                <label>
                    Введите пароль из SMS
                </label>
                <input
                    type="text"
                    class="form-control form-control-lg text-center"
                    :class="{borderRed: isSmsInValid}"
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
                v-if="isPhoneConfirm"
                type="button"
                class="btn btn-lg btn-primary"
                @click="checkPhoneChanged"
            >
                Подтвердить
            </button>
            <button
                v-if="!isPhoneConfirm && !isSmsShow"
                type="submit"
                class="btn btn-lg btn-primary"
            >
                Продолжить
            </button>
            <button
                v-if="!isPhoneConfirm && !isSmsShow"
                type="button"
                class="btn btn-lg btn-link"
                data-dismiss="modal"
            >
                Позже
            </button>
            <button
                v-if="isSmsShow"
                type="button"
                class="btn btn-lg btn-primary"
                @click="loginWithSms"
            >
                Продолжить
            </button>
            <button
                v-if="isSmsShow"
                type="button"
                @click="resendSms"
                class="btn btn-lg btn-link"
            >
                Отправить СМС повторно
            </button>
        </form>-->
    </div>
</template>

<script>
import Loader from "../UI/Loader";
import LoginWithPhone from "./LoginWithPhone";

export default {
    name: "ModalLogin",
    data() {
        return {
            phone: '+7',
            isPhoneConfirm: false,
            isPhoneInValid: false,
            password: '',
            isPasswordInValid: false,
            isSmsInValid: false,
            sms: '_ _ _ _',
            loading: false,
            isPasswordShow: false,
            loginType: null,
            user: null,
            isSmsShow: false,
            description: 'Войдите или зарегистрируйтесь, чтобы использовать все возможности New Star Market.'
        }
    },
    methods: {
        login() {
            if (this.user) {
                if (this.loginType === 1) {
                    this.confirmPhone()
                } else {
                    this.localLogin(this.user);
                }
            } else {
                this.getUser()
            }
        },
        getUser() {
            const testHost = 'http://solvik.dev4rweb.com/api/users'
            const localHost = 'http://127.0.0.1:8001/api/'
            const productionHost = 'https://admin.newstarmlm.biz/api/'
            const stagingHost = 'http://staging-admin.newstarmlm.biz/api/'
            const testProducts = 'http://staging-admin.newstarmlm.biz/api/customer-order/products'
            const testComments = 'http://staging-admin.newstarmlm.biz/api/customer-order/collector'

            // console.log('login', this.phone)
            let userId = 0
            let phoneNumber = ''
            if (this.phone.length < 3) this.isPhoneInValid = true
            if (!this.isPhoneInValid) {
                this.loading = true
                const fd = new FormData();
                if (this.phone.length > 8)
                    fd.set('phone', this.phone.slice(1, this.phone.length))
                else fd.set('user_id', this.phone)
                axios.post(`${localHost}market/get-user-phone`, fd)
                    .then(res => {
                        console.log('login', res)
                        if (res.data.success) {
                            if (res.data.model) {
                                this.loginType = res.data.loginType
                                if (res.data.loginType === 1) {
                                    this.user = res.data.model;
                                    this.isPasswordShow = true;
                                    const firstName = this.user.first_name ?? this.user.name
                                    const middleName = this.user.middle_name ?? ''
                                    this.description = `Здравствуйте, ${firstName} ${middleName}`
                                } else {
                                    if (res.data.model.length === 1) {
                                        this.user = res.data.model[0];
                                        this.isPasswordShow = true;
                                        const firstName = this.user.first_name ?? this.user.name
                                        const middleName = this.user.middle_name ?? ''
                                        this.description = `Здравствуйте, ${firstName} ${middleName}`
                                    } else {
                                        this.phone = ''
                                        this.description = 'Введённый номер телефона не зарегистрирован в базе пользователей. Авторизуйтесь с помощью Вашего ID.'
                                        return
                                    }
                                }
                            }
                        } else {
                            this.isPhoneInValid = true
                        }
                    })
                    .catch(err => {
                        console.log('login err', err.response.data)
                    })
                    .finally(() => {
                        this.loading = false
                    });
            }
        },
        confirmPhone() {
            console.log('confirmPhone')
            if (this.user) {
                this.phone = `+${this.user.mobile_phone}`
                this.description = 'Проверьте, а в случае необходимости измените Ваш номер телефона'
                this.isPhoneConfirm = true
            }
        },
        checkPhoneChanged() {
            console.log('checkPhoneChanged')
            if (!this.phone.trim() || this.phone.length < 8) {
                this.description = 'Некорректный номер телефона'
                return
            }
            if (this.phone === `+${this.user.mobile_phone}`)
                this.localLogin(this.user);
            else {
                this.description = 'На указанный номер отправлено SMS-сообщение с временным паролем. Его можно изменить позже в Личном кабинете.'
                this.isPasswordShow = false
                this.isPhoneConfirm = false
                this.isSmsShow = true
            }
        },
        loginWithSms() {
            const localHost = 'http://127.0.0.1:8001/api/'
            const productionHost = 'https://admin.newstarmlm.biz/api/'
            const stagingHost = 'http://staging-admin.newstarmlm.biz/api/'
            console.log('loginWithSms')
            // alert('Программист в поте своего немолодого лица трудиться над этой функцией :-)')
            axios.post(`${localHost}market/send-user-sms`, {
                user_id: this.user.id
            }).then(res => {
                console.log('loginWithSms res', res)
            }).catch(err => {
                console.log('loginWithSms err', err)
            });
        },
        resendSms() {
            console.log('resendSms')
            alert('Программист и над этой функцией тоже старается :-)')
        },
        localLogin(user) {
            if (this.password.length > 3) {
                this.loading = true;
                console.log('localLogin', user);
                const fd = new FormData();
                fd.set('email', user.email);
                fd.set('password', this.password);
                fd.set('remember', false);
                const userLogin = {
                    email: user.email,
                    password: this.password,
                    remember: false
                }
                axios.post('/login', userLogin)
                    .then(res => {
                        console.log('localLogin', res)
                        if (res.status === 204)
                            window.location.href = '/user-panel'
                    })
                    .catch(err => {
                        console.log('localLogin err', err.response.data)
                        if (err.response.data.errors.email[0].includes('These credentials do not match our records.'))
                            this.localRegistration(user)
                        else alert('Что-то пошло не так, попробуйте позже')
                    })
                    .finally(() => {
                        this.loading = false
                    });
            } else {
                this.isPasswordInValid = true
            }
        },
        localRegistration(user) {
            this.loading = true
            console.log('localRegistration', user)
            const fd = new FormData()
            fd.set('user_id', user.id)
            fd.set('name', user.name)
            fd.set('email', user.email)
            fd.set('first_name', user.first_name)
            fd.set('last_name', user.last_name)
            fd.set('middle_name', user.middle_name)
            fd.set('mobile_phone', user.mobile_phone)
            fd.set('password', this.password)
            fd.set('password_confirmation', this.password)
            fd.set('type', user.type)
            axios.post('/register', fd)
                .then(res => {
                    console.log('localRegistration', res)
                    if (res.status === 201)
                        window.location.href = '/user-panel'
                })
                .catch(err => {
                    console.log('localRegistration err', err.response.data)
                    alert('Что-то пошло не так, попробуйте позже')
                })
                .finally(() => {
                    this.loading = false
                });
        }
    },
    mounted() {
        console.log('Modal Login')
    },
    components: {
        Loader,
        LoginWithPhone
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
