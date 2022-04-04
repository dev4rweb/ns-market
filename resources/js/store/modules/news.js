import {getAllNewsApi} from "../actions/newsApi";

export default {
    state: {
        allNews: null,
        currentNews: null,
        newsCurrentPage: 1
    },
    actions: {
        fetchAllNews({commit, getters}, page = 1) {
            commit('setLoading', true)
            getAllNewsApi(page)
                .then(res => {
                    console.log('fetchAllNews res', res)
                    commit('setAllNews', res.data.models)
                    if (res.data.models.per_page > 1)
                        commit('setNewsCurrentPage', res.data.models.current_page)
                }).finally(() => commit('setLoading', false));
        }
    },
    mutations: {
        setNewsCurrentPage(state, currentPage) {
            state.newsCurrentPage = currentPage
        },
        setAllNews(state, news) {
            state.allNews = news
        },
        setCurrentNews(state, oneNews) {
            state.currentNews = oneNews
        }
    },
    getters: {
        getNewsCurrentPage(state) {
            return state.newsCurrentPage
        },
        getAllNews(state) {
            return state.allNews
        },
        getCurrentNews(state) {
            return state.currentNews
        }
    }
}
