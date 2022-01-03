<template>
    <div>
        <Loader v-if="loading"/>
        <span class="d-none">Physical Person Component</span>
    </div>
</template>

<script>
import Loader from "../UI/Loader";
export default {
    name: "PhysicalPerson",
    data(){
        return {
            currentUser: null,
            loading: false
        }
    },
    methods: {
        getPhysicalPerson() {
            const localHost = 'http://127.0.0.1:8001/api/'
            const productionHost = 'https://admin.newstarmlm.biz/api/'
            const stagingHost = 'http://staging-admin.newstarmlm.biz/api/'
            if (this.currentUser) {
                axios.post(`${stagingHost}market/get-physical-user`, {
                    user_id: this.currentUser.user_id
                }).then(res => {
                    console.log('getPhysicalPerson', res)
                }).catch(err => {
                    console.log('getPhysicalPerson err', err)
                });
            } else {
                console.log('current user - ', this.currentUser)
            }
        }
    },
    mounted() {
        this.currentUser = window.User
        this.getPhysicalPerson()
        console.log('Physical Person Component', this.currentUser)
    },
    components: {
        Loader
    }
}
</script>

<style scoped>

</style>
