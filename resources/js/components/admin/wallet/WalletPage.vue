<template>
<div>
    <h3>WalletPage</h3>
    <WalletUpdate v-if="getAdminWalletEdit" />
    <WalletCreate v-else />
    <WalletIndex />
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import WalletIndex from "./WalletIndex";
import WalletCreate from "./WalletCreate";
import WalletUpdate from "./WalletUpdate";
export default {
    name: "WalletPage",
    components: {
        WalletIndex, WalletCreate, WalletUpdate
    },
    computed: {
        ...mapGetters(['getAdminWalletEdit'])
    }
}
</script>

<style scoped>

</style>
