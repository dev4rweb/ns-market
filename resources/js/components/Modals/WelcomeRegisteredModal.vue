<template>
<div>
    <p class="mt-5 text-center">
        Регистрация
        успешно завершена.
    </p>
    <p class="text-center mb-3">
        Добро пожаловать в
        New Star Market!
    </p>
    <button
        class="btn btn-lg btn-info w-100"
        @click="toUserPage"
    >
        Личный кабинет
    </button>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: "WelcomeRegisteredModal",
    methods: {
        ...mapActions(['localLogin']),
        toUserPage() {
            const password = localStorage.getItem('password')
            if (password) {
                this.localLogin(password);
            }
            localStorage.removeItem('invite')
            localStorage.removeItem('user_id')
            localStorage.removeItem('phone_user')
            localStorage.removeItem('password')

        }
    }
}
</script>

<style scoped>

</style>
