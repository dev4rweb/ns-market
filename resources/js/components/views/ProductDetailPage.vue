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
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Breadcrumb from "../UI/Breadcrumb";
import BackBtn from "../UI/BackBtn";
import ProductDetailMainInfo from "../ProductDetailMainInfo";
export default {
    name: "ProductDetailPage",
    props: ['slug'],
    methods: {
        ...mapActions(['getProductDetailData'])
    },
    computed: {
        ...mapGetters(['getProductDetail']),
    },
    mounted() {
        this.getProductDetailData(this.slug)
    },
    components: {
        Breadcrumb, BackBtn, ProductDetailMainInfo
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
