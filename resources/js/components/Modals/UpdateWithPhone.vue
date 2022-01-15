<template>
    <div
        class="modal fade"
        id="updateWithPhone"
        tabindex="-1"
        ref="updateWithPhone"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="updateWithPhoneLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-login">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="d-flex justify-content-end">
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            @click="closeModal"
                        ></button>
                    </div>
                    <div class="modal-wrapper">
                        <img :src="logo" alt="logo">
                        <form
                            @submit.prevent="confirmSms"
                            class="needs-validation login-form "
                            novalidate
                        >
                            <h4 class="text-center">Подтверждение на изменение личных данных</h4>
                            <p
                                class="description"
                            >
                                На указанный номер телефона
                                 (<b>{{getCurrentUser.mobile_phone}}</b>)
                                отправлено СМС с кодом
                            </p>
                            <div
                                class="form-group form-group-blue"
                            >
                                <label>
                                    Введите код из SMS
                                </label>
                                <input
                                    type="text"
                                    class="form-control form-control-lg text-center"
                                    :class="{borderRed: isSmsInValid}"
                                    placeholder="_ _ _ _"
                                    ref="focusUpdateWithPhoneInput"
                                    @input="isSmsInValid = false"
                                    v-model="sms"
                                >
                                <div
                                    class="invalid-feedback"
                                    :class="{show: isSmsInValid}"
                                >
                                    Неверный sms
                                </div>
                            </div>
                            <button
                                type="submit"
                                class="btn btn-lg btn-outline-info w-100"
                            >
                                Подтвердить
                            </button>
                        </form>
                    </div>
                    <p style="text-align: center;">
                        Установите приложение New Star Market для быстрого доступа к каталогу на вашем мобильном
                        устройстве.
                    </p>
                    <div class="market-wrapper">
                        <a href="/"><img :src="appStore" alt="app-store"></a>
                        <a href="/"><img :src="googlePlay" alt="google-play"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import {WORK_HOST, LOCAL_HOST} from "../../store/routeConsts";
import logo from '../../../assets/img/logo-market.svg'
import appStore from '../../../assets/img/ic-app-store.svg'
import googlePlay from '../../../assets/img/ic-google-play.svg'
export default {
    name: "UpdateWithPhone",
    data() {
        return {
            logo,
            appStore,
            googlePlay,
            phone: '+7',
            sms: '',
            isSmsInValid: false,
            verificationCode: '',
        }
    },
    methods: {
        ...mapActions(['verificationBySms', 'updateUserData']),
        ...mapMutations(['setSecret', 'setLoading']),
        modalCloseListener() {
            console.log('modalCloseListener UpdateWithPhone')
        },
        modalOpenListener() {
            console.log('modalOpenListener UpdateWithPhone')
            this.$refs.focusUpdateWithPhoneInput.focus();
            if (WORK_HOST === LOCAL_HOST) {
                this.setLoading(true)
                this.setSecret(1111)
                setTimeout(() => {
                    this.setLoading(false)
                }, 2000);
            } else {
                this.verificationBySms();
            }
        },
        closeModal() {
            window.location.reload();
        },
        confirmSms() {
            if (this.sms.replace(/[^0-9]/g, '').length !== 4) {
                this.isSmsInValid = true
                return
            }
            if (this.getSecret && this.getSecret == this.sms.replace(/[^0-9]/g, '')) {
                console.log('confirmSms');
                this.updateUserData()
            } else {
                this.isSmsInValid = true
            }
        }
    },
    computed: {
        ...mapGetters(['getCurrentUser', 'getSecret'])
    },
    mounted() {
        setTimeout(() => {
            $(this.$refs.updateWithPhone).on('hidden.bs.modal', this.modalCloseListener)
            $(this.$refs.updateWithPhone).on('shown.bs.modal', this.modalOpenListener)
        }, 500)
        this.phone = `+${this.getCurrentUser.mobile_phone}`
    }
}
</script>

<style scoped>

.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>
