<template>
    <div class="container basket-page">
        <h1 class="mt-3 mb-3">Оформление заказа</h1>
        <div>
            <NavOrder/>
        </div>
        <div class="card shadow blue-header-info-block mb-3 mt-5">
            <div class="header-block p-3">
                Общие сведения о заказе
            </div>
            <div class="body-block p-3">
            </div>
        </div>
    </div>
</template>

<script>
import NavOrder from "../UI/NavOrder";
import {mapActions} from 'vuex'
export default {
    name: "OrderDeliveryPage",
    methods: {
        ...mapActions(['fetchEDostDelivery'])
    },
    components: {
        NavOrder
    },
    mounted() {
        this.fetchEDostDelivery('')
    }
}
</script>

<style lang="scss" scoped>
.basket-page {
    min-height: calc(100vh - 222px - 288px);

    h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 39px;
        text-transform: uppercase;
        text-align: center;
        color: #333333;
    }

    h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        display: flex;
        align-items: center;
        color: #333333;
    }


    .nav-tabs {

        .dot {
            font-style: normal;
            font-weight: normal;
            font-size: 10px;
            line-height: 20px;
            color: #77818B;
        }

        .btn-link {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 20px;
            color: #77818B;
            text-decoration: none;

            &.active {
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 22px;
                color: #038ED7;
            }
        }
    }
}
</style>
