import axios from "axios";
import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        catalogGroups: [],
        currentCategory: null,
        categoryProducts: [],
        productDetail: null,
        aromaGroups: [],
        aromaGroupsFilter: [],
        aromaCategoryFilters: [],
        aromaCurrentGroup: null,
        aromaCurrentProducts: []
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
                    if (res.data.aromaGroups) {
                        let aromaGroups = res.data.aromaGroups
                        aromaGroups.forEach(i => {
                            i.filter_values_daily = i.filter_values[0]
                            i.filter_values_smells = i.filter_values[1]
                            i.filter_values_spirits = i.filter_values[2]
                        });
                        commit('setAromaGroups', aromaGroups)
                        if (window.location.href.includes('/catalog-aroma/products/AromaVis/')) {
                            console.log('AromaDetailPage')
                            const arGroupFilters = JSON.parse(localStorage.getItem('aromaGroupFilters'))
                            commit('setAromaGroupsFilter', arGroupFilters)
                            const allFilters = JSON.parse(localStorage.getItem('aromaAllFilters'))
                            commit('setAllFilters', allFilters)
                        } else {
                            console.log('AromaListPage')
                            const arGroupFilters = JSON.parse(localStorage.getItem('aromaGroupFilters'))
                            if(arGroupFilters) commit('setAromaGroupsFilter', arGroupFilters)
                            else commit('setAromaGroupsFilter', aromaGroups);

                            const allFilters = JSON.parse(localStorage.getItem('aromaAllFilters'))
                            if (allFilters) commit('setAllFilters', allFilters)

                            localStorage.removeItem('aromaGroupFilters')
                            localStorage.removeItem('aromaAllFilters')
                            // commit('setAromaGroupsFilter', res.data.aromaGroups);
                        }

                        commit('setAromaCategoryFilters', res.data.filter)
                    }
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
        setAromaCurrentGroup(state, curAromaGroup) {
            state.aromaCurrentGroup = curAromaGroup
        },
        setAromaCurrentProducts(state, curAromaProducts) {
            state.aromaCurrentProducts = curAromaProducts
        },
        setAromaGroupsFilter(state, aromaGroups) {
            state.aromaGroupsFilter = aromaGroups
        },
        setAromaGroups(state, aromaGroups) {
            state.aromaGroups = aromaGroups
        },
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
        },
        setAromaCategoryFilters(state, aromaCategoryFilters) {
            state.aromaCategoryFilters = aromaCategoryFilters
        },
    },
    getters: {
        getAromaCurrentGroup(state) {
            return state.aromaCurrentGroup
        },
        getAromaCurrentProducts(state) {
            return state.aromaCurrentProducts
        },
        getAromaGroupsFilter(state) {
            return state.aromaGroupsFilter
        },
        getAromaGroups(state) {
            return state.aromaGroups
        },
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
        },
        getAromaCategoryFilters(state) {
            return state.aromaCategoryFilters
        }
    }
}
