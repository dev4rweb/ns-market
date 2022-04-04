<template>
    <div
        v-if="news"
        class="row"
    >
        <div
            class="card news-card"
            v-for="i in news"
            :key="i.id"
            @click="selectNews(i)"
        >
<!--            <img
                class="img-preview"
                :src="newsOne"
                alt="card">-->
            <img
                class="img-preview"
                :src="getImagePath(i.prev_img_path)"
                alt="card">
<!--            <img
                class="img-preview"
                :src="getImagePath(i.prevImgPath)"
                alt="card">-->
            <div class="card-body news-content">
                <h6>{{ dateStartNews(i.date_start) }}</h6>
                <h3>{{ i.title }}</h3>
                <p>{{ i.description }}</p>
                <div class="btn-wrapper">
                    <button class="btn btn-link">Читать далее ></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import newsOne from '../../../../assets/img/news-one.png'
import newsTwo from '../../../../assets/img/news-two.png'
import {mapMutations} from 'vuex'
import {WORK_HOST} from "../../../store/routeConsts";

export default {
    name: "NewsItem",
    props: ['news'],
    data() {
        return {
            newsOne, newsTwo
        }
    },
    methods: {
        ...mapMutations(['setCurrentNews']),
        getImagePath(path) {
            if (path) {
                let HOST = WORK_HOST.replace('/api/', '')
                return HOST + path
            }
        },
        dateStartNews(dateStart) {
            if (dateStart) {
                const date = new Date(dateStart)
                let day = date.getDate()
                day = day < 10 ? '0' + day : day
                let month = date.getMonth()
                month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
                let year = date.getFullYear()
                return `${day}.${month}.${year}`
            }
            return ''
        },
        selectNews(oneNews) {
            console.log('selectNews ', oneNews)
            this.setCurrentNews(oneNews)
        }
    },
}
</script>

<style lang="scss" scoped>
.btn-link {
    color: #038ED7;
    font-size: 19px;
    font-style: italic;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;

    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.1, 1.1);
        -moz-transform: scale(1.1, 1.1);
        -ms-transform: scale(1.1, 1.1);
        -o-transform: scale(1.1, 1.1);
        transform: scale(1.1, 1.1);
    }
}
</style>
