<template>
<div>
    <div
        v-if="getProductDetail.program_components && getProductDetail.program_components.length > 0"
        class="programs_wrapper"
    >
       <div
           class="program-item"
           v-for="product in getProductDetail.program_components"
           :key="product.id"
       >
           <ProgramCard
               :product="product"
           />
       </div>
    </div>
    <h1 v-else>В программе нет информации о составе</h1>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import ProgramCard from "./ProgramCard";
export default {
    name: "ProgramComponents",
    computed: {
        ...mapGetters(['getProductDetail']),
    },
    components: {
        ProgramCard
    }
}
</script>

<style lang="scss" scoped>
.programs_wrapper{
    display: grid;
    grid-template-columns: auto auto auto;

    .program-item{
        justify-self: center;
    }
}
</style>
