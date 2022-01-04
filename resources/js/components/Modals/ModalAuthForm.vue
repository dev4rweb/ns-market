<template>
    <div>
        <LoginWithPhone
            v-if="isShowLoginWithPhone"
            @getUser="getUser"
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
        />
        <LoginByIdForm
            v-if="isShowLoginByIdForm"
        />
    </div>
</template>

<script>
import LoginWithPhone from "./LoginWithPhone";
import RegisterLoginForm from "./RegisterLoginForm";
import RegisterForm from "./RegisterForm";
import LoginByIdForm from "./LoginByIdForm";
import MentorPhoneForm from "./MentorPhoneForm";
export default {
    name: "ModalAuthForm",
    data() {
        return {
            isShowLoginWithPhone: false,
            isShowRegisterLoginForm: false,
            isShowRegisterForm: true,
            isShowMentorPhoneForm: false,
            isShowLoginByIdForm: false,
            user: null,
            phoneInput: '+380682168881'
        }
    },
    methods: {
        getUser(data) {
            const [user, phone] = data
            this.user = user
            this.phoneInput = phone
            this.isShowLoginWithPhone = false
            if (!user.length) {
                console.log('register or login by Id')
                this.isShowRegisterLoginForm = true
            }
            if (user.length === 1) {
                console.log('login with phone')
            }
            if (user.length > 1) {
                console.log('login by Id')
            }
            // console.log('getUser', user);
            // console.log('getUser', phone)
        },
        switchAuth(isRegister) {
            if (isRegister) {
                console.log('Show Register Form');
            } else {
                console.log('show login by Id Form')
            }
        },
        registerUser(newUser) {
            console.log('registerUser', newUser)
        }
    },
    components: {
        LoginWithPhone,
        RegisterLoginForm,
        RegisterForm,
        LoginByIdForm,
        MentorPhoneForm
    }
}
</script>

<style scoped>

</style>
