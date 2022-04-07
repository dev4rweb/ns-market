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
                >
                    Оставить свой отзыв
                </button>
            </div>
            <ProductReviews :keyword="keyword"/>
        </div>
    </div>
</template>

<script>
import revImg from '../../../assets/img/review-image.jpg'
import ProductReviews from "../page-parts/detail-product/ProductReviews";
import {mapActions, mapGetters, mapMutations} from 'vuex'
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
        ...mapActions(['fetchAllReviewsByQueryAction']),
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
        }
    },
    computed: {
        ...mapGetters(['getReviewKeyword']),
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
        ProductReviews
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
</style>
