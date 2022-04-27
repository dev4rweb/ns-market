<template>
    <div class="user-content">
        <div class="row">
            <div class="card data-card mb-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="d-flex align-items-center">
                        <BackBtn path-to="/user-bank-panel" />
                        <h3 class="mb-0">Перевод баллов резерва</h3>
                    </div>
                    <a
                        class="btn btn-lg btn-success"
                        href="/user-bank-reserve-report"
                    >
                        Смотреть историю
                    </a>
                </div>

                <p
                    style="font-size: 18px;"
                    v-if="getWalletPVC"
                >
                    В Вашем резерве <b>{{ parseInt(getWalletPVC.balance) }}</b> баллов
                </p>

                <div class="d-flex justify-content-center">
                    <TransferReservePVC v-if="getReceiverUser" />
                    <FindReceiver v-else />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import FindReceiver from "../page-parts/user-bank/FindReceiver";
import TransferReservePVC from "../page-parts/user-bank/TransferReservePVC";
import BackBtn from "../UI/BackBtn";
export default {
    name: "UserMyBankReserveAccount",
    data() {
        return {
            receiverUser: null
        }
    },
    computed: {
        ...mapGetters(['getWalletPVC', 'getReceiverUser'])
    },
    components: {
        FindReceiver, TransferReservePVC, BackBtn
    }
}
</script>

<style lang="scss" scoped>
h3{
    font-size: 34px;
    font-weight: bold;
}
</style>
