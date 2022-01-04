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
            class="btn btn-lg btn-primary mb-3"
        >
            Продолжить
        </button>
        <button
            type="button"
            class="btn btn-lg btn-outline-info mb-3"
        >
            Пропустить
        </button>
        <button
            type="button"
            class="btn btn-lg btn-link"
            data-dismiss="modal"
        >
            Я не получал приглашения
        </button>
    </form>
</template>

<script>
import Loader from "../UI/Loader";
export default {
    name: "MentorPhoneForm",
    data() {
        return {
            loading: false,
            isPhoneInValid: false,
            phone: '+7',
        }
    },
    methods: {
        findMentorByPhone() {

            if (this.phone.length < 12 && this.phone.length > 13) {
                this.isPhoneInValid = true;
                return
            }
            console.log('findMentorByPhone', this.phone.length)
            const testHost = 'http://solvik.dev4rweb.com/api/users'
            const localHost = 'http://127.0.0.1:8001/api/'
            const productionHost = 'https://admin.newstarmlm.biz/api/'
            const stagingHost = 'http://staging-admin.newstarmlm.biz/api/'
            const testProducts = 'http://staging-admin.newstarmlm.biz/api/customer-order/products'
            const testComments = 'http://staging-admin.newstarmlm.biz/api/customer-order/collector'

            if (!this.isPhoneInValid) {
                console.log('findMentorByPhone request')
                this.loading = true
                const fd = new FormData();
                // if (this.phone.length > 8)
                    fd.set('phone', this.phone.slice(1, this.phone.length))
                axios.post(`${localHost}market/get-user-phone`, fd)
                    .then(res => {
                        console.log('login', res)
                        if (res.data.success) {
                            this.$emit('getMentor', res.data.model)
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
