import {WORK_HOST} from "../routeConsts";

export const getAllNewsApi = currentPage => {
    // return axios.get(`${WORK_HOST}news`)
    return axios.post(`${WORK_HOST}market/news?page=${currentPage}`)
    // return axios.post(`http://127.0.0.1:8001/api/market/news`)
        .then(res => {
            // console.log('getAllNews res', res)
            return res
        }).catch(err => {
            console.log('getAllNews err', err)
        });
};
