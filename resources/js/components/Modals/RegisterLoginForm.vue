<template>
    <div
        class="login-form"
    >
        <p
            class="description"
        >
            Введённый номер  телефона
            <b>{{phone}}</b>
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
            У меня уже есть акаунт
        </button>
    </div>
</template>

<script>
export default {
    name: "RegisterLoginForm",
    props: ['phone'],
    methods: {
        wantRegister() {
            console.log('wantRegister')
            this.$emit('switchAuth', 1)
        },
        wantLoginById() {
            console.log('wantLoginById')
            this.$emit('switchAuth', 0)
        }
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
