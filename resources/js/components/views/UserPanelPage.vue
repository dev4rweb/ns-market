<template>
    <div v-if="getAllNews">
        <NewsDetail v-if="getCurrentNews" />
        <NewsItem
            :news="getAllNews.data"
            v-else
        />
<!--        <NewsItem
            :news="getAllNews"
            v-else
        />-->
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import NewsItem from "../UI/news/NewsItem";
import NewsDetail from "../UI/news/NewsDetail";

export default {
    name: "UserPanelPage",
    components: { NewsItem, NewsDetail},
    computed: {
        ...mapGetters(['getCurrentNews', 'getAllNews']),
    },
    methods: {
        ...mapActions(['fetchAllNews']),
    },
    mounted() {
        this.fetchAllNews()
    }
}
</script>

<style scoped>
</style>
