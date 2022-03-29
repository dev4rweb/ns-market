<template>
<div>
    <CatalogProductsHeader />
    <Breadcrumb />
    <div class="mb-3">
        <NavCatalog :slug="slug" />
    </div>
    <div
        class="container"
         v-if="getCategoryProducts">
        <AromaGroupsTable
            v-if="getAromaGroups.length"
        />
        <CategoryProductsTable
            v-else
        />

        <div class="d-flex justify-content-center mb-5">
            <a
                href="/catalog"
                class="btn btn-lg btn-success me-3"
            >Перейти в каталог
            </a>
            <a
                href="/basket"
                class="btn btn-lg btn-success"
            >Перейти в корзину
            </a>
        </div>
    </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import NavCatalog from "../UI/NavCatalog";
import Breadcrumb from "../UI/Breadcrumb";
import categoryImg from '../../../assets/img/category-additional.png'
import CatalogProductsHeader from "../page-parts/headers/CatalogProductsHeader";
import CategoryProductsTable from "../UI/tables/CategoryProductsTable";
import AromaGroupsTable from "../UI/tables/AromaGroupsTable";
export default {
    name: "ProductListPage",
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
            'getPhysicalPerson', 'getAromaGroups']),
    },
    components: {
        NavCatalog, Breadcrumb, AromaGroupsTable,
        CatalogProductsHeader, CategoryProductsTable
    },
    mounted() {
        const data = {
            slug: this.slug,
            page: 'productList'
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
table {
    font-size: 20px;
}
</style>
