<template>
    <form
        @submit.prevent="login"
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
        <button
            type="submit"
            class="btn btn-lg btn-primary"
        >
            Продолжить
        </button>
        <button
            type="button"
            class="btn btn-lg btn-link"
            data-dismiss="modal"
        >
            Позже
        </button>
    </form>
</template>

<script>
import Loader from "../UI/Loader";

export default {
    name: "ModalLogin",
    data() {
        return {
            phone: '+7',
            isPhoneInValid: false,
            password: '',
            isPasswordInValid: false,
            loading: false,
            isPasswordShow: false,
            user: null
        }
    },
    methods: {
        login() {
            if (this.user) {
                this.localLogin(this.user);
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
                axios.post(`${stagingHost}market/get-user-phone`, fd)
                    .then(res => {
                        console.log('login', res)
                        if (res.data.success) {
                            if (res.data.model) {
                                this.user = res.data.model;
                                this.isPasswordShow = true;
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
        Loader
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
