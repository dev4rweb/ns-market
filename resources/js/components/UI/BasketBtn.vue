<template>
    <a class="header-btn" href="/basket">
        <div class="position-relative basket-wrapper">
            <img
                v-if="getLSOrder.length"
                class="profile-icon"
                :src="icBasketBlue"
                alt="profile">
            <img
                v-else
                class="profile-icon"
                :src="icBasket"
                alt="profile">

            <span
                v-if="getLSOrder.length"
                class="position-absolute order-size"
            >
                {{ getLSOrder.length }}
            </span>
        </div>

        <span class="profile-title">Корзина</span>
    </a>
</template>

<script>
import icBasket from '../../../assets/img/ic-basket.png'
import icBasketBlue from '../../../assets/img/ic-basket-blue.png'
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "BasketBtn",
    data() {
        return {
            icBasket,
            icBasketBlue
        }
    },
    methods: {
        ...mapActions(['hasLSOrderAction', 'hasLSOrderIdAction'])
    },
    computed: {
        ...mapGetters(['getLSOrder'])
    },
    mounted() {
        this.hasLSOrderIdAction()
        this.hasLSOrderAction()
    }
}
</script>

<style lang="scss" scoped>
.basket-wrapper {

    .order-size {
        width: 27px;
        height: 27px;
        top: -12px;
        right: -12px;
        background-color: #FFCE20;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #333333;
    }
}
</style>
