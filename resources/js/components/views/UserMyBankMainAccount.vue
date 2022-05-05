<template>
    <div class="user-content">
        <div class="row">
            <div class="card data-card mb-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="d-flex align-items-center">
                        <BackBtn path-to="/user-bank-panel"/>
                        <h3 class="mb-0">Пополнение лицевого счёта.</h3>
                    </div>
                    <a
                        class="btn btn-lg btn-success"
                        href="/user-bank-main-report"
                    >
                        Показать историю
                    </a>
                </div>

                <p
                    style="font-size: 18px;"
                    v-if="getWalletMain && getWalletCash"
                >
                    На Вашем лицевом счёте
                    <b style="font-size: 22px">
                        {{ parseInt(getWalletMain.balance) }}
                    </b> руб.
                </p>

                <h4
                    class="mb-3 text-center"
                    v-if="getWalletMain && getWalletCash"
                >
                    Укажите сумму пополнения
                </h4>

                <div
                    v-if="getWalletMain && getWalletCash"
                    class="d-flex justify-content-center"
                >
                    <form
                        @submit.prevent="transferCash"
                        class="needs-validation login-form "
                    >
                        <div class="d-flex justify-content-center align-items-center flex-column mb-3">
                            <input
                                type="number"
                                min="1"
                                style="max-width: 250px; font-weight: bold; font-size: 60px; text-align: center"
                                v-model="transferAmount"
                                @input="isAmountInvalid = false"
                                ref="focusMe"
                                class="form-control form-control-lg"
                                required
                            >
<!--                            <div
                                class="invalid-feedback text-center"
                                :class="{show: isAmountInvalid}"
                            >
                                {{ transferAmountMsg }}
                            </div>-->
                        </div>
                        <h5
                            class="text-center"
                            :class="{'color-red': isAmountInvalid}"
                        >
                            Выберите способ пополнения.
                        </h5>
                        <div
                            class="d-flex justify-content-center"
                        >
                            <button
                                class="btn btn-lg btn-success me-3"
                                :class="{borderRed: isAmountInvalid}"
                                type="button"
                                @click="payWithQR"
                            >
                                QR код
                            </button>
                            <button
                                class="btn btn-lg btn-info me-3"
                                :class="{borderRed: isAmountInvalid}"
                                type="button"
                                @click="payWithCreditCard"
                            >
                                Банковской картой
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import BackBtn from "../UI/BackBtn";

export default {
    name: "UserMyBankMainAccount",
    data() {
        return {
            transferAmount: '',
            transferAmountMsg: 'Выберите способ пополнения.',
            isAmountInvalid: false,
            paymentWay: null
        }
    },
    methods: {
        ...mapActions(['makeMainTransactionAction']),
        transferCash() {
            if (!this.paymentWay) {
                this.isAmountInvalid = true
                return
            }
        },
        payWithQR() {
            this.isAmountInvalid = false
            // console.log('payWithQR', this.transferAmount)
            this.makeMainTransactionAction(parseInt(this.transferAmount))
        },
        payWithCreditCard() {
            this.isAmountInvalid = false
            // console.log('payWithCreditCard', this.transferAmount)
            this.makeMainTransactionAction(parseInt(this.transferAmount))
        },
    },
    computed: {
        ...mapGetters(['getWalletMain', 'getWalletCash'])
    },
    components: {
        BackBtn
    }
}
</script>

<style lang="scss" scoped>
h3 {
    font-size: 34px;
    font-weight: bold;
}

form {
    max-width: 430px;

    h5 {
        font-size: 30px;
        font-weight: bold;
    }
}

.color-red{
    color: red;
}

.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>
