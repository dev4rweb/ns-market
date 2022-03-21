<template>
    <div class="mb-5">
        <CatalogProductsHeader />
        <Breadcrumb />
        <div
            class="mb-3 aroma-detail"
            v-if="curProducts"
        >
            <div class="container">
                <div class="pt-3">
                    <QuickFilter />
                </div>
                <div class="d-flex justify-content-between">
                    <CategoryOil />
                    <Pyramid />
                </div>
                {{ curProducts }}
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CatalogProductsHeader from "../../page-parts/headers/CatalogProductsHeader";
import Breadcrumb from "../../UI/Breadcrumb";
import QuickFilter from "../../UI/aroma-vis/filters/QuickFilter";
import CategoryOil from "../../UI/aroma-vis/CategoryOil";
import Pyramid from "../../UI/aroma-vis/Pyramid";
export default {
    name: "ProductAromaDetailPage",
    props: ['slug'],
    methods: {
        ...mapActions(['getCategoryPage', 'fetchPhysicalPerson'])
    },
    computed: {
        ...mapGetters(['getCategoryProducts']),
        curProducts() {
            if (this.getCategoryProducts.length) {
                const products = this.getCategoryProducts
                    .filter(i => i.name.includes(this.slug))
                console.log('cur products', products)
                return products
            } else return null
        }
    },
    components: {
        CatalogProductsHeader, Breadcrumb, QuickFilter, CategoryOil, Pyramid
    },
    mounted() {
        const data = {
            slug: 'AromaVis',
            page: 'products'
        }
        this.getCategoryPage(data)
        console.log('auth user', window.User)
        if (window.User) {
            this.fetchPhysicalPerson()
        }
    }
}
</script>

<style lang="scss" scoped>
.aroma-detail{
    background-color: #fff;
}
</style>
