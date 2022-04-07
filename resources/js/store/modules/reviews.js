import {getAllReviewsByQuery} from "../actions/reviewsApi";


export default {
    state: {
        allReviews: null,
        reviewsCurrentPage: 1,
        reviewKeyword: ''
    },
    actions: {
        fetchAllReviewsByQueryAction({commit, getters}, reviewQuery) {
            commit('setLoading', true)
            getAllReviewsByQuery(reviewQuery)
                .then(res => {
                    console.log('fetchAllReviewsByQueryAction res', res)
                    commit('setAllReviews', res.data.models)
                }).catch(err =>
                console.log('fetchAllReviewsByQueryAction err', err)
            ).finally(() => commit('setLoading', false));
        }
    },
    mutations: {
        setAllReviews(state, reviews) {
            state.allReviews = reviews
        },
        setReviewsCurrentPage(state, currentPage) {
            state.reviewsCurrentPage = currentPage
        },
        setKeyword(state, keyword) {
            state.reviewKeyword = keyword
        }
    },
    getters: {
        getAllReviews(state) {
            return state.allReviews
        },
        getReviewsCurrentPage(state) {
            return state.reviewsCurrentPage
        },
        getReviewKeyword(state) {
            return state.reviewKeyword
        }
    }
}
