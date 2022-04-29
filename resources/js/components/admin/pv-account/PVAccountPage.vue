<template>
<div>
    <h3>PVAccountPage</h3>
    <PVAccountUpdate v-if="getPvAccountEdit" />
    <PVAccountCreate v-else />
    <PVAccountIndex />
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import PVAccountIndex from "./PVAccountIndex";
import PVAccountCreate from "./PVAccountCreate";
import PVAccountUpdate from "./PVAccountUpdate";
export default {
    name: "PVAccountPage",
    computed: {
        ...mapGetters(['getPvAccountEdit'])
    },
    components: {
        PVAccountIndex, PVAccountCreate, PVAccountUpdate
    }
}
</script>

<style scoped>

</style>
