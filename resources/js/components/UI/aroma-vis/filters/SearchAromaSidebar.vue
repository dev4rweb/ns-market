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
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {multiLevelFilter} from "../../../../store/utils/multiLevelFilter";

export default {
    name: "SearchAromaSidebar",
    methods: {
        ...mapMutations(['setSearchAromaSidebar', 'setAromaGroupsFilter']),
        ...mapActions(['fetchIsMainFilterOn']),
        searching(e) {
            // console.log('searching', this.getSearchAromaSidebar)
            if (!this.isAllFiltersOff) {
                this.fetchIsMainFilterOn(true)
            }
            const searchedWord = e.target.value
            this.setSearchAromaSidebar(e.target.value);
            const filtered = this.getAromaGroups.filter(i => {
                return (
                    i.short_description
                    && i.short_description.toLowerCase().includes(searchedWord.toLowerCase())
                    ||
                    i.note_1_description
                    && i.note_1_description.toLowerCase().includes(searchedWord.toLowerCase())
                    ||
                    i.note_2_description
                    && i.note_2_description.toLowerCase().includes(searchedWord.toLowerCase())
                    ||
                    i.note_3_description
                    && i.note_3_description.toLowerCase().includes(searchedWord.toLowerCase())
                    ||
                    i.filter_values[0].name
                    && i.filter_values[0].name.toLowerCase().includes(searchedWord.toLowerCase())
                    ||
                    i.filter_values[1].name
                    && i.filter_values[1].name.toLowerCase().includes(searchedWord.toLowerCase())
                    ||
                    i.filter_values[2].name
                    && i.filter_values[2].name.toLowerCase().includes(searchedWord.toLowerCase())
                )
            });
            // console.log('founded ', filtered)
            this.setAromaGroupsFilter(filtered)
            /*const founded = this.getAromaGroups
                .filter(i => i.short_description.toLowerCase().includes(e.target.value.toLowerCase()))
            this.setAromaGroupsFilter(founded)
            console.log('founded ', founded)*/
        }
    },
    computed: {
        ...mapGetters(['getSearchAromaSidebar', 'getAromaGroups', 'isAllFiltersOff'])
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
