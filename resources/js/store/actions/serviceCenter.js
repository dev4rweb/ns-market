import {WORK_HOST} from "../routeConsts";

export const createServiceCenterStatusApi = user_id => {
    return axios.post(`${WORK_HOST}market/toggle-status-service-center`, {user_id})
        .then(res => res).catch(err => err)
};
