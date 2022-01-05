<template>
    <form
        @submit.prevent="showLoginById"
        class="needs-validation login-form "
        novalidate
    >
        <Loader v-if="loading"/>
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
import Loader from "../UI/Loader";
import {WORK_HOST} from "../api/admin/user";

export default {
    name: "NotUniquePhoneForm",
    data() {
        return {
            loading: false,
            isUserIdInValid: false,
            userId: ''
        }
    },
    methods: {
        showLoginById() {
            console.log('showLoginById')
            const fd = new FormData()
            fd.set('user_id', this.userId)
            axios.post(`${WORK_HOST}market/get-user-phone`, fd)
                .then(res => {
                    console.log('login', res)
                    if (res.data.success) {
                        this.$emit('notUniquePhone',
                            res.data.model
                        )
                    } else
                        this.isUserIdInValid = true
                })
                .catch(err => {
                    console.log('login err', err.response.data)
                })
                .finally(() => {
                    this.loading = false
                });
        }
    },
    components: {
        Loader,
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
