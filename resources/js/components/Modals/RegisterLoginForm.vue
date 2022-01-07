<template>
    <div
        class="login-form"
    >
        <h4 class="text-center">Вход и регистрация</h4>
        <p
            class="description"
        >
            Введённый номер  телефона
            <b>{{getCurrentPhone}}</b>
            не зарегистрирован в new Star market
        </p>
        <button
            @click="wantRegister"
            type="submit"
            class="btn btn-lg btn-primary"
        >
            Я хочу зарегистрироваться
        </button>
        <button
            type="button"
            @click="wantLoginById"
            class="btn btn-lg btn-link"
        >
            У меня уже есть аккаунт
        </button>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    name: "RegisterLoginForm",
    methods: {
        ...mapMutations(['setIsShowRegisterForm', 'setShowRegisterLoginForm', 'setIsShowLoginByIdForm']),
        wantRegister() {
            console.log('wantRegister')
            this.setIsShowRegisterForm(true)
            this.setShowRegisterLoginForm(false)
        },
        wantLoginById() {
            console.log('wantLoginById')
            this.setIsShowLoginByIdForm(true)
            this.setShowRegisterLoginForm(false)
        }
    },
    computed: {
        ...mapGetters(['getCurrentPhone'])
    }
}
</script>

<style scoped>
.login-form {
    width: 100%;
    display: flex;
    flex-direction: column;

}
</style>
