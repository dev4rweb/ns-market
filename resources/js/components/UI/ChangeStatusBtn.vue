<template>
    <button
        class="btn btn-outline-info"
        @click="toggleStatus"
    >
        <!--                        Загрузить паспорт-->
        Сменить статус
    </button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: "ChangeStatusBtn",
    methods: {
        ...mapActions(['toggleStatus'])
    }
}
</script>

<style scoped>

</style>
