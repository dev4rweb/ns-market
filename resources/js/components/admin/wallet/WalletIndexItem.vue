<template>
    <tr>
        <th class="text-center" scope="row">{{ index + 1 }}</th>
        <td class="text-center">{{ wallet.id }}</td>
        <td>{{ wallet.user_id }}</td>
        <td>{{ wallet.type_id }}</td>
        <td>{{ wallet.currency_code }}</td>
        <td>{{ wallet.balance }}</td>
        <td>{{ wallet.is_default }}</td>
        <td>
            <button
                @click="editWallet"
                class="btn btn-outline-info me-3"
            >
                <i class="bi bi-pencil-fill"></i>
            </button>
            <button
                @click="removeWallet"
                class="btn btn-outline-danger"
            >
                <i class="bi bi-trash"></i>
            </button>
        </td>
    </tr>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'

export default {
    name: "WalletIndexItem",
    props: ['wallet', 'index'],
    methods: {
        ...mapMutations(['setAdminWalletEdit']),
        ...mapActions(['removeWalletAction']),
        editWallet() {
            console.log('editWallet', this.wallet)
            this.setAdminWalletEdit(this.wallet)
        },
        removeWallet() {
            console.log('removeWallet', this.wallet.id)
            this.setAdminWalletEdit(null)
            this.removeWalletAction(this.wallet.id)
        }
    }
}
</script>

<style scoped>

</style>
