<template>
<div>
    <a
        v-if="isServiceCenter === false"
        href="/user-invite"
        class="btn btn-secondary"
    >
        Пригласить в New Star
    </a>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "BtnInvite",
    computed: {
        ...mapGetters(['isServiceCenter'])
    }
}
</script>

<style scoped>

</style>
