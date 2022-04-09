<template>
    <div
        v-if="getAllReviews && getAllReviews.data.length"
        class="card shadow-lg mb-3 p-3"
    >
        <div
            v-for="review in getAllReviews.data"
            :key="review.id"
            class="card shadow-lg mb-3 p-3"
        >
            <div class="d-flex justify-content-between align-items-center">
                <h3>{{ getReviewTitle(review) }}</h3>
                <span>{{ getDateReview(review) }}</span>
            </div>
<!--            <p> {{ review.comment }} </p>-->
            <p v-html="highLightSearchingWord(review.comment)"></p>
        </div>

        <nav
            v-if="getAllReviews.last_page > 1"
            aria-label="Page navigation"
        >
            <ul class="pagination justify-content-center">
                <li
                    class="page-item"
                    v-for="page in getAllReviews.last_page"
                    :class="{'active': isActive(page)}"
                    @click="changeReviewsPage(page)"
                >
                    <button class="page-link">
                        {{ page }}
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import {declensionRusAge} from "../../../store/utils/declensionRusAge";

export default {
    name: "ProductReviews",
    props: ['keyword'],
    data() {
        return {
            page: 1
        }
    },
    methods: {
        ...mapActions(['fetchAllReviewsByQueryAction']),
        ...mapMutations(['setReviewsCurrentPage', 'setReviewKeyword']),
        getReviewTitle(review) {
            const gender = review.gender === 0 ? 'Мужчина' : 'Женщина'
            const age = declensionRusAge(review.age)
            return `${gender}, ${review.age} ${age}`
        },
        isActive(page) {
            return this.getAllReviews.current_page === page
        },
        changeReviewsPage(page) {
            if (this.getAllReviews.current_page !== page)
                this.setReviewsCurrentPage(page)
                this.fetchAllReviewsByQueryAction()
        },
        getDateReview(review) {
            if (review.created_at) {
                const date = new Date(review.created_at)
                const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
                const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
                const hours = date.getHours()
                const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
                return `${day}.${month}.${date.getFullYear()} ${hours}:${minutes}`;
            }
            return ''
        },
        highLightSearchingWord(words) {
            if (words) {
                return words.replace(this.getReviewKeyword,
                `<b>${this.getReviewKeyword}</b>`)
            }
        }
    },
    computed: {
        ...mapGetters(['getAllReviews', 'getReviewsCurrentPage', 'getReviewKeyword'])
    },
    mounted() {
        this.setReviewKeyword(this.keyword)
        this.fetchAllReviewsByQueryAction()
    }
}
</script>

<style lang="scss" scoped>
.card {
    h3, span {
        font-style: normal;
        font-size: 18px;
        line-height: 120%;
    }

    h3{
        font-weight: 600;
        /* identical to box height, or 22px */
        text-transform: uppercase;
    }

    span{
        font-weight: 400;
        text-transform: capitalize;
        font-style: italic;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
    }
}
</style>
