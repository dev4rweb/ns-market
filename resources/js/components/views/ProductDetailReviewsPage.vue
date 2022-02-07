<template>
    <div
        class="detail-product"
        v-if="getProductDetail"
    >
        <Breadcrumb />
        <div class="container d-flex align-items-center mb-3">
            <BackBtn />
            <h1>{{getProductDetail.print_name}}</h1>
        </div>
        <ProductDetailMainInfo />

        <div class="container">
            <NavProductData />
            <ProductReviews />
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Breadcrumb from "../UI/Breadcrumb";
import BackBtn from "../UI/BackBtn";
import ProductDetailMainInfo from "../ProductDetailMainInfo";
import NavProductData from "../UI/NavProductData";
import ProductReviews from "../page-parts/detail-product/ProductReviews";
export default {
    name: "ProductDetailReviewsPage",
    props: ['slug'],
    methods: {
        ...mapActions(['getProductDetailData','fetchPhysicalPerson'])
    },
    computed: {
        ...mapGetters(['getProductDetail']),
    },
    mounted() {
        this.fetchPhysicalPerson()
        this.getProductDetailData(this.slug)
    },
    components: {
        Breadcrumb, BackBtn, ProductDetailMainInfo,
        NavProductData, ProductReviews
    }
}
</script>

<style lang="scss" scoped>
.detail-product{
    min-height: calc(100vh - 222px - 288px);
}
h1{
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    color: #333333;
}
</style>

