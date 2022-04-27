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
                    // this.$refs.startPage.scrollIntoView()startPage
                    window.scrollTo(0, 700)
                }).catch(err =>
                console.log('fetchAllReviewsByQueryAction err', err)
            ).finally(() => commit('setLoading', false));
        },
        createReviewAction({commit, getters}) {
            const curUser = getters['getCurrentUser']
            console.log('createReviewAction', curUser)
            if (curUser) {
                console.log('Can create Review')
                commit('showModalCanCreateReview', true)
            } else {
                console.log('Need to auth');
                commit('showModalCannotCreateReview', true)
            }
        },
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
