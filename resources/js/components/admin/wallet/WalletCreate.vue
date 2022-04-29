<template>
<div>
    <form
        @submit.prevent="createWallet"
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
                    v-model="getAdminWalletCreate.user_id"
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
                    v-model="getAdminWalletCreate.type_id"
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
                    v-model="getAdminWalletCreate.currency_code"
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
                    v-model="getAdminWalletCreate.balance"
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
                    v-model="getAdminWalletCreate.is_default"
                    required
                >
            </div>
            <button
                type="submit"
                class="btn btn-primary"
            >
                Create
            </button>
        </div>
    </form>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "WalletCreate",
    methods: {
        ...mapActions(['createAdminWalletAction']),
        createWallet() {
            this.createAdminWalletAction()
        }
    },
    computed: {
        ...mapGetters(['getAdminWalletCreate'])
    }
}
</script>

<style scoped>

</style>
