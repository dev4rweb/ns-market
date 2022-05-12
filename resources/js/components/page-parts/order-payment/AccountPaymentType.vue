<template>
    <div class="card shadow blue-header-info-block mb-5">
        <div class="header-block p-3">
            <div
                class=" d-flex justify-content-between own-payment-list"
            >
                <span>Тип счёта</span>
                <span>Состояние счёта</span>
                <span>Оплата со счёта (р.)</span>
            </div>
        </div>
        <div class="body-block p-3">
            <div
                v-if="this.getUserStatus && this.getUserStatus === 2 && getWalletVoucher"
                class="d-flex justify-content-between content-wrapper own-payment-list"
            >
                <span>Ваучер банк</span>
                <span>{{ getWalletVoucher.balance }}</span>
                <span>{{ difVoucher }}</span>
            </div>
            <div
                v-if="getWalletMain"
                class="d-flex justify-content-between content-wrapper own-payment-list"
            >
                <span>Лицевой счёт</span>
                <span>{{ getWalletMain.balance }}</span>
                <span>{{ difMain }}</span>
            </div>
            <div
                v-if="this.getUserStatus && this.getUserStatus !== 3 && getWalletSaving"
                class="d-flex justify-content-between content-wrapper own-payment-list"
            >
                <span>Счёт бонусов</span>
                <span>{{ getWalletSaving.balance }}</span>
                <span>{{ difSaving }}</span>
            </div>
            <hr>
            <div class="d-flex justify-content-between content-wrapper mt-3 own-payment-list">
                <span class="value">Итого</span>
                <span class="value">{{ accountSum }} р.</span>
                <span class="value">{{ difSum }} р.</span>
            </div>
            <h2 v-if="getRestCost > 0">К оплате: {{ getRestCost }} р.</h2>
        </div>
        <div v-if="getRestCost <= 0" class="d-flex justify-content-center position-relative">
            <button
                class="btn btn-lg btn-info"
                style="margin-bottom: -25px; width: 200px;"
                @click="payWithOwnResource"
            >
                Оплатить
            </button>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {USER_CLIENT, USER_EMPLOYEE, USER_PARTNER, USER_SERVICE_CENTER} from "../../../store/utils/userStatuses";

export default {
    name: "AccountPaymentType",
    methods: {
        ...mapMutations(['setRestCost', 'setMainAccount', 'setVoucherAccount', 'setSavingAccount']),
        ...mapActions(['paymentOrderWithOwnResourceAction']),
        payWithOwnResource() {
            // console.log('payWithOwnResource', this.voucher, this.main, this.saving)

            this.paymentOrderWithOwnResourceAction();
        }
    },
    computed: {
        ...mapGetters(['getWalletVoucher', 'getWalletMain', 'getWalletSaving', 'getBasketOrder', 'getRestCost',
            'getUserStatus', 'getMainAccount', 'getVoucherAccount', 'getSavingAccount']),
        accountSum() {
            if (this.getWalletSaving && this.getWalletMain && this.getWalletVoucher && this.getUserStatus) {
                switch (this.getUserStatus) {
                    case USER_CLIENT:
                        return `${this.getWalletMain.balance + this.getWalletSaving.balance}`
                    case USER_PARTNER:
                        return `${this.getWalletVoucher.balance + this.getWalletMain.balance + this.getWalletSaving.balance}`
                    case USER_SERVICE_CENTER:
                        return `${this.getWalletMain.balance}`
                    case USER_EMPLOYEE:
                        return `${this.getWalletVoucher.balance + this.getWalletMain.balance + this.getWalletSaving.balance}`
                }
            }
            return this.getVoucherAccount + this.getMainAccount + this.getSavingAccount
        },
        difVoucher() {
            if (this.getUserStatus && this.getUserStatus === USER_PARTNER) {
                if (this.getWalletVoucher && this.getBasketOrder) {
                    if (this.getWalletVoucher.balance > 0) {
                        if (this.getBasketOrder.order_price >= this.getWalletVoucher.balance)
                            this.setVoucherAccount(this.getWalletVoucher.balance)
                        else this.setVoucherAccount(this.getBasketOrder.order_price);
                    }
                }
            }
            return this.getVoucherAccount
        },
        difMain() {
            if (this.getWalletMain && this.getBasketOrder) {
                if (this.getWalletMain.balance > 0) {
                    (this.getBasketOrder.order_price - this.getVoucherAccount) >= this.getWalletMain.balance ?
                        this.setMainAccount(this.getWalletMain.balance) :
                        this.setMainAccount(this.getBasketOrder.order_price - this.getVoucherAccount)
                }
            }
            return this.getMainAccount
        },
        difSaving() {
            if (this.getUserStatus && (this.getUserStatus === USER_PARTNER || this.getUserStatus === USER_CLIENT)) {
                if (this.getWalletSaving && this.getBasketOrder) {
                    if (this.getWalletSaving.balance > 0) {
                        (this.getBasketOrder.order_price - this.getVoucherAccount - this.getMainAccount) >= this.getWalletSaving.balance ?
                            this.setSavingAccount(this.getWalletSaving.balance) :
                            this.setSavingAccount(this.getBasketOrder.order_price - this.getVoucherAccount - this.getMainAccount)
                    }
                }
            }
            return this.getSavingAccount
        },
        difSum() {
            if (this.getBasketOrder) {
                const sum = this.getVoucherAccount + this.getMainAccount + this.getSavingAccount;
                this.setRestCost(this.getBasketOrder.order_price - sum)
                return sum
            }
            return 0
        }
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
}

.blue-header-info-block {
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


</style>
