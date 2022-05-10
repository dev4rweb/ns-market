<template>
    <div class="container basket-page">
        <h1 class="mt-3 mb-3">Оформление заказа</h1>
        <div>
            <NavOrder/>
        </div>
        <div class="mt-3">
            <GeneralOrderInfo/>

            <h3 class="mt-3">Ваши счета</h3>
            <AccountPaymentType/>
            <PaymentWay v-if="getRestCost > 0" />
        </div>
    </div>
</template>

<script>
import NavOrder from "../UI/NavOrder";
import GeneralOrderInfo from "../page-parts/order-payment/GeneralOrderInfo";
import AccountPaymentType from "../page-parts/order-payment/AccountPaymentType";
import PaymentWay from "../page-parts/order-payment/PaymentWay";
import {mapGetters} from 'vuex'
export default {
    name: "OrderPaymentPage",
    computed: {
      ...mapGetters(['getRestCost'])
    },
    components: {
        NavOrder, GeneralOrderInfo, AccountPaymentType, PaymentWay
    },
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

    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 120%;
        color: #333333;
        margin-top: 25px;
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

    .btn-info
    .own-payment-list {
        width: 100%;
        max-width: 655px;

        span:first-of-type {
            width: 100%;
            max-width: 200px;
        }

        span:nth-of-type(2) {
            width: 100%;
            max-width: 200px;
            text-align: right;
        }

        span:last-of-type {
            width: 100%;
            max-width: 255px;
            text-align: right;
        }
    }
}

.form-group-blue {
    label {
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 22px;
        color: #333333;

        span {
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 22px;
            color: #EB5757;
        }
    }
}
</style>
