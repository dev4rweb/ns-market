import {WORK_HOST} from "../routeConsts";

export const removeCustomerOrderApi = id => {
    return axios.post(`${WORK_HOST}customer-orders/${id}`, {
        _method: 'DELETE'
    }).then(res => res).catch(err => err)
};
