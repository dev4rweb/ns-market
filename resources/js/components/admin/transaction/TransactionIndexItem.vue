<template>
<tr>
    <th class="text-center" scope="row">{{ index + 1 }}</th>
    <td class="text-center">{{ item.id }}</td>
    <td class="text-center">{{ item.project_id }}</td>
    <td>{{ item.type_code }}</td>
    <td>{{ item.from_account_id }}</td>
    <td>{{ item.to_account_id }}</td>
    <td>{{ item.amount }}</td>
    <td>{{ item.currency_code }}</td>
    <td>{{ item.document }}</td>
    <td>{{ item.comment }}</td>
    <td>{{ item.creator_id }}</td>
    <td>
        <div class="d-flex">
            <button
                class="btn btn-outline-info me-3"
                @click="editTransaction"
            >
                <i class="bi bi-pencil-fill"></i>
            </button>
            <button
                class="btn btn-outline-danger"
                @click="removeTransaction"
            >
                <i class="bi bi-trash"></i>
            </button>
        </div>
    </td>
</tr>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {
    name: "TransactionIndexItem",
    props: ['item', 'index'],
    methods: {
        ...mapMutations(['setAdminTransactionEdit']),
        ...mapActions(['removeTransactionAction']),
        editTransaction() {
            console.log('editTransaction', this.item)
            this.setAdminTransactionEdit(this.item)
        },
        removeTransaction() {
            console.log('removeTransaction', this.item.id)
            this.setAdminTransactionEdit(null)
            this.removeTransactionAction(this.item.id)
        }
    }
}
</script>

<style scoped>

</style>
