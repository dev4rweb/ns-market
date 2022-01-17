<template>
    <form
        @submit.prevent="findMentorByPhone"
        class="mentor-change-phone-form"
        novalidate
    >
        <h4 class="text-center mb-3">Смена наставника</h4>
        <p class="description">
            Введите номер телефона действующего Партнёра New Star, которого Вы хотите выбрать в качестве наставника.
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
                {{ phoneMentorError }}
            </div>
        </div>
        <button
            type="submit"
            class="btn btn-lg btn-info mb-3 w-100"
        >
            Продолжить
        </button>
        <a
            href="/user-mentor-panel"
            class="btn btn-lg btn-secondary mb-3 w-100"
        >
            Отмена
        </a>
    </form>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "MentorChangePhoneForm",
    data() {
        return {
            isMentorPhoneInValid: false,
            phoneMentor: '',
            phoneMentorError: 'Некорректный номер телефона'
        }
    },
    methods: {
        ...mapActions(['findChangingMentorByPhone']),
        findMentorByPhone() {
            let phone = this.phoneMentor.replace(/[^0-9]/g, '')
            if (phone.length < 11 || phone.length > 14) {
                this.phoneMentorError = 'Некорректный номер телефона'
                this.isMentorPhoneInValid = true;
                return
            }
            if (this.getCurrentUser.mobile_phone === phone) {
                this.phoneMentorError = 'Ай яй яй)'
                this.isMentorPhoneInValid = true;
                return;
            }
            this.findChangingMentorByPhone(phone)
            console.log('findMentorByPhone', phone);
        }
    },
    computed: {
        ...mapGetters(['getCurrentUser'])
    },
    mounted() {
        setTimeout(() => {
            // console.log('mounted Mentor Change Phone')
            this.$refs.focusMe.focus();
        }, 500);
    }
}
</script>

<style scoped>
.mentor-change-phone-form {
    max-width: 300px;
}

.description {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #2B2A28;
}

.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>
