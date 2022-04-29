import {WORK_HOST} from "../routeConsts";

export const pvAccountIndexApi = () => {
    return axios.get(`${WORK_HOST}market/pv-accounts`)
        .then(res => res).catch(err => err)
};

export const pvAccountStoreApi = pvAccount => {
    return axios.post(`${WORK_HOST}market/pv-accounts`, {...pvAccount})
        .then(res => res).catch(err => err)
};

export const pvAccountShowApi = pvAccountId => {
    return axios.get(`${WORK_HOST}market/pv-accounts/${pvAccountId}`)
        .then(res => res).catch(err => err)
};

export const pvAccountUpdateApi = pvAccount => {
    return axios.post(`${WORK_HOST}market/pv-accounts/${pvAccount.id}`, {
        _method: 'PUT',
        ...pvAccount
    }).then(res => res).catch(err => err)
};

export const pvAccountPatchApi = pvAccount => {
    return axios.post(`${WORK_HOST}market/pv-accounts/${pvAccount.id}`, {
        _method: 'PATCH',
        ...pvAccount
    }).then(res => res).catch(err => err)
};

export const pvAccountDestroyApi = pvAccountId => {
    return axios.post(`${WORK_HOST}market/pv-accounts/${pvAccountId}`, {
        _method: 'DELETE',
    }).then(res => res).catch(err => err)
};
