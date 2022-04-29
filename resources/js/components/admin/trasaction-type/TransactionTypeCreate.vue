<template>
<div>
    <form
        @submit.prevent="createTransactionType"
        class="d-flex align-items-end"
    >
        <div class="me-3">
            <label
                class="form-label"
            >
                Transaction type name
            </label>
            <input
                type="text"
                class="form-control"
                v-model="code"
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
                v-model="name"
                required
            >
        </div>
        <button
            type="submit"
            class="btn btn-primary"
        >
            Create
        </button>
    </form>
</div>
</template>

<script>
import {mapMutations} from 'vuex'
import {createTransactionTypeApi, getAllTransactionTypesApi} from "../../../store/actions/transactionTypesApi";
export default {
    name: "TransactionTypeCreate",
    data() {
        return {
            name: '',
            code: ''
        }
    },
    methods: {
        ...mapMutations(['setLoading', 'setToastError', 'setAdminTransactionTypes']),
        createTransactionType() {
            console.log('createTransactionType', this.name)
            this.setLoading(true)
            createTransactionTypeApi({
                name: this.name,
                code: this.code
            })
                .then(res => {
                    console.log('createTransactionTypeApi ', res)
                    if (res.data.success) {
                        this.setToastError(res.data.message);
                        this.name = '';
                        this.code = ''
                        return getAllTransactionTypesApi();
                    } else {
                        this.name = '';
                        this.code = ''
                        this.setToastError('Something wrong')
                    }
                })
                .then(res => {
                    console.log('getAllTransactionTypesApi', res)
                    if (res.data.success) {
                        this.setAdminTransactionTypes(res.data.models)
                    }
                })
                .catch(err => {
                    console.log('createTransactionTypeApi err', err)
                })
                .finally(() => {
                    this.setLoading(false)
                });
        }
    }
}
</script>

<style scoped>

</style>
