<template>
    <form
        @submit.prevent="welcomeLogin"
        class="needs-validation login-form "
        novalidate
    >
        <Loader v-if="loading"/>
        <p
            class="description"
        >
            Здравствуйте, <br>
            {{welcomeSentence}}
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
import Loader from "../UI/Loader";
export default {
    name: "WelcomePasswordForm",
    props: ['user', 'isNeedToConfirmForm'],
    data() {
        return {
            loading: false,
            password: '',
            phone: '+7',
            isPasswordInValid: false
        }
    },
    methods: {
        welcomeLogin() {
            if (!this.isNeedToConfirmForm) {
                if (this.password.length > 3) {
                    this.loading = true;
                    console.log('localLogin', this.user);
                    const userLogin = {
                        email: this.user.email,
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
                                this.localRegistration(this.user)
                            else alert('Что-то пошло не так, попробуйте позже')
                        })
                        .finally(() => {
                            this.loading = false
                        });
                } else {
                    this.isPasswordInValid = true
                }
            } else {
                this.$emit('needConfirmPhone')
            }
            console.log('welcomeLogin');
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
        },
        backToPrevForm() {
            console.log('backToPrevForm')
            this.$emit('showLoginWithPhone')
        }
    },
    computed: {
        welcomeSentence() {
            const firstName = this.user.first_name ?? this.user.name
            const middleName = this.user.middle_name ?? ''
            return `${firstName} ${middleName}`
        }
    },
    mounted() {
        this.phone = `+${this.user.mobile_phone}`
        setTimeout(() => {
            this.$refs.focusMe.focus();
        }, 500);
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
