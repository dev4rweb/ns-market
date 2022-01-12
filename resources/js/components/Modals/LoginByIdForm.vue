<template>
    <form
        @submit.prevent="loginById"
        class="needs-validation login-form "
        novalidate
    >
        <h4 class="text-center">Вход и регистрация</h4>
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
                {{ error }}}
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
    name: "LoginByIdForm",
    data() {
        return {
            isUserIdInValid: false,
            userId: '',
            error: 'Некорректный номер ID',
        }
    },
    methods: {
        ...mapActions(['getUserByPhoneOrUserId']),
        loginById() {
            if (this.userId.length < 3 || this.userId.length > 11) {
                this.isUserIdInValid = true
                return
            }
            console.log('loginByIdForm');

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
