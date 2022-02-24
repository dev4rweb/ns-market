import {E_DOST_ID, E_DOST_PASSWORD, WORK_HOST} from "../routeConsts";

export default {
    state: {
        eDostDelivery: [
            {id: 1, price: 250, deliveryTime: '3–5 дней', deliveryService: 'DPD', payType: 'Доставка включена в стоимость заказа. Заказы от 8 000 руб. доставляются бесплатно.'},
            {id: 2, price: 260, deliveryTime: '2–3 дня', deliveryService: 'Почта России (наземная доставка)', payType: 'Оплата включается в стоимость заказа'},
            {id: 3, price: 260, deliveryTime: '4–5 дней', deliveryService: 'ТК Энергия', payType: 'Оплата при получении'},
            {id: 4, price: 270, deliveryTime: '1 день', deliveryService: 'Boxberry', payType: 'Оплата при получении'},
        ]
    },
    actions: {
        fetchEDostDelivery({commit}, query) {
            commit('setLoading', true)
            const q ={
                edost_to_city: 'Москва',
                edost_weight: 1,
                edost_strah: 0,
                edost_rus: 1,
                /*edost_kod: "1",
                edost_lenght: '',
                edost_width: '',
                edost_height: '',
                edost_zip: 101000,*/
            }
            const fd = new FormData()
            fd.set('edost_to_city', 'Москва')
            fd.set('edost_weight', '1')
            fd.set('edost_strah', '0')
            fd.set('edost_rus', '1')
            /*fd.set('edost_kod', '1')
            fd.set('edost_lenght', '')
            fd.set('edost_width', '')
            fd.set('edost_height', '')
            fd.set('edost_zip', '101000')*/
            axios.post('/api/delivery-services', fd)
                .then(res => {
                console.log('fetchEDostDelivery res', res)
            }).catch(err => {
                console.log('fetchEDostDelivery err', err)
            }).finally(() => commit('setLoading', false));
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
