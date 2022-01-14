<template>
    <div class="row">
        <div class="card data-card">
            <div class="col-md-12">
                <div class="form-group form-group-data">
                    <label>ФИО</label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="fullName"
                        disabled
                    >
                </div>
            </div>
            <div class="col-md-12" v-if="getPhysicalPerson.gender === 'M'">
                <div class="form-group form-group-data">
                    <label>Пол <b style="color: red">*</b></label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        value="Мужчина"
                        disabled
                    >
                </div>
            </div>

            <div class="col-md-12" v-else>
                <div class="form-group form-group-data">
                    <label>Пол <b style="color: red">*</b></label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="getGender"
                        disabled
                    >
                </div>
            </div>

            <div class="col-md-12">
                <div class="form-group form-group-data">
                    <label>Дата рождения <b style="color: red">*</b></label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="birthday"
                        disabled
                    >
                </div>
            </div>

            <div class="col-md-12">
                <div class="form-group form-group-data">
                    <label>Мобильный телефон <b style="color: red">*</b></label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="'+'+getCurrentUser.mobile_phone"
                        disabled
                    >
                </div>
            </div>

            <div class="col-md-12">
                <div class="form-group form-group-data">
                    <label>Электронная почта</label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="getCurrentUser.email"
                        disabled
                    >
                </div>
            </div>

            <div class="col-md-12">
                <div class="form-group form-group-data">
                    <label>Пароль для входа в личный кабинет <b style="color: red">*</b></label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        value="*******************"
                        disabled
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "UserDataReadPanel",
    data() {
        return {
            fullName: '',
            monthNames: ["января", "февраля", "марта", "апреля", "мая", "июня",
                "июля", "августа", "сентября", "октября", "ноября", "декабря"],
            birthday: '',
        }
    },
    methods: {
        getFullName() {
            if (this.getCurrentUser) {
                const name = this.getCurrentUser.first_name ? this.getCurrentUser.first_name.replace(/\s/g, '') : ''
                const middle_name = this.getCurrentUser.middle_name ? this.getCurrentUser.middle_name.replace(/\s/g, '') : ''
                const last_name = this.getCurrentUser.last_name ? this.getCurrentUser.last_name.replace(/\s/g, '') : ''
                this.fullName = last_name + ' ' + name + ' ' + middle_name
            }
        },
        getBirthday() {
            let day = ''
            let month = ''
            let year = ''
            if (this.getPhysicalPerson.birthday) {
                const date = new Date(this.getPhysicalPerson.birthday)
                day = date.getDate()
                day = day < 10 ? '0' + day : day
                month = date.getMonth()
                month = this.monthNames[month]
                year = date.getFullYear()
            }
            this.birthday = `${day} ${month} ${year}`
        }
    },
    computed: {
        ...mapGetters(['getCurrentUser', 'getPhysicalPerson']),
        getGender() {
            let gender = this.getPhysicalPerson.gender
            switch (gender) {
                case 'М':
                    return 'Мужчина'
                case 'Ж':
                    return 'Женщина'
                default:
                    return '?'
            }
        }
    },
    mounted() {
        this.getFullName()
        this.getBirthday()
    }
}
</script>

<style scoped>

</style>
