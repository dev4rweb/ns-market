import {WORK_HOST} from "../routeConsts";

export const getBillingAccountByTypeApi = (customer_id, type_id) => {
    return axios.post(`${WORK_HOST}market/get-billing-account`,{
        customer_id, type_id
    }).then(res => res).catch(err => err)
};

export const createBillingAccountApi = (customer_id, type_id) => {
    return axios.post(`${WORK_HOST}market/create-billing-account`,{
        customer_id, type_id
    }).then(res => res).catch(err => err)
};

export const getBillingCustomerApi = customer_id => {
    return axios.post(`${WORK_HOST}market/get-billing-customer`,{
        customer_id
    }).then(res => res).catch(err => err)
};

export const createBillingCustomerApi = (full_name, owner_id) => {
    return axios.post(`${WORK_HOST}market/create-billing-customer`,{
        full_name,
        owner_id
    }).then(res => res).catch(err => err)
};
