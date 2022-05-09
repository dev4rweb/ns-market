import {WORK_HOST} from "../routeConsts";

export const transactionsIndexApi = () => {
    return axios.get(`${WORK_HOST}market/transactions`)
        .then(res => res).catch(err => err)
};

export const transactionStoreApi = transaction => {
    return axios.post(`${WORK_HOST}market/transactions`, {...transaction})
        .then(res => res).catch(err => err)
};

export const transactionShowApi = transactionId => {
    return axios.get(`${WORK_HOST}market/transactions/${transactionId}`)
        .then(res => res).catch(err => err)
};

export const transactionUpdateApi = transaction => {
    return axios.post(`${WORK_HOST}market/transactions/${transaction.id}`, {
        _method: 'PUT',
        ...transaction
    }).then(res => res).catch(err => err)
};

export const transactionPatchApi = transaction => {
    return axios.post(`${WORK_HOST}market/transactions/${transaction.id}`, {
        _method: 'PATCH',
        ...transaction
    }).then(res => res).catch(err => err)
};

export const transactionDestroyApi = transactionId => {
    return axios.post(`${WORK_HOST}market/transactions/${transactionId}`, {
        _method: 'DELETE',
    }).then(res => res).catch(err => err)
};

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
export const makeCashTransactionApi = transactionObj => {
    return axios.post(`${WORK_HOST}market/cash-transaction`, transactionObj)
        .then(res => res).catch(err => err)
};
export const makeMainAccountTransactionApi = transactionObj => {
    return axios.post(`${WORK_HOST}market/main-account-transaction`, transactionObj)
        .then(res => res).catch(err => err)
};
export const makeBonusRubTransactionApi = transactionObj => {
    return axios.post(`${WORK_HOST}market/bonus-rub-transaction`, transactionObj)
        .then(res => res).catch(err => err)
};
export const makeCashTransferTransactionApi = transactionObj => {
    return axios.post(`${WORK_HOST}market/cash-transfer-transaction`, transactionObj)
        .then(res => res).catch(err => err)
};
export const makeMainTransferTransactionApi = transactionObj => {
    return axios.post(`${WORK_HOST}market/main-transfer-transaction`, transactionObj)
        .then(res => res).catch(err => err)
};
