<template>
    <div class="mt-3">
        <table
            v-if="getAdminTransactions.length"
            class="table table-responsive table-bordered border-primary table-striped table-hover"
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
                    project_id
                </th>
                <th scope="col">type_code</th>
                <th scope="col">from_account_id</th>
                <th scope="col">to_account_id</th>
                <th scope="col">amount</th>
                <th scope="col">currency_code</th>
                <th scope="col">document</th>
                <th scope="col">comment</th>
                <th scope="col">creator_id</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
                <TransactionIndexItem
                    v-for="(item, index) in getAdminTransactions"
                    :item="item"
                    :index="index"
                    :key="item.id"
                />
            </tbody>
        </table>
        <h4 v-else>No records</h4>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import TransactionIndexItem from "./TransactionIndexItem";
import {transactionsIndexApi} from "../../../store/actions/transactionsApi";

export default {
    name: "TransactionIndex",
    methods: {
        ...mapMutations(['setLoading', 'setAdminTransactions']),
        getAllTransactions() {
            this.setLoading(true)
            transactionsIndexApi()
                .then(res => {
                    console.log('getAllTransactions', res)
                    if (res.data.success) {
                        this.setAdminTransactions(res.data.models)
                    }
                })
                .catch(err => {
                    console.log('getAllTransactions err', err)
                })
                .finally(() => {
                    this.setLoading(false)
                });
        }
    },
    computed: {
      ...mapGetters(['getAdminTransactions'])
    },
    components: {
        TransactionIndexItem
    },
    mounted() {
        this.getAllTransactions()
    }
}
</script>

<style scoped>

</style>
