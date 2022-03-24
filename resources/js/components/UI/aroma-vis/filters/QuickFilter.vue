<template>
    <div class="mb-5">
        <h4 class="mb-3">Быстрый просмотр по фильтру:</h4>

        <MultiCarouselAromaFilter :curProdGroup="curProdGroup" />
    </div>
</template>

<script>
import MultiCarouselAromaFilter from "../../MultiCarouselAromaFilter";

export default {
    name: "QuickFilter",
    props: ['curProdGroup'],
    components: {
        MultiCarouselAromaFilter
    }
}
</script>

<style scoped>
</style>
