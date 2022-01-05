<template>
    <form
        @submit.prevent="getUser"
        class="needs-validation login-form "
        novalidate
    >
        <Loader v-if="loading"/>
        <div class="form-group form-group-blue">
            <label>
                Ваш номер телефона
            </label>
            <input
                type="tel"
                class="form-control form-control-lg"
                :class="{borderRed: isPhoneInValid}"
                v-model="phone"
                @input="isPhoneInValid = false"
                required
            >
            <div
                class="invalid-feedback"
                :class="{show: isPhoneInValid}"
            >
                Некорректный номер телефона
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
    name: "LoginWithPhone",
    data() {
        return {
            loading: false,
            phone: '+7',
            isPhoneInValid: false,
        }
    },
    methods: {
        getUser() {

            if (this.phone.length < 12 || this.phone.length > 13) {
                this.isPhoneInValid = true;
                return
            }
            if (!this.isPhoneInValid) {
                this.loading = true
                const fd = new FormData();
                if (this.phone.length > 8)
                    fd.set('phone', this.phone.slice(1, this.phone.length))
                axios.post(`${WORK_HOST}market/get-user-phone`, fd)
                    .then(res => {
                        console.log('login', res)
                        if (res.data.success) {
                            this.$emit('getUser', [
                                res.data.model, this.phone
                            ])
                        }
                    })
                    .catch(err => {
                        console.log('login err', err.response.data)
                    })
                    .finally(() => {
                        this.loading = false
                    });
            }
        }
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
