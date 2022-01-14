<template>
    <div class="user-content mentor-panel mb-5">
        <div
            class="card data-card"
            v-if="getPhysicalPerson"
        >
            <h3 class="mb-3">мой консультант</h3>
            <div
                class="container-fluid"
                v-if="getPhysicalPerson.mentor_user_id && getMentorUser"
            >
                <div class="mentor-avatar-block">
                    <img class="mentor-avatar" :src="mentorAvatar" alt="avatar">
                    <span class="mentor-full-name">
                        {{ getMentorUser.first_name }}
                        {{ getMentorUser.last_name }}
                    </span>
                </div>
                <h4 class="mt-4">Телефон</h4>
                <div class="mentor-phone-block d-flex align-items-center">
                    <img class="me-1" :src="icPhone" alt="icon">
                    <div class="content">
                        <span>Мобильный</span>
                        <p class="mb-0">+{{getMentorUser.mobile_phone}}</p>
                    </div>
                </div>
                <h4 class="mt-3">Электронная почта</h4>
                <div class="d-flex align-items-center">
                    <img class="me-1" :src="icEmail" alt="icon">
                    <p class="mb-0">{{getMentorUser.email}}</p>
                </div>
                <div class="mt-3" v-if="getMentorPhysicalPerson">
                    <span>День рождения</span>
                    <p>{{ getBirthday }}</p>
                </div>

                <div class="mt-3">
                    <span>Компьютерный номер (ID)</span>
                    <p>{{ getMentorUser.id }}</p>
                </div>
            </div>
            <h4 v-else>У Вас нет наставника</h4>
        </div>
        <h2 v-else>Ошибка связи с сервером</h2>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import mentorAvatar from '../../../assets/img/mentor-avatar.png'
import icPhone from '../../../assets/img/ic-phone.svg'
import icEmail from '../../../assets/img/ic-email.svg'

export default {
    name: "UserMentorPanel",
    data() {
        return {
            mentorAvatar,
            icPhone,
            icEmail,
            monthNames: ["января", "февраля", "марта", "апреля", "мая", "июня",
                "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        }
    },
    computed: {
        ...mapGetters(['getPhysicalPerson', 'getMentorUser', 'getMentorPhysicalPerson']),
        getBirthday() {
            let day = ''
            let month = ''
            let year = ''
            if (this.getMentorPhysicalPerson.birthday) {
                const date = new Date(this.getMentorPhysicalPerson.birthday)
                day = date.getDate()
                day = day < 10 ? '0' + day : day
                month = date.getMonth()
                month = this.monthNames[month]
                year = date.getFullYear()
            }
            return `${day} ${month} ${year}`
        }
    },
}
</script>

<style scoped>
h3 {
    text-transform: uppercase;
}
</style>
