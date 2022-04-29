<template>
<div>
    <form
        @submit.prevent="createTransaction"
    >
        <div class="d-flex mb-3">
            <div class="me-3">
                <label
                    class="form-label"
                >
                    project_id
                </label>
                <input
                    type="number"
                    class="form-control"
                    v-model="getAdminTransactionCreate.project_id"
                    required
                >
            </div>
            <div class="me-3">
                <label
                    class="form-label"
                >
                    type_code
                </label>
                <input
                    type="number"
                    class="form-control"
                    v-model="getAdminTransactionCreate.type_code"
                    required
                >
            </div>
            <div class="me-3" >
                <label
                    class="form-label"
                >
                    from_account_id
                </label>
                <input
                    type="number"
                    class="form-control"
                    v-model="getAdminTransactionCreate.from_account_id"
                    required
                >
            </div>
            <div class="me-3">
                <label
                    class="form-label"
                >
                    to_account_id
                </label>
                <input
                    type="number"
                    class="form-control"
                    v-model="getAdminTransactionCreate.to_account_id"
                    required
                >
            </div>
            <div class="me-3">
                <label
                    class="form-label"
                >
                    amount
                </label>
                <input
                    type="number"
                    class="form-control"
                    v-model="getAdminTransactionCreate.amount"
                    required
                >
            </div>
        </div>

        <div class="d-flex align-items-end mb-3">
            <div class="me-3">
                <label
                    class="form-label"
                >
                    currency_code
                </label>
                <input
                    type="text"
                    class="form-control"
                    v-model="getAdminTransactionCreate.currency_code"
                    required
                >
            </div>
            <div class="me-3">
                <label
                    class="form-label"
                >
                    document
                </label>
                <input
                    type="text"
                    class="form-control"
                    v-model="getAdminTransactionCreate.document"
                    required
                >
            </div>
            <div class="me-3">
                <label
                    class="form-label"
                >
                    comment
                </label>
                <input
                    type="text"
                    class="form-control"
                    v-model="getAdminTransactionCreate.comment"
                    required
                >
            </div>
            <div class="me-3">
                <label
                    class="form-label"
                >
                    creator_id
                </label>
                <input
                    type="number"
                    class="form-control"
                    v-model="getAdminTransactionCreate.creator_id"
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
    name: "TransactionCreate",
    methods: {
        ...mapActions(['createTransactionAction']),
        createTransaction() {
            this.createTransactionAction()
        }
    },
    computed: {
        ...mapGetters(['getAdminTransactionCreate'])
    }
}
</script>

<style scoped>

</style>
