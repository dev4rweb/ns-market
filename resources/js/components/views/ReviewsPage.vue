<template>
    <div class="container mb-5">
        <div class="card shadow-lg mt-3 mb-3 p-3">
            <h1
                class="text-center "
            >
                Отзывы наших Клиентов
            </h1>
            <div class="d-flex justify-content-between align-items-center">
                <img
                    class="w-50 me-5"
                    :src="revImg"
                    alt=""
                >
                <ol>
                    <li>
                        Все отзывы являются подлинными и поступают в Компанию двумя способами: рукописные варианты, либо
                        отзывы, отправленные через специальную форму на сайте Компании.
                    </li>
                    <li>
                        Отзывы публикуются анонимно, чтобы любой человек смог легко поделиться даже теми результатами, о
                        которых, бывает, неудобно говорить вслух.
                    </li>
                    <li>
                        Оригиналы рукописных отзывов находятся в архиве New Star.
                    </li>
                    <li>
                        Перед публикацией на сайте в отзывах исправляются синтаксические и орфографические ошибки.
                        Стилистика авторов при этом сохраняется!
                    </li>
                </ol>
            </div>
        </div>
        <div class="card shadow-lg p-3 mb-3">
            <div class="d-flex justify-content-between align-items-center">
                <div class="form-group-blue w-50 d-flex position-relative align-items-center">
                    <input
                        type="search"
                        class="form-control-lg w-100"
                        aria-describedby="basic-addon1"
                        placeholder="Поиск... "
                        v-model="keywordHandler"
                        @change="searchingReviews"
                        @input="clearField"
                        @blur="isIconsShow = true"
                        @focus="isIconsShow = false"
                    >
                    <i
                        v-if="isIconsShow"
                        class="bi bi-search"
                    ></i>
                </div>
                <button
                    class="btn btn-lg btn-info"
                    @click="createReview"
                >
                    Оставить свой отзыв
                </button>
            </div>

            <div>
                <transition name="fade">
                    <CanCreateReviewModal v-if="isShowModalCanCreateReview"/>
                </transition>
                <transition name="fade">
                    <CannotCreateReviewModal v-if="isShowModalCannotCreateReview"/>
                </transition>
                <transition name="fade">
                    <CreatedReviewModalSuccess v-if="isShowCreatedReviewModalSuccess"/>
                </transition>
            </div>

            <ProductReviews :keyword="keyword"/>
        </div>
    </div>
</template>

<script>
import revImg from '../../../assets/img/review-image.jpg'
import ProductReviews from "../page-parts/detail-product/ProductReviews";
import {mapActions, mapGetters, mapMutations} from 'vuex'
import CanCreateReviewModal from "../Modals/CanCreateReviewModal";
import CannotCreateReviewModal from "../Modals/CannotCreateReviewModal";
import CreatedReviewModalSuccess from "../Modals/CreatedReviewModalSuccess";

export default {
    name: "ReviewsPage",
    data() {
        return {
            revImg,
            isIconsShow: true,
            keyword: ''
        }
    },
    methods: {
        ...mapActions(['fetchAllReviewsByQueryAction', 'fetchPhysicalPerson',
            'createReviewAction']),
        ...mapMutations(['setReviewKeyword']),
        searchingReviews() {
            console.log('searchingReviews', this.keyword)
            this.fetchAllReviewsByQueryAction()
        },
        clearField() {
            if (this.getReviewKeyword === '') {
                console.log('clearField', this.keyword)
                this.fetchAllReviewsByQueryAction()
            }
        },
        createReview() {
            this.createReviewAction()
        }
    },
    computed: {
        ...mapGetters(['getReviewKeyword', 'isShowModalCanCreateReview',
            'isShowModalCannotCreateReview', 'isShowCreatedReviewModalSuccess']),
        keywordHandler: {
            get: function () {
                return this.getReviewKeyword
            },
            set: function (value) {
                this.setReviewKeyword(value)
            }
        }
    },
    components: {
        ProductReviews,
        CanCreateReviewModal, CannotCreateReviewModal,
        CreatedReviewModalSuccess
    },
    mounted() {
        if (window.User) {
            this.fetchPhysicalPerson()
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    color: #333333;
}

ol {
    font-size: 18px;
}

.bi-search {
    margin-left: -38px;
    font-size: 25px;
    font-weight: bold;
}


.fade-enter-active, .fade-leave-active {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1;
    transition: all .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    -webkit-transform: scale(0, 0);
    -moz-transform: scale(0, 0);
    -ms-transform: scale(0, 0);
    -o-transform: scale(0, 0);
    transform: scale(0, 0);
}
</style>
