import {WORK_HOST} from "../routeConsts";

export const findUserByPhoneOrUserIdApi = phoneOrUserId => {
    phoneOrUserId = phoneOrUserId.replace(/[^0-9]/g, '')
    const fd = new FormData()
    if (phoneOrUserId.length > 10) {
        fd.set('phone', phoneOrUserId)
    } else {
        fd.set('user_id', phoneOrUserId);
    }
    return axios.post(`${WORK_HOST}market/get-user-phone`,fd)
        .then(res => res).catch(err => err)
};
