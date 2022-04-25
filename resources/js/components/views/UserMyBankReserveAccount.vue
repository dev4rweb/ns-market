<template>
    <div class="user-content">
        <div class="row">
            <div class="card data-card mb-5">
                <h3 class="mb-3">Перевод баллов резерва</h3>
                <div class="d-flex justify-content-between mb-3">
                    <p
                        style="font-size: 18px;"
                        v-if="getWalletPVC"
                    >
                        В Вашем резерве <b>{{ parseInt(getWalletPVC.balance) }}</b> баллов
                    </p>
                    <a
                        class="btn btn-lg btn-success"
                        href="/user-bank-reserve-report"
                    >
                        Смотреть историю
                    </a>
                </div>
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
        FindReceiver, TransferReservePVC
    }
}
</script>

<style scoped>

</style>
