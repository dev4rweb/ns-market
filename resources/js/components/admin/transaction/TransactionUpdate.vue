<template>
    <div>
        <form
            @submit.prevent="updateTransaction"
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
                        v-model="getAdminTransactionEdit.project_id"
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
                        v-model="getAdminTransactionEdit.type_code"
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
                        v-model="getAdminTransactionEdit.from_account_id"
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
                        v-model="getAdminTransactionEdit.to_account_id"
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
                        v-model="getAdminTransactionEdit.amount"
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
                        v-model="getAdminTransactionEdit.currency_code"
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
                        v-model="getAdminTransactionEdit.document"
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
                        v-model="getAdminTransactionEdit.comment"
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
                        v-model="getAdminTransactionEdit.creator_id"
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
    name: "TransactionUpdate",
    methods: {
        ...mapActions(['updateTransactionAction']),
        updateTransaction() {
            this.updateTransactionAction()
        }
    },
    computed: {
        ...mapGetters(['getAdminTransactionEdit'])
    }
}
</script>

<style scoped>

</style>
