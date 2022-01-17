<template>
    <div class="mentor-phone-founded-form">
        <h4 class="text-center mb-3">Смена наставника</h4>
        <hr style="background-color: #038ED7; height: 2px">
        <p class="invite-text">Вас пригласил:</p>
        <div class="d-flex align-items-center mb-5">
            <img
                v-if="getTempMentorAvatar"
                class="me-2"
                style="-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;"
                :src="getTempMentorAvatar"
                alt="avatar"
            >
            <img
                v-else
                class="me-2"
                style="-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;"
                :src="getMentorAvatar"
                alt="avatar"
            >
            <div
                class="mentor-content"
                v-if="getTemporaryMentor"
            >
                <h3>{{getTemporaryMentor.full_name}}</h3>
                <p
                    class="mb-0"
                    style="color: #038ED7"
                >+{{getTemporaryMentor.mobile_phone}}</p>
            </div>
        </div>
        <div class="d-flex justify-content-between mb-4">
            <button
                class="btn btn-outline-success"
                @click="changeMentor"
            >
                Да
            </button>
            <button
                class="btn btn-outline-danger"
                @click="goBack"
            >
                Нет
            </button>
        </div>
        <p>
            Если Вы получили приглашение от этого человека, нажмите «Да».
        </p>
        <p>
            Если Вас пригласил другой человек, нажмите «Нет» и следуйте инструкции.
        </p>
    </div>
</template>

<script>
import mentorAvatar from '../../../../assets/img/mentor-avatar-two.png'
import {mapMutations, mapActions, mapGetters} from 'vuex'
export default {
    name: "MentorPhoneFoundedForm",
    data() {
        return {
            mentorAvatar
        }
    },
    methods: {
        ...mapActions(['changeMentor']),
        ...mapMutations(['setIsMentorChangePhoneForm', 'setIsMentorPhoneFounded']),
        goBack() {
            this.setIsMentorPhoneFounded(false)
            this.setIsMentorChangePhoneForm(true)
        }
    },
    computed: {
        ...mapGetters(['getTemporaryMentor', 'getTempMentorAvatar'])
    }
}
</script>

<style lang="scss" scoped>
.mentor-phone-founded-form {
    max-width: 300px;

    button{
        width: 146px;
        -webkit-border-radius: 13px;
        -moz-border-radius: 13px;
        border-radius: 13px;
    }

    h3{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 22px;
        color: #333333;
    }

    img{
        max-width: 68px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #333333;
    }

    .invite-text {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #2B2A28;
    }
}
</style>
