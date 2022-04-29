<template>
    <tr>
        <th class="text-center" scope="row">{{ index + 1 }}</th>
        <td class="text-center">{{ type.id }}</td>
        <td class="text-center">{{ type.code }}</td>
        <td>{{ type.name }}</td>
        <td>
            <button
                class="btn btn-outline-info me-3"
                @click="editType"
            >
                <i class="bi bi-pencil-fill"></i>
            </button>
            <button
                class="btn btn-outline-danger"
                @click="removeType"
            >
                <i class="bi bi-trash"></i>
            </button>
        </td>
    </tr>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {
    name: "TransactionTypeIndexItem",
    props: ['type', 'index'],
    methods: {
        ...mapMutations(['setAdminTransactionTypeEdit']),
        ...mapActions(['removeTransactionTypeAction']),
        editType() {
            console.log('editType', this.type)
            this.setAdminTransactionTypeEdit(this.type)
        },
        removeType() {
            console.log('removeType', this.type)
            this.setAdminTransactionTypeEdit(null)
            this.removeTransactionTypeAction(this.type.id)
        }
    }
}
</script>

<style scoped>

</style>
