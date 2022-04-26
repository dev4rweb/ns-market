import {WORK_HOST} from "../routeConsts";

export const getTransactionTypesApi = () => {
    return axios.post(`${WORK_HOST}market/get-transaction-types`)
        .then(res => res).catch(err => err)
};

export const makeBonusMarkTransactionApi = transactionObj => {
    return axios.post(`${WORK_HOST}market/bonus-mark-transaction`, transactionObj)
        .then(res => res).catch(err => err)
};

export const getAllTransactionByWalletIdApi= query => {
    return axios.post(`${WORK_HOST}market/bonus-mark-report`, query)
        .then(res => res).catch(err => err)
}

export const makeReserveTransactionApi = transactionObj => {
    return axios.post(`${WORK_HOST}market/reserve-transaction`, transactionObj)
        .then(res => res).catch(err => err)
};

export const makePVTransactionApi = transactionObj => {
    return axios.post(`${WORK_HOST}market/personal-transaction`, transactionObj)
        .then(res => res).catch(err => err)
};
