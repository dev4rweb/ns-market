<template>
<div class="mt-3">
    <table
        v-if="getAdminWallets && getAdminWallets.length"
        class="table table-bordered border-primary table-striped table-hover"
    >
        <thead>
        <tr>
            <th
                scope="col"
                style="width: 50px"
                class="text-center"
            >
                #
            </th>
            <th
                scope="col"
                style="width: 50px"
                class="text-center"
            >
                ID
            </th>
            <th
                scope="col"
                class="text-center"
            >
                userId
            </th>
            <th
                scope="col"
            >
                typeId
            </th>
            <th
                scope="col"
            >
                currencyCode
            </th>
            <th
                scope="col"
            >
                balance
            </th>
            <th
                scope="col"
            >
                isDefault
            </th>
            <th
                scope="col"
                style="width: 120px"
                class="text-center"
            >
                Action
            </th>
        </tr>
        </thead>
        <tbody>
        <WalletIndexItem
            v-for="(wallet, index) in getAdminWallets"
            :wallet="wallet"
            :key="wallet.id"
            :index="index"
        />
        </tbody>
    </table>
    <h4 v-else>No records</h4>
</div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import WalletIndexItem from "./WalletIndexItem";
import {walletIndexApi} from "../../../store/actions/walletApi";
export default {
    name: "WalletIndex",
    methods: {
      ...mapMutations(['setLoading', 'setAdminWallets']),
        getAllWallets() {
          this.setLoading(true)
            walletIndexApi()
                .then(res => {
                    console.log('getAllWallets', res)
                    if (res.data.success) {
                        this.setAdminWallets(res.data.models)
                    }
                })
                .catch(err => {
                    console.log('getAllWallets err', err)
                })
                .finally(() => {
                    this.setLoading(false)
                });
        }
    },
    computed: {
      ...mapGetters(['getAdminWallets'])
    },
    components: {
        WalletIndexItem
    },
    mounted() {
        this.getAllWallets()
    }
}
</script>

<style scoped>

</style>
