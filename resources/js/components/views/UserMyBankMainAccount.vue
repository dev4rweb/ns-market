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

                <TransferCashToMainAccount
                    v-if="isShow"
                />

                <div
                    class="d-flex justify-content-center"
                    v-if="isShowSCBlock"
                >
                    <TransferMainAccountSC v-if="getReceiverUser"/>
                    <FindReceiver v-else/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import BackBtn from "../UI/BackBtn";
import FindReceiver from "../page-parts/user-bank/FindReceiver";
import TransferCashToMainAccount from "../page-parts/user-bank/TransferCashToMainAccount";
import TransferMainAccountSC from "../page-parts/user-bank/TransferMainAccountSC";
export default {
    name: "UserMyBankMainAccount",

    computed: {
        ...mapGetters(['getWalletMain', 'getWalletCash', 'getPhysicalPerson',
        'getReceiverUser']),
        isShow() {
            return !!(
                this.getPhysicalPerson &&
                this.getPhysicalPerson.trade_status !== 'S'
                &&
                this.getWalletMain && this.getWalletCash);
        },
        isShowSCBlock() {
            return !!(
                this.getPhysicalPerson &&
                this.getPhysicalPerson.trade_status === 'S'
                &&
                this.getWalletMain && this.getWalletCash);
        }
    },
    components: {
        BackBtn, TransferCashToMainAccount, FindReceiver, TransferMainAccountSC
    }
}
</script>

<style lang="scss" scoped>
h3 {
    font-size: 34px;
    font-weight: bold;
}

</style>
