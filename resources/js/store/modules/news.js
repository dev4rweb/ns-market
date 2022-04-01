import {getAllNewsApi} from "../actions/newsApi";

export default {
    state: {
        allNews: []
    },
    actions: {
        fetchAllNews({commit}) {
            commit('setLoading', true)
            getAllNewsApi()
                .then(res => {
                    console.log('fetchAllNews res',res)
                    commit('setAllNews', res.data.news)
                }).finally(()=>commit('setLoading',false));
        }
    },
    mutations: {
        setAllNews(state, news) {
            state.allNews = news
        }
    },
    getters: {
        getAllNews(state) {
            return state.allNews
        }
    }
}
