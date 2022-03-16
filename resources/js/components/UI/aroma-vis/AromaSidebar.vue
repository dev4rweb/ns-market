<template>
<div class="aroma-sidebar">
    <div>
        <div class="d-flex mb-3">
            <ToggleAromaFilter />
        </div>
        <SexFilter />
        <hr class="divider">
        <ColorFilter />
        <hr class="divider">
        <SearchAromaSidebar />
        <hr class="divider">
        <DailyFilter />
        <hr class="divider">
        <SmellFilter />
        <hr class="divider">
        <SpiritFilter />
        <hr class="divider">
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="categoryPair"
                id="categoryPair">
            <label
                class="form-check-label"
                for="categoryPair">
                Парные
            </label>
        </div>
    </div>
</div>
</template>

<script>
import SexFilter from "./filters/SexFilter";
import ColorFilter from "./filters/ColorFilter";
import DailyFilter from "./filters/DailyFilter";
import SmellFilter from "./filters/SmellFilter";
import SpiritFilter from "./filters/SpiritFilter";
import SearchAromaSidebar from "./filters/SearchAromaSidebar";
import ToggleAromaFilter from "../ToggleAromaFilter";
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "AromaSidebar",
    methods: {
        ...mapActions(['fetchCategoryPair'])
    },
    computed: {
        ...mapGetters(['getCategoryPair']),
        categoryPair: {
            get: function () {
                return this.getCategoryPair
            },
            set: function () {
                this.fetchCategoryPair(!this.getCategoryPair)
            }
        },
    },
    components: {
        SexFilter, ColorFilter, DailyFilter, SmellFilter, SpiritFilter,
        SearchAromaSidebar, ToggleAromaFilter
    }
}
</script>

<style lang="scss" scoped>
.aroma-sidebar{
    position: relative;
    padding: 16px;
    background: #FFFFFF;
    border-radius: 8px;
    max-height: 1490px;

    .divider {
        height: 1px;
        margin-left: -16px;
        margin-right: -16px;
        background-color: rgba(96, 130, 159, 0.41);
    }
}
</style>
