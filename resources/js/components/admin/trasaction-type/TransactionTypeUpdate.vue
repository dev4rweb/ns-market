<template>
    <div>
        <form
            @submit.prevent="updateTransactionType"
            class="d-flex align-items-end"
        >
            <div class="me-3">
                <label
                    class="form-label"
                >
                    Transaction type code
                </label>
                <input
                    type="text"
                    class="form-control"
                    v-model="getAdminTransactionTypeEdit.code"
                    required
                >
            </div>
            <div class="me-3">
                <label
                    class="form-label"
                >
                    Transaction type name
                </label>
                <input
                    type="text"
                    class="form-control"
                    v-model="getAdminTransactionTypeEdit.name"
                    required
                >
            </div>
            <button
                type="submit"
                class="btn btn-primary"
            >
                Update
            </button>
        </form>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "TransactionTypeUpdate",
    methods: {
        ...mapActions(['updateTransactionTypeAction']),
        updateTransactionType() {
            // console.log('updateTransactionType', this.getAdminTransactionTypeEdit)
            this.updateTransactionTypeAction()
        }
    },
    computed: {
        ...mapGetters(['getAdminTransactionTypeEdit'])
    }
}
</script>

<style scoped>

</style>
