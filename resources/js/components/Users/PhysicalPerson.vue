<template>
    <div>
        <Loader v-if="isLoading"/>
        <p v-if="getPhysicalPerson">
            ID: {{ getPhysicalPerson.user_id }}
            <br>Статус: {{ tradeStatus }}
        </p>
    </div>
</template>

<script>
import Loader from "../UI/Loader";
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "PhysicalPerson",

    methods: {
        ...mapActions(['fetchPhysicalPerson']),
    },
    mounted() {
        this.fetchPhysicalPerson()
        // console.log('Physical Person Component', this.currentUser)
    },
    computed: {
        ...mapGetters(['isLoading', 'getPhysicalPerson']),
        tradeStatus() {
            if (this.getPhysicalPerson) {
                const status = this.getPhysicalPerson.trade_status
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
        }
    },
    components: {
        Loader
    }
}
</script>

<style scoped>

</style>
