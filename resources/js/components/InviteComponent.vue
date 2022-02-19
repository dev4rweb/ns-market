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
import {mapActions, mapGetters, mapMutations} from 'vuex'
export default {
    name: "InviteComponent",
    props: ['invite'],
    methods: {
        ...mapActions(['hasInviter']),
        ...mapMutations(['setInviter']),
        openInvite() {
            if (this.invite) {
                localStorage.setItem('invite', this.invite)
                this.hasInviter()
                $(this.$refs.loginBtn).click();
            }
        }
    },
    computed: {
        ...mapGetters(['getInviter'])
    },
    mounted() {
        this.openInvite()
    }
}
</script>

<style scoped>

</style>
