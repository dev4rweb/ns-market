import {WORK_HOST} from "../routeConsts";

export const updateOrCreateBasketOrderApi = orderProducts => {
    return axios.post(`${WORK_HOST}customer-orders`, orderProducts)
        .then(res => res).catch(err => err)
};

export const removeCustomerOrderApi = id => {
    return axios.post(`${WORK_HOST}customer-orders/${id}`, {
        _method: 'DELETE'
    }).then(res => res).catch(err => err)
};

export const patchCustomerOrderApi = customerOrder => {
    return axios.post(`${WORK_HOST}customer-orders/${customerOrder.id}`, {
        _method: 'PATCH',
        ...customerOrder
    })
};
