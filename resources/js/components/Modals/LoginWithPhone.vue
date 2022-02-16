<template>
    <form
        @submit.prevent="getUser"
        class="needs-validation login-form "
        novalidate
    >
        <h4 class="text-center">Вход и регистрация</h4>
        <p class="description">Войдите или зарегистрируйтесь, чтобы использовать все возможности New Star Market.</p>
        <div class="form-group form-group-blue">
            <label>
                Ваш номер телефона
                <span
                    v-if="inviter_id"
                >
                    {{ inviter_id }}
                </span>
            </label>
            <input
                type="tel"
                class="form-control form-control-lg"
                :class="{borderRed: isPhoneInValid}"
                v-model="phone"
                id="loginFormInput"
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
import {mapActions} from 'vuex'

export default {
    name: "LoginWithPhone",
    data() {
        return {
            phone: '+7',
            isPhoneInValid: false,
            inviter_id: null
        }
    },
    methods: {
        ...mapActions(['getUserByPhoneOrUserId']),
        getUser() {
            if (this.phone.length < 12 || this.phone.length > 13) {
                this.isPhoneInValid = true;
                return
            }
            if (!this.isPhoneInValid) {
                this.getUserByPhoneOrUserId(this.phone)
            }
        },
        hasInviter() {
            setTimeout(() => {
                const data = localStorage.getItem('invite')
                console.log('hasInviter', data)
                if (data) {
                    const mobile = data.split(',');
                    console.log('hasInviter', mobile)
                    if (mobile[1]) {
                        this.phone = `+${mobile[1]}`
                        this.inviter_id = mobile[0]
                    }
                    localStorage.removeItem('invite')
                }
            }, 1000);
        }
    },
    mounted() {
        this.hasInviter()
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
