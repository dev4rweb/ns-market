<template>
    <div class="user-content " v-if="getCurrentUser && getPhysicalPerson">
        <div class="row">
            <div class="card data-card">
                <h3>Личная информация</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group form-group-data">
                            <label>Имя</label>
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                v-model="getCurrentUser.first_name"
                            >
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group form-group-data">
                            <label>Отчество</label>
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                v-model="getCurrentUser.middle_name"
                            >
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group form-group-data">
                            <label>Фамилия</label>
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                v-model="getCurrentUser.last_name"
                            >
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group form-group-data">
                            <label>Электронная почта <b style="color: red">*</b> </label>
                            <input
                                type="email"
                                class="form-control form-control-lg"
                                v-model="getCurrentUser.email"
                            >
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group form-group-data">
                            <label>Пол</label>
                            <div class="d-flex justify-content-between align-items-center">
                                <RadioBox label="Мужской" value="М" v-model="getPhysicalPerson.gender" />
                                <RadioBox label="женский" value="Ж" v-model="getPhysicalPerson.gender" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RadioBox from "../UI/RadioBox";
import {mapGetters, mapMutations} from 'vuex'
export default {
    name: "UserDataPanel",
    data() {
        return {
            gender: "М",
        }
    },
    methods: {
        ...mapMutations(['setCurrentUser']),
        getWindowUser() {
            this.setCurrentUser(window.User)
            console.log('window User', window.User)
        },

    },
    computed: {
        ...mapGetters(['getCurrentUser', 'getPhysicalPerson']),

    },
    components: {
        RadioBox
    },
    mounted() {
        this.getWindowUser()
    }
}
</script>

<style scoped>

</style>
