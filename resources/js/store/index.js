import Vue from "vue";
import Vuex from 'vuex'
import users from './modules/users'
import modals from './modules/modals'
import errors from './modules/errors'
import physicalPerson from "./modules/physicalPerson";
import phoneApi from "./modules/phoneApi";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        users, modals, errors, physicalPerson, phoneApi
    }
})
