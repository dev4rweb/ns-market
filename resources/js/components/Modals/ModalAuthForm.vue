<template>
    <div
        class="modal fade"
        id="loginModal"
        tabindex="-1"
        ref="authModal"
        aria-labelledby="loginModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-login">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="modal-wrapper">
                        <img :src="logo" alt="logo">
                        <div>
                            <Loader v-if="isLoading"/>
                            <LoginWithPhone
                                v-if="loginWithPhoneVisible"
                            />
                            <WelcomePasswordForm
                                v-if="welcomePasswordFormVisible"
                            />
                            <RegisterLoginForm
                                v-if="registerLoginFormVisible"
                            />
                            <LoginByIdForm
                                v-if="loginByIdFormVisible"
                            />
                            <RegisterForm
                                v-if="registerFormVisible"
                            />
                            <ConfirmPhoneFrom
                                v-if="confirmPhoneFromVisible"
                            />
                            <NotUniquePhoneForm
                                v-if="notUniquePhoneFormVisible"
                            />
                            <MentorPhoneForm
                                v-if="getIsShowMentorForm"
                            />
                        </div>
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
import {mapGetters, mapMutations} from 'vuex'
import Loader from "../UI/Loader";
import LoginWithPhone from "./LoginWithPhone";
import RegisterLoginForm from "./RegisterLoginForm";
import RegisterForm from "./RegisterForm";
import LoginByIdForm from "./LoginByIdForm";
import MentorPhoneForm from "./MentorPhoneForm";
import WelcomePasswordForm from "./WelcomePasswordForm";
import ConfirmPhoneFrom from "./ConfirmPhoneFrom";
import NotUniquePhoneForm from "./NotUniquePhoneForm";
import logo from '../../../assets/img/logo-market.svg'
import appStore from '../../../assets/img/ic-app-store.svg'
import googlePlay from '../../../assets/img/ic-google-play.svg'

export default {
    name: "ModalAuthForm",
    data() {
        return {
            logo,
            appStore,
            googlePlay,
            isShowRegisterLoginForm: false,
            isShowRegisterForm: false,
            isShowMentorPhoneForm: false,
            isShowLoginByIdForm: false,
            isShowWelcomePasswordForm: false,
            isShowConfirmPhoneForm: false,
            isShowNotUniquePhoneForm: false,
            isNeedToConfirmPhone: false,
            users: [],
            user: null,
            phoneInput: '+380682168881'
        }
    },
    computed: {
        ...mapGetters([
            'isLoading', 'loginWithPhoneVisible', 'registerLoginFormVisible',
            'welcomePasswordFormVisible', 'notUniquePhoneFormVisible',
            'registerFormVisible', 'loginByIdFormVisible', 'confirmPhoneFromVisible',
            'getIsShowMentorForm'
        ])
    },
    methods: {
        ...mapMutations([
            'setShowLoginWithPhone', 'setShowWelcomePasswordForm', "setShowRegisterLoginForm",
            'setIsShowNotUniquePhoneForm', 'setIsShowRegisterForm', 'setIsShowLoginByIdForm',
            'setIsConfirmPhoneFrom'
        ]),
        modalListener() {
            console.log('Auth Modal closed')
            this.setShowLoginWithPhone(true)
            this.setShowWelcomePasswordForm(false)
            this.setShowRegisterLoginForm(false)
            this.setIsShowNotUniquePhoneForm(false)
            this.setIsShowRegisterForm(false)
            this.setIsShowLoginByIdForm(false)
            this.setIsConfirmPhoneFrom(false)
        }
    },
    components: {
        Loader,
        LoginWithPhone,
        RegisterLoginForm,
        RegisterForm,
        LoginByIdForm,
        MentorPhoneForm,
        WelcomePasswordForm,
        ConfirmPhoneFrom,
        NotUniquePhoneForm
    },
    mounted() {
        setTimeout(() => {
            $(this.$refs.authModal).on('hidden.bs.modal', this.modalListener)
        }, 500);
    }
}
</script>

<style scoped>

</style>
