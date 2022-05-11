<template>
    <div class="card shadow blue-header-info-block mb-3">
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
                v-if="getWalletVoucher"
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
                v-if="getWalletSaving"
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
        <div>
            <button class="btn btn-lg btn-info"></button>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "AccountPaymentType",
    data() {
        return {
            voucher: 0,
            main: 0,
            saving: 0,
        }
    },
    methods: {
        ...mapMutations(['setRestCost'])
    },
    computed: {
        ...mapGetters(['getWalletVoucher', 'getWalletMain', 'getWalletSaving', 'getBasketOrder', 'getRestCost']),
        accountSum() {
            if (this.getWalletSaving && this.getWalletMain && this.getWalletVoucher) {
                return `${this.getWalletVoucher.balance + this.getWalletMain.balance + this.getWalletSaving.balance}`
            }
            return ''
        },
        difVoucher() {
            if (this.getWalletVoucher && this.getBasketOrder) {
                if (this.getWalletVoucher.balance > 0) {
                    this.getBasketOrder.order_price >= this.getWalletVoucher.balance ?
                        this.voucher = this.getWalletVoucher.balance :
                        this.voucher = this.getBasketOrder.order_price
                }
            }
            return this.voucher
        },
        difMain() {
            if (this.getWalletMain && this.getBasketOrder) {
                if (this.getWalletMain.balance > 0) {
                    this.main = (this.getBasketOrder.order_price - this.voucher) >= this.getWalletMain.balance ?
                        this.getWalletMain.balance :
                        this.getBasketOrder.order_price - this.voucher
                }
            }
            return this.main
        },
        difSaving() {
            if (this.getWalletSaving && this.getBasketOrder) {
                if (this.getWalletSaving.balance > 0) {
                    this.saving = (this.getBasketOrder.order_price - this.voucher - this.main) >= this.getWalletSaving.balance ?
                        this.getWalletSaving.balance :
                        this.getBasketOrder.order_price - this.voucher - this.main
                }
            }
            return this.saving
        },
        difSum() {
            if (this.getBasketOrder) {
                const sum = this.voucher + this.main + this.saving;
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
