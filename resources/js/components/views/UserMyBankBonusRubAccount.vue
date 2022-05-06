<template>
    <div class="user-content">
        <div class="row">
            <div class="card data-card mb-5">

                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="d-flex align-items-center">
                        <BackBtn path-to="/user-bank-panel" />
                        <h3 class="mb-0">Перевод бонусов</h3>
                    </div>
                    <a
                        class="btn btn-lg btn-success"
                        href="/user-bank-bonus-rub-report"
                    >
                        Показать историю
                    </a>
                </div>

                <p
                    style="font-size: 18px;"
                    v-if="getWalletSaving"
                >
                    На Вашем счету <b style="font-size: 22px">{{ parseInt(getWalletSaving.balance) }} руб.</b>
                </p>

                <div class="d-flex justify-content-center">
                    <TransferBonusRub
                        v-if="getReceiverUser"
                    />
                    <FindReceiver
                        v-else
                    />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import FindReceiver from "../page-parts/user-bank/FindReceiver";
import TransferBonusRub from "../page-parts/user-bank/TransferBonusRub";
import BackBtn from "../UI/BackBtn";
export default {
    name: "UserMyBankBonusRubAccount",
    data() {
        return {
            receiverUser: null
        }
    },
    computed: {
        ...mapGetters(['getWalletSaving', 'getReceiverUser'])
    },
    components: {
        BackBtn, FindReceiver, TransferBonusRub
    }
}
</script>

<style lang="scss" scoped>
h3{
    font-size: 34px;
    font-weight: bold;
}
</style>
