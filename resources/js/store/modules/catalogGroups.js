import axios from "axios";
import {WORK_HOST} from "../routeConsts";

export default {
    state: {
        catalogGroups: []
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
        }
    },
    mutations: {
        setCatalogGroups(state, catalogGroups) {
            state.catalogGroups = catalogGroups
        }
    },
    getters: {
        getCatalogGroups(state) {
            return state.catalogGroups
        }
    }
}
