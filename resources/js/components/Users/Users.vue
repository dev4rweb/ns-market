<template>
    <div>
        <ul class="list-group">
            <li
                class="list-group-item d-flex justify-content-between align-items-center"
                v-for="user in users"
            >
                <p>{{ user.name }}</p>
                <button
                    class="btn btn-danger"
                    @click="removeUser(user)"
                >
                    &times;
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Users",
    data() {
        return {
            users: []
        }
    },
    methods: {
        getAllUsers() {
            axios.get('/api/users')
                .then(res => {
                    console.log('getAllUsers res', res)
                    if (res.data.success) {
                        this.users = res.data.models
                    }
                })
                .catch(err => {
                    console.log('getAllUsers err', err.response.data)
                });
        },
        removeUser(user) {
            console.log('removeUser', user)
            axios.post(`/api/users/${user.id}`, {
                _method: 'DELETE'
            }).then(res => {
                console.log('removeUser res', res)
                if (res.data.success) {
                    const removedUserId = res.data.id
                    this.users = this.users.filter(i => i.id !== parseInt(removedUserId))
                }
            }).catch(err => {
                console.log('removeUser err', err.response.data)
            });
        },
    },
    mounted() {
        this.getAllUsers()
    }
}
</script>

<style scoped>

</style>
