<template>
    <form
        @submit.prevent="findMentorByPhone"
        class="needs-validation login-form "
        novalidate
    >
        <!--        <Loader v-if="loading"/>-->
        <h4 class="text-center">Вход и регистрация</h4>
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
                ref="focusMe"
                @input="isMentorPhoneInValid = false"
                required
            >
            <div
                class="invalid-feedback"
                :class="{show: isMentorPhoneInValid}"
            >
                {{ phoneErrorMessage }}
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
            class="btn btn-lg btn-link"
            data-dismiss="modal"
            @click="removeLSInviter"
        >
            Я не получал приглашения
        </button>
    </form>
</template>

<script>
import Loader from "../UI/Loader";
import {WORK_HOST} from "../../store/routeConsts";
import {mapMutations, mapActions} from 'vuex'

export default {
    name: "MentorPhoneForm",
    data() {
        return {
            loading: false,
            isMentorPhoneInValid: false,
            phoneMentor: '+7',
            phoneErrorMessage: ''
        }
    },
    methods: {
        ...mapMutations(['showMentorListModal', 'setShowMentorPhoneForm',
            'removeOrSetOneMentorsInvite']),
        ...mapActions(['getMentorAsPhysicalPerson']),
        findMentorByPhone() {
            if (this.phoneMentor.length < 12 || this.phoneMentor.length > 13) {
                this.phoneErrorMessage = 'Некорректный номер телефона'
                this.isMentorPhoneInValid = true;
                return
            }
            console.log('findMentorByPhone', this.phoneMentor.length)
            if (!this.isMentorPhoneInValid) {
                console.log('findMentorByPhone request')
                this.loading = true
                const fd = new FormData();
                // if (this.phone.length > 8)
                fd.set('phone', this.phoneMentor.replace(/[^0-9]/g, ''))

                axios.post(`${WORK_HOST}market/get-user-phone`, fd)
                    .then(res => {
                        console.log('login', res)
                        if (res.data.success && res.data.model.length) {
                            console.log('findMentorByPhone ', res.data.model)
                            const mentors = res.data.model
                            this.removeOrSetOneMentorsInvite([])
                            mentors.forEach(i => this.getMentorAsPhysicalPerson(i))
                            this.setShowMentorPhoneForm(false)
                            this.showMentorListModal(true)
                        } else {
                            console.log('findMentorByPhone not found')
                            this.isMentorPhoneInValid = true
                            this.phoneErrorMessage = 'Мы не нашли человека с таким номером телефона в нашей базе. Проверьте правильность введённых данных и повторите попытку.'
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
        removeLSInviter() {
            console.log('removeLSInviter')
            localStorage.removeItem('invite')
        }
    },
    components: {
        Loader
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
