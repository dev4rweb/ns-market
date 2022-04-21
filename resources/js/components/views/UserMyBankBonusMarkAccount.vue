<template>
    <div class="user-content">
        <div class="row">
            <div class="card data-card mb-5">
                <h3 class="mb-3">Перевод бонус марок</h3>
                <div class="d-flex justify-content-between mb-3">
                    <p
                        style="font-size: 18px;"
                        v-if="getBillingAccountMBC"
                    >
                        На Вашем счету <b>{{ parseInt(getBillingAccountMBC.balance) }}</b> БМ
                    </p>
                    <a
                        class="btn btn-lg btn-success"
                        href="/user-bank-bonus-report"
                    >
                        Показать историю
                    </a>
                </div>
                <div class="d-flex justify-content-center">
                    <TransferBonusMark
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
import {mapGetters, mapMutations} from 'vuex'
import FindReceiver from "../page-parts/user-bank/FindReceiver";
import TransferBonusMark from "../page-parts/user-bank/TransferBonusMark";
import {findUserByPhoneOrUserIdApi} from "../../store/actions/userApi";

export default {
    name: "UserMyBankBonusMarkAccount",
    data() {
        return {
            receiverUser: null
        }
    },
    computed: {
        ...mapGetters(['getBillingAccountMBC', 'getReceiverUser'])
    },
    methods: {
        ...mapMutations(['setLoading']),
    },
    components: {
        FindReceiver, TransferBonusMark
    }
}
</script>

<style lang="scss" scoped>

</style>
