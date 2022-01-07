<template>
    <form
        @submit.prevent="showLoginById"
        class="needs-validation login-form "
        novalidate
    >
        <h4 class="text-center">Вход и регистрация</h4>
        <p
            class="description"
        >
            Введён не уникальный номер телефона
            Авторизуйтесь с помощью Вашего ID.
        </p>
        <div class="form-group form-group-blue">
            <label>
                Ваш номер ID
            </label>
            <input
                type="text"
                class="form-control form-control-lg"
                :class="{borderRed: isUserIdInValid}"
                v-model="userId"
                ref="focusMe"
                @input="isUserIdInValid = false"
                required
            >
            <div
                class="invalid-feedback"
                :class="{show: isUserIdInValid}"
            >
                Некорректный номер ID
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
import {mapActions} from 'vuex'

export default {
    name: "NotUniquePhoneForm",
    data() {
        return {
            isUserIdInValid: false,
            userId: ''
        }
    },
    methods: {
        ...mapActions(['getUserByPhoneOrUserId']),
        showLoginById() {
            console.log('showLoginById')
            if (
                !this.userId.trim()
                ||
                this.userId.length < 3
                ||
                this.userId.length > 8
            ) {
                this.isUserIdInValid = true
                return
            }
            this.getUserByPhoneOrUserId(this.userId)
        }
    },
    mounted() {
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
