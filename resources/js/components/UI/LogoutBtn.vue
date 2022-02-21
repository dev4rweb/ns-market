<template>
    <button
        class="btn btn-link"
        @click="logout"
    >
        Выйти
    </button>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
export default {
    name: "LogoutBtn",
    methods: {
        ...mapMutations(['setLoading']),
        ...mapActions(['removeLSOrderAction', 'createBasketOrderOnServer']),
        logout() {
            console.log('logout')
            this.setLoading(true)
            axios.post('/logout')
                .then(res => {
                    console.log('logout res', res)
                    if (res.status === 204) {
                        if (this.getLSOrder) {
                            this.createBasketOrderOnServer()
                            this.removeLSOrderAction()
                        }
                        window.location.href = '/';
                    }

                })
                .catch(err => {
                    console.log('logout err', err)
                    if (er.status === 419) {
                        document.getElementById('logout-form').submit()
                    }
                })
                .finally(() => {
                    this.setLoading(false)
                });
        }
    },
    computed: {
        ...mapGetters(['getLSOrder'])
    }
}
</script>

<style scoped>

</style>
