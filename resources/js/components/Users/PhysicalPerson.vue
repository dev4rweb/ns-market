<template>
    <div>
        <Loader v-if="loading"/>
        <p v-if="physicalPerson">
            ID: {{ physicalPerson.user_id }}
            <br>Статус: {{ tradeStatus }}
        </p>
    </div>
</template>

<script>
import Loader from "../UI/Loader";
import {WORK_HOST} from "../../store/routeConsts";

export default {
    name: "PhysicalPerson",
    data() {
        return {
            currentUser: null,
            physicalPerson: null,
            loading: false
        }
    },
    methods: {
        getPhysicalPerson() {
            this.loading = true
            if (this.currentUser) {
                axios.post(`${WORK_HOST}market/get-physical-user`, {
                    user_id: this.currentUser.user_id
                }).then(res => {
                    console.log('getPhysicalPerson', res)
                    if (res.data.model)
                        this.physicalPerson = res.data.model
                }).catch(err => {
                    console.log('getPhysicalPerson err', err)
                }).finally(() => {
                    this.loading = false
                });
            } else {
                console.log('current user - ', this.currentUser)
            }
        }
    },
    mounted() {
        this.currentUser = window.User
        this.getPhysicalPerson()
        console.log('Physical Person Component', this.currentUser)
    },
    computed: {
        tradeStatus() {
            const status = this.physicalPerson.trade_status
            switch (status) {
                case 'K':
                case 'D':
                    return 'Партнер'
                case 'N':
                case 'B':
                case 'T':
                    return 'Клиент'
            }
        }
    },
    components: {
        Loader
    }
}
</script>

<style scoped>

</style>
