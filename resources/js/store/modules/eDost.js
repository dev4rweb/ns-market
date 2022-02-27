import {E_DOST_ID, E_DOST_PASSWORD, WORK_HOST} from "../routeConsts";
import {encode, decode, labels} from 'windows-1252';

export default {
    state: {
        /*eDostDelivery: [
            {id: 1, price: 250, deliveryTime: '3–5 дней', deliveryService: 'DPD', payType: 'Доставка включена в стоимость заказа. Заказы от 8 000 руб. доставляются бесплатно.'},
            {id: 2, price: 260, deliveryTime: '2–3 дня', deliveryService: 'Почта России (наземная доставка)', payType: 'Оплата включается в стоимость заказа'},
            {id: 3, price: 260, deliveryTime: '4–5 дней', deliveryService: 'ТК Энергия', payType: 'Оплата при получении'},
            {id: 4, price: 270, deliveryTime: '1 день', deliveryService: 'Boxberry', payType: 'Оплата при получении'},
        ]*/
        eDostDelivery: null,
        dpdOffices: null,
        dpdNum: null
    },
    actions: {
        fetchEDostDelivery({commit, getters, dispatch}, query) {
            const currentDaDataAddress = getters['getCurrentDaDataAddress']
            if (currentDaDataAddress && currentDaDataAddress.city) {
                commit('setLoading', true);
                const weight = getters['getWeightOrder'] ?
                    parseFloat(getters['getWeightOrder']) < 1 ? 1:
                        parseFloat(getters['getWeightOrder']) : 1
                console.log(weight.toFixed(0), typeof weight)
                const q ={
                    edost_to_city: currentDaDataAddress.city,
                    edost_weight: weight.toFixed(0),
                    edost_strah: 0,
                    edost_rus: 1,
                    edost_kod: "1",
                    edost_lenght: '',
                    edost_width: '',
                    edost_height: '',
                    edost_zip: currentDaDataAddress.postal_code,
                }
                // axios.post('http://edost-lara/api/', q)
                axios.post('http://edost-lara.dev4rweb.com/api/', q)
                    .then(res => {
                        console.log('fetchEDostDelivery res', res)
                        if (res.data.qty_company > 0) {
                            commit('createEDostDeliveryObject', res.data)
                        }
                        if (res.data.qty_company === 0 && res.data.stat === 0) {
                            // dispatch('fetchEDostDeliveryByRegion', weight)
                        }
                    }).catch(err => {
                    console.log('fetchEDostDelivery err', err)
                }).finally(() => commit('setLoading', false));
            } else {
                commit('setToastError', 'Dadata is empty')
            }
        },
        fetchEDostDeliveryByRegion({commit, getters}, weight) {
            const currentDaDataAddress = getters['getCurrentDaDataAddress']
            if (currentDaDataAddress && currentDaDataAddress.region) {
                commit('setLoading', true);
                const q ={
                    edost_to_city: currentDaDataAddress.region,
                    edost_weight: weight.toFixed(0),
                    edost_strah: 0,
                    edost_rus: 1,
                    edost_kod: "1",
                    edost_lenght: '',
                    edost_width: '',
                    edost_height: '',
                    edost_zip: currentDaDataAddress.postal_code,
                }
                // axios.post('http://edost-lara/api/', q)
                axios.post('http://edost-lara.dev4rweb.com/api/', q)
                    .then(res => {
                        console.log('fetchEDostDelivery res', res)
                        if (res.data.qty_company > 0) {
                            commit('createEDostDeliveryObject', res.data)
                        }
                    }).catch(err => {
                    console.log('fetchEDostDelivery err', err)
                }).finally(() => commit('setLoading', false));
            } else {
                commit('setToastError', 'Dadata is empty')
            }
        },
    },
    mutations: {
        setEDostDelivery(state, address) {
            state.eDostDelivery = address
        },
        createEDostDeliveryObject(state, deliveries) {
            const companies = []
            const offices = []
            for (let i = 1; i <= deliveries.qty_company; i++) {
                companies.push({
                    id: i,
                    deliveryService: deliveries['company'+i],
                    deliveryTime: deliveries['day'+i],
                    price: deliveries['price'+i],
                    payType: deliveries['name'+i],
                })

                if (deliveries['company' + i].includes('DPD')) {
                    const dpds = 'office' + i;
                    deliveries[dpds].forEach(i => {
                        offices.push({
                            id: i.id,
                            address: i.address,
                            code: i.code,
                            gps: i.gps,
                            name: i.name,
                            schedule: i.schedule,
                            tel: i.tel,
                            to_tarif: i.to_tarif,
                        })
                    });
                    state.dpdOffices = offices
                }
            }
            state.eDostDelivery = companies.sort((a,b) =>
                (parseFloat(a.price) > parseFloat(b.price)) ? 1 :
                    (parseFloat(a.price) < parseFloat(b.price)) ? -1 : 0
            )
        },
    },
    getters: {
        getEDostDelivery(state) {
            return state.eDostDelivery
        },
        getDpdOffices(state) {
            return state.dpdOffices
        }
    }
}
