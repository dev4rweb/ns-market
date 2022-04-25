import Vue from "vue";
import Vuex from 'vuex'
import users from './modules/users'
import modals from './modules/modals'
import errors from './modules/errors'
import physicalPerson from "./modules/physicalPerson";
import phoneApi from "./modules/phoneApi";
import mentor from "./modules/mentor";
import addresses from "./modules/addresses";
import daData from "./modules/daData";
import feedback from "./modules/feedback";
import catalogGroups from "./modules/catalogGroups";
import lStorage from "./modules/lStorage";
import basket from "./modules/basket";
import orders from "./modules/orders";
import inviter from "./modules/inviter";
import eDost from "./modules/eDost";
import transportCompanies from "./modules/transportCompanies";
import orderAddress from "./modules/orderAddress";
import aromaFilters from "./modules/aromaFilters";
import aromaDetail from "./modules/aromaDetail";
import news from "./modules/news";
import reviews from "./modules/reviews";
import paymentDetails from "./modules/paymentDetails";
import transactions from "./modules/transactions";
import userBankBonusMark from "./modules/userBankBonusMark";
import wallets from "./modules/wallets";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        users, modals, errors, physicalPerson, phoneApi, mentor, addresses, daData,
        feedback, catalogGroups, lStorage, basket, orders, inviter, eDost,
        transportCompanies, orderAddress, aromaFilters, aromaDetail, news,
        reviews, paymentDetails, transactions, userBankBonusMark,
        wallets
    }
})
