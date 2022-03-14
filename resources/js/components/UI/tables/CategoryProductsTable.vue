<template>
    <table
        class="table table-lg table-responsive-lg table-light table-bordered border-secondary table-striped table-hover shadow-lg">
        <thead class="table-primary">
        <tr>
            <th scope="col">#</th>
            <th style="width: 120px" scope="col">Код</th>
            <th scope="col">Наименование</th>
            <th style="width: 90px;" scope="col">Кол-во</th>
            <th scope="col">Цена</th>
            <th scope="col">Баллов</th>
        </tr>
        </thead>
        <tbody>
        <ProductListItem
            v-if="getCategoryProducts"
            v-for="(product, i) in getCategoryProducts"
            :product="product"
            :isPartner="isPartner"
            :index="i"
            :key="product.id"
            :isProfessionalStatus="isProfessionalStatus"
        />
        </tbody>
    </table>
</template>

<script>
import {mapGetters} from 'vuex'
import ProductListItem from "../ProductListItem";

export default {
    name: "CategoryProductsTable",
    computed: {
        ...mapGetters(['getCategoryProducts', 'isPartner', 'isProfessionalStatus'])
    },
    components: {
        ProductListItem
    }
}
</script>

<style scoped>

</style>
