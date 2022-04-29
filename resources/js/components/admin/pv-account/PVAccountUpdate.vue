<template>
    <div>
        <form
            @submit.prevent="updatePvAccount"
        >
            <div class="d-flex align-items-end mb-3">
                <div class="me-3">
                    <label
                        class="form-label"
                    >
                        Period
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        v-model="getPvAccountEdit.period"
                        required
                    >
                </div>
                <div class="me-3">
                    <label
                        class="form-label"
                    >
                        wallet_id
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        v-model="getPvAccountEdit.wallet_id"
                        required
                    >
                </div>
                <div class="me-3">
                    <label
                        class="form-label"
                    >
                        balance
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        v-model="getPvAccountEdit.balance"
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
    name: "PVAccountUpdate",
    methods: {
        ...mapActions(['updatePVAccountAction']),
        updatePvAccount() {
            this.updatePVAccountAction()
        }
    },
    computed: {
        ...mapGetters(['getPvAccountEdit'])
    }
}
</script>

<style scoped>

</style>
