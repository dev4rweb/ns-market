<template>
<div class="mt-3">
    <table
        v-if="getAdminTransactionTypes && getAdminTransactionTypes.length"
        class="table table-bordered border-primary table-striped table-hover"
        style="max-width: 600px;"
    >
        <thead>
        <tr>
            <th
                scope="col"
                style="width: 50px"
                class="text-center"
            >
                #
            </th>
            <th
                scope="col"
                style="width: 50px"
                class="text-center"
            >
                ID
            </th>
            <th
                scope="col"
                style="width: 50px"
                class="text-center"
            >
                Code
            </th>
            <th scope="col">Name</th>
            <th
                scope="col"
                style="width: 120px"
                class="text-center"
            >
                Action
            </th>
        </tr>
        </thead>
        <tbody>
        <TransactionTypeIndexItem
            v-for="(type, index) in getAdminTransactionTypes"
            :type="type"
            :index="index"
            :key="type.id"
        />
        </tbody>
    </table>
    <h4 v-else>No records</h4>
</div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import {getAllTransactionTypesApi} from "../../../store/actions/transactionTypesApi";
import TransactionTypeIndexItem from "./TransactionTypeIndexItem";
export default {
    name: "TransactionsTypeIndex",
    methods: {
        ...mapMutations(['setLoading', 'setAdminTransactionTypes']),
        getAllTransactionTypes() {
            this.setLoading(true)
            getAllTransactionTypesApi()
                .then(res => {
                    console.log('getAllTransactionTypes', res)
                    if (res.data.success) {
                        this.setAdminTransactionTypes(res.data.models)
                    }
                })
                .catch(err => {
                    console.log('getAllTransactionTypes err', err)
                })
                .finally(() => {
                    this.setLoading(false)
                });
        }
    },
    computed: {
      ...mapGetters(['getAdminTransactionTypes'])
    },
    components: {
        TransactionTypeIndexItem
    },
    mounted() {
        this.getAllTransactionTypes()
    }
}
</script>

<style scoped>

</style>
