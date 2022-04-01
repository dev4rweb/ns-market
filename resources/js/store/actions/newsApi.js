import {WORK_HOST} from "../routeConsts";

export const getAllNewsApi = () => {
    return axios.get(`${WORK_HOST}news`)
        .then(res => {
            // console.log('getAllNews res', res)
            return res
        }).catch(err => {
            console.log('getAllNews err', err)
        });
};
