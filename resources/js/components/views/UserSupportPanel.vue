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
                            :class="{borderRed: isFullNameInValid}"
                            v-model="fullName"
                            placeholder="напр., Иванов Иван Иванович"
                            ref="focusMe"
                            @input="isFullNameInValid = false"
                            required
                        >
                        <div
                            class="invalid-feedback"
                            :class="{show: isFullNameInValid}"
                        >
                            {{ fullNameError }}
                        </div>
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
                            v-model="userId"
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
                            v-model="email"
                            placeholder="loremipsum@mail.ru"
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
                            placeholder="введите сообщение здесь"
                        >

                        </textarea>
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
export default {
    name: "UserSupportPanel",
    data() {
        return {
            fullName: '',
            isFullNameInValid: false,
            fullNameError: 'Поле обязательное к заполнению',

            userId: '',
            phone: '+7',
            email: '',
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
        sendEmail() {
            console.log('sendEmail')
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
