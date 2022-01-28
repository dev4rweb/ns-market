<template>
    <div class="card data-card become-partner mb-5">
        <h3>Пригласить в New Star market</h3>
        <p>Введите номер телефона Вашего знакомого,
            которого Вы хотите пригласить в New Starmarket</p>
        <form
            class="row"
            @submit="generateLink"
            novalidate
        >
            <div class="col-md-6">
                <div class="form-group form-group-blue">
                    <label>
                        Номер телефона
                    </label>
                    <input
                        type="tel"
                        class="form-control form-control-lg"
                        :class="{borderRed: isInviterPhoneInValid}"
                        v-model="inviterPhone"
                        ref="focusMe"
                        @input="isInviterPhoneInValid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isInviterPhoneInValid}"
                    >
                        {{ inviterPhoneError }}
                    </div>
                </div>
            </div>


            <div class="col-md-6 align-self-end">
                <button
                    type="submit"
                    class="btn btn-lg btn-info mb-3 w-100"
                >
                    Продолжить
                </button>
            </div>
        </form>

        <div class="row">
            <div class="d-flex w-100 align-items-center">
                <p class="mb-0 me-5">
                    Отправить автоматическое сообщение:
                </p>
                <Tooltip/>
            </div>
        </div>
        <div v-if="isShowBlock">
            <div class="row">
                <div class="form-group form-group-blue">
                    <label>
                    </label>
                    <div
                        class="form-control form-control-lg textarea"
                    >
                        <p>Иван Иванов приглашает Вас В New Star market</p>
                        <p>Перейдите по ссылке, чтобы попасть на сайт
                            <br>
                            <a href="#">https://newstar.ru/reg123456_92012345</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-md-6">
                    <button
                        class="btn btn-lg w-100 btn-info"
                    >
                        Отправить
                    </button>
                </div>
                <div class="col-md-6">
                    <button
                        class="btn btn-lg w-100 btn-outline-info"
                    >
                        Скопировать ссылку
                    </button>
                </div>
            </div>
            <div class="d-flex justify-content-center position-relative">
                <button
                    class="btn btn-lg btn-info"
                    style="margin-bottom: -50px;"
                >
                    Новое приглашение
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Tooltip from "../UI/Tooltip";

export default {
    name: "UserInvitePage",
    data() {
        return {
            isShowBlock: true,
            inviterPhone: '+7',
            inviteText: '',
            isInviterPhoneInValid: false,
            inviterPhoneError: 'Некорректный номер телефона',
            tooltipText: 'Вы можете воспользоваться автоматическим сервисом для отправки SMS-сообщений или скопировать индивидуальную реферальную ссылку для отправки удобным для Вас способом.'
        }
    },
    methods: {
        generateLink() {
            console.log('generateLink')
        }
    },
    components: {
        Tooltip
    }, mounted() {
        setTimeout(() => {
            // console.log('mounted Mentor Change Phone')
            this.$refs.focusMe.focus();
        }, 500);
    }
}
</script>

<style lang="scss" scoped>
.become-partner {
    width: 100%;
    max-width: 845px;
}

a {
    color: #038ED7;
}

.show {
    display: block;
}

.borderRed {
    border-color: red;
}

.textarea {
    min-height: 176px;
}
</style>
