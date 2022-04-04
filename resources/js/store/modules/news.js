import {getAllNewsApi} from "../actions/newsApi";

export default {
    state: {
        allNews: null,
        currentNews: null
    },
    actions: {
        fetchAllNews({commit}) {
            commit('setLoading', true)
            getAllNewsApi()
                .then(res => {
                    console.log('fetchAllNews res',res)
                    commit('setAllNews', res.data.models)
                    // commit('setAllNews', res.data.news)
                }).finally(()=>commit('setLoading',false));
        }
    },
    mutations: {
        setAllNews(state, news) {
            state.allNews = news
        },
        setCurrentNews(state, oneNews) {
            state.currentNews = oneNews
        }
    },
    getters: {
        getAllNews(state) {
            return state.allNews
        },
        getCurrentNews(state) {
            return state.currentNews
        }
    }
}
