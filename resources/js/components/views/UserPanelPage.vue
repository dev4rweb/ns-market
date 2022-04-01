<template>
    <div>
        <div class="row">
            <div
                class="card news-card"
                v-if="getAllNews"
                v-for="i in getAllNews"
                :key="i.id"
            >
                <img
                    class="img-preview"
                    :src="newsOne"
                    alt="card">
                <div class="card-body news-content">
                    <h3>{{i.title}}</h3>
                    <p>{{i.description}}</p>
                    <div class="btn-wrapper">
                        <button class="btn btn-outline-info">Читать далее</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import newsOne from '../../../assets/img/news-one.png'
import newsTwo from '../../../assets/img/news-two.png'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "UserPanelPage",
    data() {
        return {
            newsOne, newsTwo
        }
    },
    computed: {
        ...mapGetters(['getAllNews'])
    },
    methods: {
        ...mapActions(['fetchAllNews'])
    },
    mounted() {
        this.fetchAllNews()
    }
}
</script>

<style scoped>

</style>
