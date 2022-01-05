<template>
    <div>
        <LoginWithPhone
            v-if="isShowLoginWithPhone"
            @getUser="getUser"
        />
        <WelcomePasswordForm
            v-if="isShowWelcomePasswordForm"
            :user="user"
            :is-need-to-confirm-form="isNeedToConfirmPhone"
            @showLoginWithPhone="showLoginWithPhone"
            @needConfirmPhone="needConfirmPhone"
        />
        <RegisterLoginForm
            v-if="isShowRegisterLoginForm"
            :phone="phoneInput"
            @switchAuth="switchAuth"
        />
        <RegisterForm
            v-if="isShowRegisterForm"
            :phone-number="phoneInput"
            @registeredUser="registerUser"
        />
        <MentorPhoneForm
            v-if="isShowMentorPhoneForm"
            @getMentor="getMentor"
            @authUser="localAuth"
        />
        <LoginByIdForm
            v-if="isShowLoginByIdForm"
            @loginById="loginById"
        />
        <ConfirmPhoneFrom
            v-if="isShowConfirmPhoneForm"
            :user="user"
            :users="users"
            @phoneConfirmed="phoneConfirmed"
        />
        <NotUniquePhoneForm
            v-if="isShowNotUniquePhoneForm"
            @notUniquePhone="notUniquePhone"
        />
    </div>
</template>

<script>
import LoginWithPhone from "./LoginWithPhone";
import RegisterLoginForm from "./RegisterLoginForm";
import RegisterForm from "./RegisterForm";
import LoginByIdForm from "./LoginByIdForm";
import MentorPhoneForm from "./MentorPhoneForm";
import WelcomePasswordForm from "./WelcomePasswordForm";
import ConfirmPhoneFrom from "./ConfirmPhoneFrom";
import NotUniquePhoneForm from "./NotUniquePhoneForm";

export default {
    name: "ModalAuthForm",
    data() {
        return {
            isShowLoginWithPhone: true,
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
    methods: {
        phoneConfirmed(updatedUser) {
            console.log('phoneConfirmed', updatedUser)
            this.user = updatedUser
            this.isShowConfirmPhoneForm = false
            this.isShowWelcomePasswordForm = true
        },
        getUser(data) {
            const [users, phone] = data
            this.users = users
            this.phoneInput = phone
            this.isShowLoginWithPhone = false
            if (!users.length) {
                console.log('register or login by Id')
                this.isShowRegisterLoginForm = true
            }
            if (users.length === 1) {
                console.log('login with phone')
                this.user = users[0]
                this.isShowWelcomePasswordForm = true
            }
            if (users.length > 1) {
                console.log('login by Id')
                this.isShowNotUniquePhoneForm = true
                this.isNeedToConfirmPhone = true
            }
            // console.log('getUser', user);
            // console.log('getUser', phone)
        },
        switchAuth(isRegister) {
            this.isShowRegisterLoginForm = false
            if (isRegister) {
                console.log('Show Register Form');
                this.isShowRegisterForm = true
            } else {
                console.log('show login by Id Form')
                this.isShowLoginByIdForm = true
            }
        },
        registerUser(newUser) {
            console.log('registerUser', newUser)
        },
        getMentor(userMentor) {
            console.log('getMentor', userMentor)
        },
        localAuth() {
            console.log('local Auth')
        },
        showLoginWithPhone() {
            this.isShowWelcomePasswordForm = false
            this.isShowLoginWithPhone = true
        },
        loginById(user) {
            console.log('loginById user', user)
            this.user = user
            this.isShowLoginByIdForm = false;
        },
        notUniquePhone(user) {
            console.log('notUniquePhone user', user)
            console.log('notUniquePhone users', this.users)
            this.isNeedToConfirmPhone = true
            this.user = user
            this.isShowNotUniquePhoneForm = false
            this.isShowWelcomePasswordForm= true
        },
        needConfirmPhone() {
            this.isShowWelcomePasswordForm= false
            this.isShowConfirmPhoneForm = true
            this.isNeedToConfirmPhone = false
        }
    },
    components: {
        LoginWithPhone,
        RegisterLoginForm,
        RegisterForm,
        LoginByIdForm,
        MentorPhoneForm,
        WelcomePasswordForm,
        ConfirmPhoneFrom,
        NotUniquePhoneForm
    }
}
</script>

<style scoped>

</style>
