<template>
    <form
        @submit.prevent="showLoginById"
        class="needs-validation login-form "
        novalidate
    >
        <p
            class="description"
        >
            Введён не уникальный номер телефона
            Авторизуйтесь с помощью Вашего ID.
        </p>
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
export default {
    name: "NotUniquePhoneForm",
    methods: {
        showLoginById() {
            console.log('showLoginById')
            this.$emit('notUniquePhone')
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

.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>
