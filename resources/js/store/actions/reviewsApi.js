import {WORK_HOST} from "../routeConsts";

export const getAllReviewsByQuery = rq => {
    return axios.get(`${WORK_HOST}comments?search=${rq.keyword}&page=${rq.page}`)
        .then(res => res).catch(err => err)
};
