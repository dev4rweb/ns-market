<template>
    <div v-if="getAllNews">
        <NewsDetail v-if="getCurrentNews"/>
        <NewsItem
            :news="getAllNews.data"
            v-else
        />
        <nav
            v-if="getAllNews.per_page > 1 && !getCurrentNews"
            aria-label="Page navigation"
        >
            <ul class="pagination justify-content-center">
                <li
                    class="page-item"
                    v-for="page in getAllNews.per_page"
                    :class="{'active': isActive(page)}"
                    @click="changeNewsPage(page)"
                >
                    <button
                        class="page-link"
                    >
                        {{ page }}
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import NewsItem from "../UI/news/NewsItem";
import NewsDetail from "../UI/news/NewsDetail";

export default {
    name: "UserPanelPage",
    data() {
        return {
            page: 1
        }
    },
    components: {NewsItem, NewsDetail},
    computed: {
        ...mapGetters(['getCurrentNews', 'getAllNews']),
    },
    methods: {
        ...mapActions(['fetchAllNews']),
        isActive(page) {
            return this.getAllNews.current_page === page
        },
        changeNewsPage(page) {
            if (this.getAllNews.current_page !== page)
                this.fetchAllNews(page)
        }
    },
    mounted() {
        this.fetchAllNews()
    }
}
</script>

<style scoped>
</style>
