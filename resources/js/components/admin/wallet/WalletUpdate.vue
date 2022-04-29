<template>
    <div v-if="getAdminWalletEdit">
        <form
            @submit.prevent="updateWallet"
        >
            <div class="d-flex mb-3">
                <div class="me-3">
                    <label
                        class="form-label"
                    >
                        UserId
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        v-model="getAdminWalletEdit.user_id"
                        required
                    >
                </div>
                <div class="me-3">
                    <label
                        class="form-label"
                    >
                        TypeId
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        v-model="getAdminWalletEdit.type_id"
                        required
                    >
                </div>
                <div>
                    <label
                        class="form-label"
                    >
                        Currency code
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="getAdminWalletEdit.currency_code"
                        required
                    >
                </div>
            </div>
            <div class="d-flex align-items-end mb-3">
                <div class="me-3">
                    <label
                        class="form-label"
                    >
                        Balance
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        v-model="getAdminWalletEdit.balance"
                        required
                    >
                </div>
                <div class="me-3">
                    <label
                        class="form-label"
                    >
                        IsDefault (0/1)
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        v-model="getAdminWalletEdit.is_default"
                        required
                    >
                </div>
                <button
                    type="submit"
                    class="btn btn-primary"
                >
                    Update
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "WalletUpdate",
    methods: {
        ...mapActions(['updateWalletAction']),
        updateWallet() {
            // console.log('updateWallet', this.getAdminWalletEdit)
            this.updateWalletAction()
        }
    },
    computed: {
        ...mapGetters(['getAdminWalletEdit'])
    }
}
</script>

<style scoped>

</style>
