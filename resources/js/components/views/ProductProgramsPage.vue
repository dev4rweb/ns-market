<template>
<div class="mb-5">
    <CatalogProductsHeader />
    <Breadcrumb />
    <div class="mb-3">
        <NavCatalog :slug="slug" />
    </div>
    <div class="container products-container">
        <ProductCard
            v-if="getCategoryProducts"
            v-for="product in getCategoryProducts"
            :product="product"
            :isPartner="isPartner"
            :isProfessionalStatus="isProfessionalStatus"
            :key="product.id"
        />
    </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import ProductCard from "../UI/ProductCard";
import NavCatalog from "../UI/NavCatalog";
import Breadcrumb from "../UI/Breadcrumb";
import categoryImg from '../../../assets/img/category-additional.png'
import CatalogProductsHeader from "../page-parts/headers/CatalogProductsHeader";
export default {
    name: "ProductProgramsPage",
    props: ['slug'],
    data() {
        return {
            categoryImg
        }
    },
    methods: {
        ...mapActions(['getCategoryPage', 'fetchPhysicalPerson'])
    },
    computed: {
        ...mapGetters(['getCurrentCategory', 'getCategoryProducts',
            'getPhysicalPerson', 'isProfessionalStatus']),
        isPartner() {
            if (this.getPhysicalPerson) {
                switch (this.getPhysicalPerson.trade_status) {
                    case 'D':
                    case 'K':
                        return true
                    default:
                        return false
                }
            } else {
                return false
            }
        }
    },
    components: {
        ProductCard, NavCatalog, Breadcrumb, CatalogProductsHeader
    },
    mounted() {
        const data = {
            slug: this.slug,
            page: 'programs'
        }
        this.getCategoryPage(data)
    }
}
</script>

<style lang="scss" scoped>
.products-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 30px;
    justify-content: center;
    @media screen and (max-width: 1200px) {
        grid-template-columns: auto auto;
    }
    @media screen and (max-width: 480px) {
        grid-template-columns: auto;
    }
}
</style>
