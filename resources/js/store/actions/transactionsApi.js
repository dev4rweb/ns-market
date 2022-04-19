import {WORK_HOST} from "../routeConsts";

export const getTransactionTypesApi = () => {
    return axios.post(`${WORK_HOST}market/get-transaction-types`)
        .then(res => res).catch(err => err)
};

export const makeBonusMarkTransactionApi = transactionObj => {
    return axios.post(`${WORK_HOST}market/bonus-mark-transaction`, transactionObj)
        .then(res => res).catch(err => err)
};
