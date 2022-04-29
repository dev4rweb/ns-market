<template>
<div class="mt-3">
    <table
        v-if="getPVAccounts.length"
        class="table table-bordered border-primary table-striped table-hover"
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
                class="text-center"
            >
                period
            </th>
            <th
                scope="col"
            >
                wallet_id
            </th>
            <th
                scope="col"
            >
                balance
            </th>
            <th
                scope="col"
            >
                Actions
            </th>
        </tr>
        </thead>
        <tbody>
            <PVAccountIndexItem
                v-for="(item, index) in getPVAccounts"
                :item="item"
                :key="item.id"
                :index="index"
            />
        </tbody>
    </table>
    <h4 v-else>No records</h4>
</div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import PVAccountIndexItem from "./PVAccountIndexItem";
import {pvAccountIndexApi} from "../../../store/actions/pvAccountsApi";
export default {
    name: "PVAccountIndex",
    methods: {
        ...mapMutations(['setLoading', 'setPVAccounts']),
        getAllPVAccounts() {
            this.setLoading(true)
            pvAccountIndexApi()
                .then(res => {
                    console.log('getAllPVAccounts', res)
                    if (res.data.success) this.setPVAccounts(res.data.models)
                })
                .catch(err => {
                    console.log('getAllPVAccounts err', err)
                })
                .finally(() => {
                    this.setLoading(false)
                });
        }
    },
    computed: {
        ...mapGetters(['getPVAccounts'])
    },
    components: {
        PVAccountIndexItem
    },
    mounted() {
        this.getAllPVAccounts()
    }
}
</script>

<style scoped>

</style>
