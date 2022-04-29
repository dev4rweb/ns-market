<template>
<div>
    <form
        @submit.prevent="createPvAccount"
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
                    v-model="getPvAccountCreate.period"
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
                    v-model="getPvAccountCreate.wallet_id"
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
                    v-model="getPvAccountCreate.balance"
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
    name: "PVAccountCreate",
    methods: {
        ...mapActions(['createPVAccountAction']),
        createPvAccount() {
            this.createPVAccountAction()
        }
    },
    computed:{
        ...mapGetters(['getPvAccountCreate'])
    }
}
</script>

<style scoped>

</style>
