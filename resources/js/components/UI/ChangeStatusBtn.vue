<template>
    <button
        class="btn btn-outline-info"
        @click="toggleStatus(redirectUrl.url)"
    >
        <!--                        Загрузить паспорт-->
        {{btnName.name}}
    </button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: "ChangeStatusBtn",
    props: ['btnName', 'redirectUrl'],
    methods: {
        ...mapActions(['toggleStatus'])
    }
}
</script>

<style scoped>

</style>
