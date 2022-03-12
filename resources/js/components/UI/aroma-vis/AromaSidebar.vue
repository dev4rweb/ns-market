<template>
<div class="aroma-sidebar">
    <div>
        <div class="d-flex justify-content-center mb-3">
            <button class="btn btn-outline-info">
                Очистить фильтр
            </button>
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
            <input class="form-check-input" type="checkbox" value="" id="categoryPair">
            <label class="form-check-label" for="categoryPair">
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
export default {
    name: "AromaSidebar",
    components: {
        SexFilter, ColorFilter, DailyFilter, SmellFilter, SpiritFilter,
        SearchAromaSidebar
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
