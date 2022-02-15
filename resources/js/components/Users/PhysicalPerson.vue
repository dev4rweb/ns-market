<template>
    <div>
<!--        <Loader v-if="isLoading"/>-->
        <p v-if="getPhysicalPerson" class="position-relative">
            ID: {{ getPhysicalPerson.user_id }}
            <br>Статус: {{ tradeStatus }}
            <sup
                class="question-status"
                @click="becomePartnerHandler"
            >
                ?
            </sup>
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
        becomePartnerHandler() {
            window.location.href = '/user-become-partner'
        }
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

<style lang="scss" scoped>
.question-status {
    position: absolute;
    top: 18px;
    left: 150px;
    background-color: #038ED7;
    width: 20px;
    height: 20px;
    color: white;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;

    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.2, 1.2);
        -moz-transform: scale(1.2, 1.2);
        -ms-transform: scale(1.2, 1.2);
        -o-transform: scale(1.2, 1.2);
        transform: scale(1.2, 1.2);
    }
}
</style>
