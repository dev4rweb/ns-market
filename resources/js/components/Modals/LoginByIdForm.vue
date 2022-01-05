<template>
    <form
        @submit.prevent="loginById"
        class="needs-validation login-form "
        novalidate
    >
        <Loader v-if="loading"/>
        <div class="form-group form-group-blue">
            <label>
                Ваш номер ID
            </label>
            <input
                type="text"
                class="form-control form-control-lg"
                :class="{borderRed: isUserIdInValid}"
                v-model="userId"
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
    name: "LoginByIdForm",
    data(){
        return {
            loading: false,
            isUserIdInValid: false,
            userId: ''
        }
    },
    methods: {
        loginById() {
            if (this.userId.length < 3 || this.userId.length > 8) {
                this.isUserIdInValid = true
                return
            }
            console.log('loginByIdForm');

            const fd = new FormData()
            fd.set('user_id', this.userId)
            axios.post(`${WORK_HOST}market/get-user-phone`, fd)
                .then(res => {
                    console.log('login', res)
                    if (res.data.success) {
                        this.$emit('loginById',
                            res.data.model
                        )
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
    components: {
        Loader
    },
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
