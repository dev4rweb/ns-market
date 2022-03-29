<template>
  <div class="d-flex align-items-center mt-3">
    <BackBtn path-to="/catalog/products/AromaVis"/>
    <div
        class="d-flex align-items-baseline w-100"
    >
      <h4 style="width: 130px;" class="mb-0 me-2">Ваш выбор:</h4>
      <TextFilterResult v-if="getAromaGroups.length > getAromaGroupsFilter.length"/>
      <p class="mb-0" v-else>все ароматы</p>
    </div>
  </div>
</template>

<script>
import MultiCarouselAromaFilter from "../../MultiCarouselAromaFilter";
import BackBtn from "../../BackBtn";
import TextFilterResult from "./TextFilterResult";
import {mapGetters} from 'vuex'

export default {
  name: "QuickFilter",
  props: ['curProdGroup'],
  components: {
    MultiCarouselAromaFilter, BackBtn, TextFilterResult
  },
  computed: {
    ...mapGetters(['getAromaGroups', 'getAromaGroupsFilter'])
  },
}
</script>

<style lang="scss" scoped>
</style>
