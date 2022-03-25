<template>
    <div class="mb-5">
        <BackBtn path-to="/catalog/products/AromaVis" />

        <div class="d-flex justify-content-between align-items-center mt-3">
            <div class="me-5">
                <h4 class="mb-0">Ваш выбор:</h4>
                <TextFilterResult />
            </div>

            <MultiCarouselAromaFilter :curProdGroup="curProdGroup" />
        </div>

    </div>
</template>

<script>
import MultiCarouselAromaFilter from "../../MultiCarouselAromaFilter";
import BackBtn from "../../BackBtn";
import TextFilterResult from "./TextFilterResult";
export default {
    name: "QuickFilter",
    props: ['curProdGroup'],
    components: {
        MultiCarouselAromaFilter, BackBtn, TextFilterResult
    }
}
</script>

<style lang="scss" scoped>
</style>
