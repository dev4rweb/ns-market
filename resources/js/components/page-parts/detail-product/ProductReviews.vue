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
            <h3>{{ getReviewTitle(review) }}</h3>
            <p> {{ review.comment }} </p>
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
import {mapActions, mapGetters} from 'vuex'
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
        getReviewTitle(review) {
            const gender = review.gender === 0 ? 'Женщина' : 'Мужчина'
            const age = declensionRusAge(review.age)
            return `${gender}, ${review.age} ${age}`
        },
        isActive(page) {
            return this.getAllReviews.current_page === page
        },
        changeReviewsPage(page) {
            if (this.getAllReviews.current_page !== page)
                this.fetchAllReviewsByQueryAction({
                    page: page,
                    keyword: ''
                })
        }
    },
    computed: {
        ...mapGetters(['getAllReviews'])
    },
    mounted() {
        this.fetchAllReviewsByQueryAction({
            page: this.page,
            keyword: ''
            // keyword: this.keyword
        })
    }
}
</script>

<style lang="scss" scoped>
.card {
    h3 {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        /* identical to box height, or 22px */
        text-transform: uppercase;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
    }
}
</style>
