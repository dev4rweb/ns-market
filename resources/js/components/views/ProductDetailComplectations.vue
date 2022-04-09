<template>
    <div
        class="detail-product"
        v-if="getProductDetail"
    >
        <Breadcrumb />
        <div class="container d-flex align-items-center mb-3">
            <BackBtn :pathTo="backPath"/>
            <h1>{{getProductDetail.print_name}}</h1>
        </div>
        <ProductDetailMainInfo />

        <div class="container">
            <NavProductData />
            <ProductKits />
            <div v-if="getProductDetail.effective_combinations && getProductDetail.effective_combinations.length > 0">
                <h3 class="mb-3">Вас также могут заинтересовать</h3>
                <div class="d-flex justify-content-between flex-wrap mb-5">
                    <ProductCard
                        v-for="product in getProductDetail.effective_combinations"
                        :product="product"
                        :isPartner="isPartner"
                        :key="product.id"
                        :isProfessionalStatus="isProfessionalStatus"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Breadcrumb from "../UI/Breadcrumb";
import BackBtn from "../UI/BackBtn";
import ProductDetailMainInfo from "../ProductDetailMainInfo";
import ProductCard from "../UI/ProductCard";
import NavProductData from "../UI/NavProductData";
import ProductKits from "../page-parts/detail-product/ProductKits";
import {jumpToPage} from "../../store/utils/jumpToPage";
export default {
    name: "ProductDetailComplectations",
    props: ['slug'],
    data() {
        return {
            backPath: null
        }
    },
    methods: {
        ...mapActions(['getProductDetailData','fetchPhysicalPerson'])
    },
    computed: {
        ...mapGetters(['getProductDetail', 'isPartner', 'isProfessionalStatus']),
    },
    mounted() {
        if (window.User) {
            this.fetchPhysicalPerson()
        }
        this.getProductDetailData(this.slug)
        this.backPath = jumpToPage(window.location.href, 6)
    },
    components: {
        Breadcrumb, BackBtn, ProductDetailMainInfo,
        NavProductData, ProductKits, ProductCard
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


