<template>
    <div
        v-if="getCurrentNews"
        class="card news-card flex-column align-items-center"
    >
        <div class="d-flex justify-content-center">
            <img :src="getImagePath" alt="news">
            <!--            <img :src="newsTwo" alt="news">-->
        </div>
        <h1 class="mb-3 text-center">{{ getCurrentNews.title }}</h1>
<!--        <div v-html="getCurrentNews.detail_text"></div>-->
        <div v-html="getCurrentNews.detailText"></div>
        <div class="d-flex justify-content-end mt-3">
            <button
                class="btn btn-lg btn-info"
                @click="backToList"
            >
                Назад к списку новостей
            </button>
        </div>
    </div>
</template>

<script>
import newsTwo from '../../../../assets/img/news-two.png'
import {mapGetters, mapMutations} from 'vuex'
import {WORK_HOST} from "../../../store/routeConsts";

export default {
    name: "NewsDetail",
    data() {
        return {
            newsTwo
        }
    },
    computed: {
        ...mapGetters(['getCurrentNews']),
        getImagePath() {
            if (this.getCurrentNews.detail_img_path) {
                let HOST = WORK_HOST.replace('/api', '')
                return `${HOST}${this.getCurrentNews.detail_img_path}`
            }
            if (this.getCurrentNews.detailImgPath) {
                let HOST = WORK_HOST.replace('/api', '')
                return `${HOST}${this.getCurrentNews.detailImgPath}`
            }
            return newsTwo
        },
    },
    methods: {
        ...mapMutations(['setCurrentNews']),
        backToList() {
            this.setCurrentNews(null)
        }
    }
}
</script>

<style scoped>
h1 {
    color: black
}

img {
    width: 100%;
}
</style>
