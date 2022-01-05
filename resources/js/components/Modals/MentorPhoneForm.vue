<template>
    <form
        @submit.prevent="findMentorByPhone"
        class="needs-validation login-form "
        novalidate
    >
        <Loader v-if="loading"/>
        <p
            class="description"
        >
            В соответствии с правилами
            <a href="#">Партнёрской программы Компании</a>
            New Star, для осуществления покупок Вам необходимо
            указать номер телефона человека, который пригласил Вас в New Star Market.
        </p>
        <div class="form-group form-group-blue">
            <label>
                Номер телефона
            </label>
            <input
                type="tel"
                class="form-control form-control-lg"
                :class="{borderRed: isMentorPhoneInValid}"
                v-model="phoneMentor"
                @input="isMentorPhoneInValid = false"
                required
            >
            <div
                class="invalid-feedback"
                :class="{show: isMentorPhoneInValid}"
            >
                Некорректный номер телефона
            </div>
        </div>
        <button
            type="submit"
            class="btn btn-lg btn-info mb-3"
        >
            Продолжить
        </button>
        <button
            type="button"
            class="btn btn-lg btn-outline-info mb-3"
            @click="authUser"
        >
            Пропустить
        </button>
        <button
            type="button"
            class="btn btn-lg btn-link"
            @click="authUser"
        >
            Я не получал приглашения
        </button>
    </form>
</template>

<script>
import Loader from "../UI/Loader";
import {WORK_HOST} from "../api/admin/user";

export default {
    name: "MentorPhoneForm",
    data() {
        return {
            loading: false,
            isMentorPhoneInValid: false,
            phoneMentor: '+7',
        }
    },
    methods: {
        findMentorByPhone() {
            if (this.phoneMentor.length < 12 || this.phoneMentor.length > 13) {
                this.isMentorPhoneInValid = true;
                return
            }
            console.log('findMentorByPhone', this.phoneMentor.length)
            if (!this.isMentorPhoneInValid) {
                console.log('findMentorByPhone request')
                 this.loading = true
                 const fd = new FormData();
                 // if (this.phone.length > 8)
                     fd.set('phone', this.phoneMentor.slice(1, this.phoneMentor.length))

                 axios.post(`${WORK_HOST}market/get-user-phone`, fd)
                     .then(res => {
                         console.log('login', res)
                         if (res.data.success) {
                             this.$emit('getMentor', res.data.model)
                             this.authUser()
                         }
                     })
                     .catch(err => {
                         console.log('login err', err.response.data)
                         alert('Что-то пошло не так')
                     })
                     .finally(() => {
                         this.loading = false
                     });
            }
        },
        authUser() {
            console.log('authUser')
            this.$emit('authUser')
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
