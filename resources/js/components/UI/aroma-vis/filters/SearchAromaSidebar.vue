<template>
    <div class="search-aroma-sidebar">
        <h3>Расширенный поиск</h3>
        <input
            type="search"
            placeholder="поиск по словам"
            :value="getSearchAromaSidebar"
            @input="searching"
        >
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "SearchAromaSidebar",
    methods: {
        ...mapMutations(['setSearchAromaSidebar']),
        searching(e) {
            console.log('searching', this.getSearchAromaSidebar)
            this.setSearchAromaSidebar(e.target.value)
        }
    },
    computed: {
        ...mapGetters(['getSearchAromaSidebar'])
    }
}
</script>

<style lang="scss" scoped>
.search-aroma-sidebar {
    h3 {
        text-align: center;
    }
    input {
        width: 100%;
        height: 44px;
        border: 1px solid #999999;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        padding: 10px 16px;
        font-style: italic;
        font-weight: 400;
        font-size: 20px;
        line-height: 120%;
    }
}
</style>
