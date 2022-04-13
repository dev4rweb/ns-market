import {WORK_HOST} from "../routeConsts";

export const getAllReviewsByQuery = rq => {
    return axios.get(`${WORK_HOST}comments?search=${rq.keyword}&page=${rq.page}&status=1`)
        .then(res => res).catch(err => err)
};

export const createReviewApi = objReview => {
    return axios.post(`${WORK_HOST}comments`, objReview)
        .then(res => res).catch(err => err)
};
