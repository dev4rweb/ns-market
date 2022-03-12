<template>
<div>
    <CatalogProductsHeader />
    <Breadcrumb />
    <div class="mb-3">
        <NavCatalog :slug="slug" />
    </div>
    <div class="container"
         v-if="getCategoryProducts">
        <table class="table table-lg table-responsive-lg table-light table-bordered border-secondary table-striped table-hover shadow-lg">
            <thead  class="table-primary">
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

        <div class="d-flex justify-content-center mb-5">
            <a
                href="/catalog"
                class="btn btn-lg btn-success me-3"
            >Добавить и перейти в каталог
            </a>
            <a
                href="/catalog"
                class="btn btn-lg btn-success"
            >Добавить и перейти в корзину
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
import ProductListItem from "../UI/ProductListItem";
import CatalogProductsHeader from "../page-parts/headers/CatalogProductsHeader";
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
            'getPhysicalPerson', 'isProfessionalStatus', 'isPartner']),
    },
    components: {
        NavCatalog, ProductListItem, Breadcrumb,
        CatalogProductsHeader
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
