<template>
    <div class="user-content">
        <div class="row">
            <div class="card data-card mb-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="d-flex align-items-center">
                        <BackBtn path-to="/user-bank-panel"/>
                        <h3 class="mb-0">Пополнение лицевого счёта покупателя.</h3>
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

                <div class="d-flex justify-content-center">
                    <TransferMainAccountSC v-if="getReceiverUser"/>
                    <FindReceiver v-else/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import BackBtn from "../../UI/BackBtn";
import FindReceiver from "../../page-parts/user-bank/FindReceiver";
import TransferMainAccountSC from "../../page-parts/user-bank/TransferMainAccountSC";
export default {
    name: "UserSCFillMainAccount",
    computed: {
        ...mapGetters(['getWalletMain', 'getWalletCash', 'getPhysicalPerson',
            'getReceiverUser'])
    },
    components: {
        FindReceiver, TransferMainAccountSC, BackBtn
    },
}
</script>

<style scoped>

</style>
