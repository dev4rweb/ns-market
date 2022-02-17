<template>
    <div class="card data-card become-partner mb-5">
        <h3>Пригласить в New Star market</h3>
        <p>Введите номер телефона Вашего знакомого,
            которого Вы хотите пригласить в New Starmarket</p>
        <form
            class="row"
            @submit.prevent="generateLink"
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
                    class="btn btn-lg btn-info mb-3"
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
                <div class="col-md-6 form-group form-group-blue">
                    <label>
                    </label>
                    <div
                        class="form-control form-control-lg textarea"
                    >
                        <p>
                            {{ getCurrentUser.first_name }}
                            {{ getCurrentUser.last_name }}
                            приглашает Вас В New Star market
                        </p>
                        <p>Перейдите по ссылке, чтобы попасть на сайт
                            <br>
                            <a :href="link">{{ link }}</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="row mb-5 mt-3">
                <div class="col-md-6 d-flex justify-content-between">
                    <button
                        class="btn btn-lg btn-success"
                        @click="sendSms"
                    >
                        Отправить СМС
                    </button>
                    <button
                        class="btn btn-lg btn-success"
                        @click="copyLink"
                    >
                        Скопировать ссылку
                    </button>
                </div>
            </div>
            <div class="d-flex justify-content-center position-relative">
                <button
                    class="btn btn-lg btn-info"
                    style="margin-bottom: -50px;"
                    @click="newInvite"
                >
                    Новое приглашение
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Tooltip from "../UI/Tooltip";
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {MARKET_DOMAIN, WORK_HOST} from "../../store/routeConsts";

export default {
    name: "UserInvitePage",
    data() {
        return {
            isShowBlock: false,
            inviterPhone: '+7',
            inviteText: '',
            link: '',
            isInviterPhoneInValid: false,
            inviterPhoneError: 'Некорректный номер телефона',
            tooltipText: 'Вы можете воспользоваться автоматическим сервисом для отправки SMS-сообщений или скопировать индивидуальную реферальную ссылку для отправки удобным для Вас способом.'
        }
    },
    methods: {
        ...mapMutations(['setLoading', 'setToastError']),
        ...mapActions(['sendFreeSms']),
        generateLink() {
            console.log('generateLink')
            if (this.getPhysicalPerson) {
                const mobilePhone = this.inviterPhone.replace(/[^0-9]/g, '');
                if (mobilePhone.length < 10 || mobilePhone.length > 13) {
                    this.isInviterPhoneInValid = true
                    return
                }
                this.setLoading(true)
                axios.post(`${WORK_HOST}market/invite-link`, {
                    mobile_phone: mobilePhone,
                    user_id: this.getPhysicalPerson.user_id
                }).then(res => {
                    console.log('generateLink res', res)
                    if (res.data.success) {
                        this.isShowBlock = true
                        this.link = MARKET_DOMAIN + 'invite/' + res.data.link
                    }
                }).catch(err => {
                    console.log('generateLink err ', err)
                }).finally(() => {
                    this.setLoading(false)
                });
            } else {
                console.log('getPhysicalPerson ', this.getPhysicalPerson)
                const mobilePhone = this.inviterPhone.replace(/[^0-9]/g, '');
            }
        },
        sendSms() {
            const mobilePhone = this.inviterPhone.replace(/[^0-9]/g, '');
            const message = `. \n ${this.getCurrentUser.first_name} ${this.getCurrentUser.last_name} \n приглашает Вас В New Star market \n Перейдите по ссылке, чтобы попасть на сайт \n \n ${this.link}`
            // const message = this.link
            const smsObj = {
                mobile_phone: mobilePhone,
                message
            }
            this.sendFreeSms(smsObj)
        },
        newInvite() {
            console.log('newInvite')
            this.isShowBlock = false
            this.link = ''
            this.inviterPhone = '+7'
        },
        copyLink() {
            console.log('copyLink')
            if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
                this.setToastError('Ссылка скопирована!')
                return navigator.clipboard.writeText(this.link);
            } else {
                this.setToastError('The Clipboard API is not available.')
                return Promise.reject('The Clipboard API is not available.');
            }
        }
    },
    computed: {
        ...mapGetters(['getPhysicalPerson', 'getCurrentUser'])
    },
    components: {
        Tooltip
    },
    mounted() {
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
    min-height: 220px;
}
</style>
