<template>
    <div class="container basket-page">
        <h1 class="mt-3 mb-3">Оформление заказа</h1>
        <div>
            <NavOrder/>
        </div>
        <h3 class="mt-5">Куда доставить заказ</h3>
        <div class="card shadow blue-header-info-block mb-3">
            <div class="header-block p-3">
                Населённый пункт вручения заказа
            </div>
            <div class="body-block p-3">
                <div class="form-group form-group-blue">
                    <input
                        type="text"
                        class="form-control form-control-lg w-50"
                        :class="{borderRed: isAddressInvalid}"
                        v-model="address"
                        id="loginFormInput"
                        @input="isAddressInvalid = false"
                        required
                    >
                    <div
                        class="invalid-feedback"
                        :class="{show: isAddressInvalid}"
                    >
                        Некорректный адрес
                    </div>
                </div>
                <p>Вы можете в любой момент изменить населённый пункт</p>
            </div>
        </div>
        <div v-if="getEDostDelivery && getEDostDelivery.length">
            <h3 class="mt-3">Способ доставки</h3>
            <DeliveryWayTable />
        </div>

    </div>
</template>

<script>
import NavOrder from "../UI/NavOrder";
import DeliveryWayTable from "../UI/tables/DeliveryWayTable";
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "OrderDeliveryPage",
    data() {
        return {
            address: '',
            isAddressInvalid: false,
        }
    },
    methods: {
        ...mapActions(['fetchEDostDelivery']),
    },
    computed: {
        ...mapGetters(['getEDostDelivery'])
    },
    components: {
        NavOrder, DeliveryWayTable
    },
    mounted() {
        // this.fetchEDostDelivery('')
    }
}
</script>

<style lang="scss" scoped>
.show {
    display: block;
}

.borderRed {
    border-color: red;
}
.basket-page {
    min-height: calc(100vh - 222px - 288px);

    h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 39px;
        text-transform: uppercase;
        text-align: center;
        color: #333333;
    }

    h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        display: flex;
        align-items: center;
        color: #333333;
    }


    .nav-tabs {

        .dot {
            font-style: normal;
            font-weight: normal;
            font-size: 10px;
            line-height: 20px;
            color: #77818B;
        }

        .btn-link {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 20px;
            color: #77818B;
            text-decoration: none;

            &.active {
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 22px;
                color: #038ED7;
            }
        }
    }
}
</style>
