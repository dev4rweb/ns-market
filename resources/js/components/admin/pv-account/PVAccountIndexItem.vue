<template>
    <tr>
        <th class="text-center" scope="row">{{ index + 1 }}</th>
        <td class="text-center">{{ item.id }}</td>
        <td>{{ item.period }}</td>
        <td>{{ item.wallet_id }}</td>
        <td>{{ item.balance }}</td>
        <td>
            <button
                class="btn btn-outline-info me-3"
                @click="editPvAccount"
            >
                <i class="bi bi-pencil-fill"></i>
            </button>
            <button
                class="btn btn-outline-danger"
                @click="removePVAccount"
            >
                <i class="bi bi-trash"></i>
            </button>
        </td>
    </tr>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'

export default {
    name: "PVAccountIndexItem",
    props: ['item', 'index'],
    methods: {
        ...mapMutations(['setPvAccountEdit']),
        ...mapActions(['removePVAccountAction']),
        editPvAccount() {
            this.setPvAccountEdit(this.item)
        },
        removePVAccount() {
            this.setPvAccountEdit(null)
            this.removePVAccountAction(this.item.id)
        }
    }
}
</script>

<style scoped>

</style>
