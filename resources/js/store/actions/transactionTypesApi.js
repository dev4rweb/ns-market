import {WORK_HOST} from "../routeConsts";

export const getAllTransactionTypesApi = () => {
    return axios.get(`${WORK_HOST}market/transaction-types`)
        .then(res => res).catch(err => err)
};

export const createTransactionTypeApi = type => {
    return axios.post(`${WORK_HOST}market/transaction-types`, {
        ...type
    }).then(res => res).catch(err => err)
};

export const updateTransactionTypeApi = type => {
    return axios.post(`${WORK_HOST}market/transaction-types/${type.id}`, {
        _method: 'PUT',
        ...type
    }).then(res => res).catch(err => err)
};

export const removeTransactionTypeApi = id => {
    return axios.post(`${WORK_HOST}market/transaction-types/${id}`, {
        _method: 'DELETE',
    }).then(res => res).catch(err => err)
};
