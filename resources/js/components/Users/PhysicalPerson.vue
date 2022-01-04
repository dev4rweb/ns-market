<template>
    <div>
        <Loader v-if="loading"/>
        <p v-if="physicalPerson">
            ID: {{physicalPerson.user_id}}
            <br>Статус: {{physicalPerson.user_type}}
        </p>
    </div>
</template>

<script>
import Loader from "../UI/Loader";

export default {
    name: "PhysicalPerson",
    data() {
        return {
            currentUser: null,
            physicalPerson: null,
            loading: false
        }
    },
    methods: {
        getPhysicalPerson() {
            this.loading = true
            const localHost = 'http://127.0.0.1:8001/api/'
            const productionHost = 'https://admin.newstarmlm.biz/api/'
            const stagingHost = 'http://staging-admin.newstarmlm.biz/api/'
            if (this.currentUser) {
                axios.post(`${stagingHost}market/get-physical-user`, {
                    user_id: this.currentUser.user_id
                }).then(res => {
                    console.log('getPhysicalPerson', res)
                    if (res.data.model)
                        this.physicalPerson = res.data.model
                }).catch(err => {
                    console.log('getPhysicalPerson err', err)
                }).finally(() => {
                    this.loading = false
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
