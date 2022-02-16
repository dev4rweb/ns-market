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
export default {
    name: "InviteComponent",
    props: ['invite'],
    methods: {
        openInvite() {
            $(this.$refs.loginBtn).click()
            localStorage.setItem('invite', this.invite)
        }
    },
    mounted() {
        this.openInvite()
    }
}
</script>

<style scoped>

</style>
