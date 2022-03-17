<template>
    <div class="mb-5">
        <CatalogProductsHeader />
        <Breadcrumb />
        <div class="mb-3">
            <NavCatalog :slug="slug" />
        </div>
        <div
            class="container aroma-section"
            v-if="getCurrentCategory && getCurrentCategory.slug.toLowerCase().includes('aromavis')"
        >
            <AromaSidebar />
            <div>
                <AromaProductCard
                    v-if="getAromaGroupsFilter"
                    v-for="product in getAromaGroupsFilter"
                    :product="product"
                    :key="product.id"
                />
            </div>

        </div>
        <div
            class="container products-container"
            v-else
        >
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
import CatalogProductsHeader from "../page-parts/headers/CatalogProductsHeader";
import AromaSidebar from "../UI/aroma-vis/AromaSidebar";
import AromaProductCard from "../UI/aroma-vis/AromaProductCard";
export default {
    name: "CategoryPage",
    props: ['slug'],

    methods: {
        ...mapActions(['getCategoryPage', 'fetchPhysicalPerson'])
    },
    computed: {
        ...mapGetters(['getCurrentCategory', 'getCategoryProducts',
            'getPhysicalPerson', 'isProfessionalStatus', 'getAromaGroupsFilter']),

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
        ProductCard, NavCatalog, Breadcrumb, CatalogProductsHeader,
        AromaSidebar, AromaProductCard
    },
    mounted() {
        const data = {
            slug: this.slug,
            page: 'products'
        }
        console.log('Category page data', data)
        this.getCategoryPage(data)
        console.log('auth user', window.User)
        if (window.User) {
            this.fetchPhysicalPerson()
        }
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
.aroma-section{
    display: grid;
    grid-template-columns: 360px auto;
    grid-gap: 30px;
    justify-content: space-between;
}
</style>
