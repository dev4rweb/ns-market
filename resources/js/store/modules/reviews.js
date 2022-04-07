import {getAllReviewsByQuery} from "../actions/reviewsApi";


export default {
    state: {
        allReviews: null,
        reviewsCurrentPage: 1,
        reviewKeyword: ''
    },
    actions: {
        fetchAllReviewsByQueryAction({commit, getters}) {
            commit('setLoading', true)
            getAllReviewsByQuery({
                keyword: getters['getReviewKeyword'],
                page: getters['getReviewsCurrentPage']
            })
                .then(res => {
                    console.log('fetchAllReviewsByQueryAction res', res)
                    commit('setReviewsCurrentPage', res.data.models.current_page)
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
        setReviewKeyword(state, keyword) {
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
