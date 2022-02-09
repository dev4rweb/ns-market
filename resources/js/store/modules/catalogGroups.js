import axios from "axios";
import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        catalogGroups: [],
        currentCategory: null,
        categoryProducts: [],
        productDetail: null,
    },
    actions: {
        fetchCatalogGroups({commit}) {
            commit('setLoading', true)
            axios.get(`${WORK_HOST}market/catalog-groups`)
                .then(res => {
                    console.log('fetchCatalogGroups', res)
                    if (res.data.success) {
                        commit('setCatalogGroups', res.data.models)
                    } else
                        commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
                })
                .catch(err => {
                    console.log('fetchCatalogGroups err', err)
                    commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
                })
                .finally(() => {
                    commit('setLoading', false)
                });
        },
        getCategoryPage({commit}, data) {
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/category-products`, {
                slug: data.slug,
                page: data.page
            }).then(res => {
                console.log('getCategoryPage', res)
                if (res.data.success) {
                    commit('setCurrentCategory', res.data.category)
                    commit('setCategoryProducts', res.data.models)
                } else commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
            }).catch(err => {
                console.log('getCategoryPage err', err)
                commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
            }).finally(() => {
                commit('setLoading', false)
            });
        },
        getProductDetailData({commit}, slug) {
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/detail-product`, {
                slug: slug
            }).then(res => {
                console.log('getProductDetailData', res)
                if (res.data.success) {
                    commit('setProductDetail', res.data.model)
                    commit('setCurrentCategory', res.data.model.group)
                } else commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
            }).catch(err => {
                console.log('getProductDetailData err', err)
                commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
            }).finally(() => {
                commit('setLoading', false)
            });
        },
        getProductDetailDataById({commit}, prodId) {
            commit('setLoading', true)
            axios.post(`${WORK_HOST}market/detail-product`, {
                prodId
            }).then(res => {
                console.log('getProductDetailDataById', res)
                if (res.data.success) {
                    commit('setProductDetail', res.data.model)
                    commit('setCurrentCategory', res.data.model.group)
                } else commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
            }).catch(err => {
                console.log('getProductDetailDataById err', err)
                commit('setToastError', 'Непредвиденная ошибка. Попробуйте позже')
            }).finally(() => {
                commit('setLoading', false)
            });
        }
    },
    mutations: {
        setProductDetail(state, product) {
            state.productDetail = product
        },
        setCatalogGroups(state, catalogGroups) {
            state.catalogGroups = catalogGroups
        },
        setCurrentCategory(state, currentCategory) {
            state.currentCategory = currentCategory
        },
        setCategoryProducts(state, categoryProducts) {
            state.categoryProducts = categoryProducts
        }
    },
    getters: {
        getProductDetail(state) {
            return state.productDetail
        },
        getCatalogGroups(state) {
            return state.catalogGroups
        },
        getCurrentCategory(state) {
            return state.currentCategory
        },
        getCategoryProducts(state) {
            return state.categoryProducts
        }
    }
}
