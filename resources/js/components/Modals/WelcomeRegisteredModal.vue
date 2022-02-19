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
export default {
    name: "WelcomeRegisteredModal",
    methods: {
        toUserPage() {
            window.location.href = '/user-panel'
        }
    }
}
</script>

<style scoped>

</style>
