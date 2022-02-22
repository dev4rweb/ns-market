import {E_DOST_ID, E_DOST_PASSWORD} from "../routeConsts";

export default {
    state: {
        eDostDelivery: null
    },
    actions: {
        fetchEDostDelivery({commit}, query) {
            commit('setLoading', true)
            // axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
            // axios.defaults.headers.common['Content-Type'] = 'text/html; charset=windows-1251'
            // axios.defaults.headers.common['Content-Encoding'] = 'gzip'
            // axios.defaults.headers.common['Content-Type'] = 'text/html; charset=windows-1251'
            // axios.defaults.headers.common['Content-Type'] = 'text/html; charset=windows-1251'
            // axios.defaults.headers.common['Content-Type'] = 'text/html; charset=windows-1251'
            // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            const fd = new FormData();
            fd.set('id', `${E_DOST_ID}`)
            fd.set('p', `${E_DOST_PASSWORD}`)
            fd.set('to_city', '1019')
            fd.set('weight', '1')
            fd.set('strah', '1')
            /*const fd = {
                id: E_DOST_ID,
                p: E_DOST_PASSWORD,
                to_city: 1019,
                weight: 1,
                strah: 1,
            }*/
            // axios.post('http://edost.net/api2.php', fd, {
            //     axios.post('http://api.edost.ru/api2.php', fd,{
                axios.post(`http://www.edost.ru/edost_calc_kln.php`, fd //{
                // axios.post(`http://www.edost.ru/edost_calc_kln.php?id=${E_DOST_ID}&p=${E_DOST_PASSWORD}&to_city=1019&weight=1&strah=1`/*, fd,{
                // headers: {
                //     "Access-Control-Allow-Origin": "*",
                //     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                //     "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
                // }
            //}
            )
                .then(res => {
                console.log('fetchEDostDelivery res', res)
            }).catch(err => {
                console.log('fetchEDostDelivery err', err)
            }).finally(()=> commit('setLoading', false));
        },

    },
    mutations: {
        setEDostDelivery(state, address) {
            state.eDostDelivery = address
        }
    },
    getters: {
        getEDostDelivery(state) {
            return state.eDostDelivery
        }
    }
}
