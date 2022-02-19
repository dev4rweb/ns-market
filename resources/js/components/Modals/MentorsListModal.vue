<template>
    <div>
        <h3 class="mt-3 text-center">Вход и регистрация</h3>
        <hr class="w-100 mt-3 mb-3"/>
        <div
            v-if="getMentorsInvite.length && !getCurrentMentorInvite"
            v-for="mentor in getMentorsInvite"
            :key="mentor.id"
            class="inviterCard mb-3"
            @click="setCurrentMentorInvite(mentor)"
        >
            <p>Вас пригласил:</p>
            <div class="d-flex align-items-center w-100">
                <img
                    class="me-3"
                    :src="getInviteAva(mentor.physical.avatar_image)"
                    alt="avatar">
                <div>
                    <h4 class="mb-3 mt-0">{{ mentor.first_name }} {{ mentor.last_name }}</h4>
                    <span>+{{mentor.mobile_phone}}</span>
                </div>
            </div>
        </div>

        <div v-if="getCurrentMentorInvite">
            <p>Вас пригласил:</p>
            <div class="d-flex align-items-center w-100">
                <img
                    class="me-3"
                    :src="getInviteAva(getCurrentMentorInvite.physical.avatar_image)"
                    alt="avatar">
                <div>
                    <h4 class="mb-3 mt-0">{{ getCurrentMentorInvite.first_name }} {{ getCurrentMentorInvite.last_name }}</h4>
                    <span>+{{getCurrentMentorInvite.mobile_phone}}</span>
                </div>
            </div>
            <div class="w-100 mt-3 mb-4 d-flex">
                <button
                    class="btn btn-outline-info w-50 me-3"
                    @click="confirmSelectedMentor"
                >
                    Да
                </button>
                <button
                    class="btn btn-outline-info w-50"
                    @click="setCurrentMentorInvite(null)"
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

        <button
            v-if="getMentorsInvite.length && !getCurrentMentorInvite"
            class="btn btn-lg btn-info w-100 mt-3"
            style="text-transform: uppercase;"
            @click="noOneSelected"
        >
            человека нету в списке
        </button>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {WORK_HOST} from "../../store/routeConsts";
export default {
    name: "MentorsListModal",
    methods: {
        ...mapMutations(['showMentorListModal', 'setShowMentorPhoneForm',
        'setCurrentMentorInvite']),
        ...mapActions(['registerUserWithInviter']),
        getInviteAva(imgPath) {
            let HOST = WORK_HOST.replace('/api', '')
            return `${HOST}${imgPath.replaceAll(/\\/g, "")}`
        },
        confirmSelectedMentor() {
            console.log('confirmSelectedMentor', this.getCurrentMentorInvite)
            this.registerUserWithInviter()
        },
        noOneSelected() {
            console.log('noOneSelected', this.getCurrentMentorInvite)
            this.showMentorListModal(false)
            this.setShowMentorPhoneForm(true)
        }
    },
    computed: {
        ...mapGetters(['getMentorsInvite', 'getCurrentMentorInvite'])
    }
}
</script>

<style lang="scss" scoped>
.inviterCard{
    min-width: 330px;
    padding: 8px;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 0%);

    &:hover{
        cursor: pointer;
        box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
        -webkit-transform: scale(1.1, 1.1);
        -moz-transform: scale(1.1, 1.1);
        -ms-transform: scale(1.1, 1.1);
        -o-transform: scale(1.1, 1.1);
        transform: scale(1.1, 1.1);
    }
}
hr{
    width: 100%;
    height: 2px;
    background-color: #038ED7;
}
p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
}

h4{
    font-style: normal;
    font-weight: 600;
    font-size: 23px;
    line-height: 22px;
}
img{
    width: 65px;
    height: 65px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}
span{
    font-style: italic;
    font-weight: normal;
    font-size: 22px;
    line-height: 20px;
    color: #038ED7;
}

.btn-outline-info {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
}
</style>
