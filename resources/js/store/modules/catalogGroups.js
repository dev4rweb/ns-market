import axios from "axios";
import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        catalogGroups: [],
        currentCategory: null,
        categoryProducts: []
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
        }

    },
    mutations: {
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
