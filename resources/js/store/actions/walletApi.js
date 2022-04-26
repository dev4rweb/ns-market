import {WORK_HOST} from "../routeConsts";

export const getWalletsByUserIdApi = user_id => {
    return axios.post(`${WORK_HOST}market/wallets-by-user`, {user_id})
        .then(res => res).catch(err => err)
};

export const getWalletByIdApi = id => {
    return axios.post(`${WORK_HOST}market/get-wallet`, {id})
        .then(res => res).catch(err => err)
};

export const createWalletApi = (user_id, type_id, currency_code = 'RUB',
                                is_default = 0, balance = 0) => {
    return axios.post(`${WORK_HOST}market/create-wallet`, {
        user_id, type_id, currency_code, is_default, balance
    })
        .then(res => res).catch(err => err)
};

export const getWalletByTypeApi = (user_id, type_id) => {
    return axios.post(`${WORK_HOST}market/wallet-by-type`, {user_id, type_id})
        .then(res => res).catch(err => err)
};

// need to chek for type_id === 6
export const walletUpdateApi = (user_id, balance) => {
    return axios.post(`${WORK_HOST}market/wallet-update`, {user_id, balance})
        .then(res => res).catch(err => err)
};
