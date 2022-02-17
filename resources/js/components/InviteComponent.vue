<template>
    <button
        v-if="invite"
        style="display: none"
        data-toggle="modal"
        data-target="#loginModal"
        ref="loginBtn"
    >
        {{invite}}
    </button>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "InviteComponent",
    props: ['invite'],
    methods: {
        ...mapActions(['hasInviter']),
        openInvite() {
            if (this.invite) {
                localStorage.setItem('invite', this.invite)
            }
            if (this.getInviter) {
                $(this.$refs.loginBtn).click();
            }

        }
    },
    computed: {
        ...mapGetters(['getInviter'])
    },
    mounted() {
        this.hasInviter()
        this.openInvite()
    }
}
</script>

<style scoped>

</style>
