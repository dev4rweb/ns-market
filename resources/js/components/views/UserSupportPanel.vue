<template>
    <div class="card data-card become-partner mb-5">
        <h3>техническая поддержка</h3>
        <p>
            Если у Вас возникли трудности во время использования сайта, заполните перечисленныениже поля и опишите
            проблему, с которой Вы столкнулись. Наши специалисты проверят заявку и при необходимости свяжутся с Вами.
        </p>
        <form
            @submit.prevent="sendEmail"
            novalidate
            v-if="getCurrentUser"
        >
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group form-group-blue">
                        <label>
                            ФИО <span style="color: red">*</span>
                        </label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model="fullName"
                            disabled
                        >
                    </div>
                </div>


                <div class="col-md-6">
                    <div class="form-group form-group-blue">
                        <label>
                            Компьютерный номер (ID)
                        </label>
                        <input
                            type="text"
                            placeholder="12345"
                            class="form-control form-control-lg"
                            v-model="getCurrentUser.id"
                            disabled
                        >
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group form-group-blue">
                        <label>
                            Мобильный телефон <span style="color: red">*</span>
                        </label>
                        <input
                            type="tel"
                            class="form-control form-control-lg"
                            v-model="phone"
                            disabled
                        >
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group form-group-blue">
                        <label>
                            Эл. почта <span style="color: red">*</span>
                        </label>
                        <input
                            type="email"
                            class="form-control form-control-lg"
                            v-model="getCurrentUser.email"
                            disabled
                        >
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group form-group-blue">
                        <label>
                            Текст <span style="color: red">*</span>
                        </label>
                        <textarea
                            class="form-control form-control-lg"
                            v-model="message"
                            :class="{borderRed: isMessageInValid}"
                            @input="isMessageInValid = false"
                            ref="focusMe"
                            placeholder="введите сообщение здесь"
                            required
                        >

                        </textarea>
                        <div
                            class="invalid-feedback"
                            :class="{show: isMessageInValid}"
                        >
                            {{ messageError }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center position-relative">
                <button
                    type="submit"
                    class="btn btn-lg btn-info"
                    style="margin-bottom: -50px; width: 250px"
                >
                    Отправить
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "UserSupportPanel",
    data() {
        return {
            isMessageInValid: false,
            messageError: 'Поле обязательное к заполнению',
            message: ''
        }
    },
    mounted() {
        setTimeout(() => {
            // console.log('mounted Mentor Change Phone')
            this.$refs.focusMe.focus();
        }, 500);
    },
    methods: {
        ...mapActions(['sendFeedbackSupport']),
        sendEmail() {
            if (!this.message.trim()) {
                this.isMessageInValid = true
                return
            }
            console.log('sendEmail');
            this.sendFeedbackSupport(this.message)
        }
    },
    computed: {
        ...mapGetters(['getCurrentUser']),
        fullName() {
            if (this.getCurrentUser)
                return `${this.getCurrentUser.last_name} ${this.getCurrentUser.first_name} ${this.getCurrentUser.middle_name}`
            else return ''
        },
        phone() {
            if (this.getCurrentUser) {
                return `+${this.getCurrentUser.mobile_phone}`;
            } else {
                return '+7'
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.show {
    display: block;
}

.borderRed {
    border-color: red;
}

textarea {
    resize: none;
    min-height: 105px;
}
</style>
