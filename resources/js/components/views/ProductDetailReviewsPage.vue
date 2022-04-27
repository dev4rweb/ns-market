<template>
    <div
        class="detail-product"
        v-if="getProductDetail"
    >
        <Breadcrumb/>
        <div class="container d-flex align-items-center mb-3">
            <BackBtn :pathTo="backPath"/>
            <h1>{{ getProductDetail.print_name }}</h1>
        </div>
        <ProductDetailMainInfo/>

        <div class="container">
            <NavProductData/>

            <div class="card p-3">
                <p
                    v-if="getCurrentCategory.slug.includes('masterdoktor')"
                    class="notice"
                >
                    <b>*</b> Опубликованные результаты применения продуктов программы активного долголетия линии Мастер Доктор не
                    являются основанием для отказа от приема назначенных лекарственных препаратов и квалифицированной
                    врачебной помощи.
                </p>
                <div
                    ref="startPage"
                    class="d-flex justify-content-center"
                >
                    <button
                        class="btn btn-success me-3"
                        @click="createReview"
                    >
                        Оставить свой отзыв
                    </button>
                    <a
                        href="/reviews"
                        class="btn btn-info"
                    >
                        Смотреть все отзывы
                    </a>
                </div>
            </div>

            <div>
                <CanCreateReviewModal />
                <CannotCreateReviewModal />
                <CreatedReviewModalSuccess  />
            </div>

            <ProductReviews
                v-if="getProductDetail.review_keyword"
                :keyword="getProductDetail.review_keyword"
            />

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
import NavProductData from "../UI/NavProductData";
import ProductCard from "../UI/ProductCard";
import ProductReviews from "../page-parts/detail-product/ProductReviews";
import {jumpToPage} from "../../store/utils/jumpToPage";
import CanCreateReviewModal from "../Modals/CanCreateReviewModal";
import CannotCreateReviewModal from "../Modals/CannotCreateReviewModal";
import CreatedReviewModalSuccess from "../Modals/CreatedReviewModalSuccess";

export default {
    name: "ProductDetailReviewsPage",
    props: ['slug'],
    data() {
        return {
            backPath: null
        }
    },
    methods: {
        ...mapActions(['getProductDetailData', 'fetchPhysicalPerson',
        'createReviewAction']),
        createReview() {
            this.createReviewAction()
        }
    },
    computed: {
        ...mapGetters(['getProductDetail', 'isPartner', 'isProfessionalStatus',
        'getCurrentCategory', 'getCurrentUser', 'isShowModalCanCreateReview',
        'isShowModalCannotCreateReview', 'isShowCreatedReviewModalSuccess']),
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
        NavProductData, ProductReviews, ProductCard,
        CanCreateReviewModal, CannotCreateReviewModal,
        CreatedReviewModalSuccess
    }
}
</script>

<style lang="scss" scoped>
.detail-product {
    min-height: calc(100vh - 222px - 288px);
}

.notice {
    font-size: 16px;
    line-height: 16px;
    color: red;
    font-style: italic;

    b{
        font-size: 22px;
        font-weight: bold;
        margin-right: 20px;
    }
}

h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    color: #333333;
}
</style>

