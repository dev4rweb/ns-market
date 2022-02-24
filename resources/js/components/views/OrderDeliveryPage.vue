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
                        v-model="fastSearch"
                        @input="cityOnInput"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        id="dropdownCity"
                        autocomplete="chrome-off"
                        required
                    >
                    <DropdownCityInput/>
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

        <div class="d-flex justify-content-center">
            <button class="btn btn-lg btn-link">Изменить способ доставки</button>
        </div>

        <div class="mt-3 mb-5">
            <RecipientAddress />
        </div>

        <div class="mt-3 mb-5">
            <RecipientInfo />
        </div>

        <div class="mb-5 d-flex justify-content-end">
            <button
                style="width: 206px;"
                class="btn btn-lg btn-info"
            >
                Продолжить
            </button>
        </div>

    </div>
</template>

<script>
import RecipientAddress from "../UI/RecipientAddress";
import RecipientInfo from "../UI/RecipientInfo";
import DropdownCityInput from "../DropdownCityInput";
import NavOrder from "../UI/NavOrder";
import DeliveryWayTable from "../UI/tables/DeliveryWayTable";
import {mapActions, mapGetters, mapMutations} from 'vuex'
export default {
    name: "OrderDeliveryPage",
    data() {
        return {
            isAddressInvalid: false,
        }
    },
    methods: {
        ...mapActions(['fetchEDostDelivery', 'fetchDaDataAddress']),
        ...mapMutations(['setFastSearchAddress']),
        cityOnInput() {
            this.isAddressInvalid = false
            this.fetchDaDataAddress({
                query: this.getFastSearchAddress
            })
        }
    },
    computed: {
        ...mapGetters(['getEDostDelivery', 'getFastSearchAddress']),
        fastSearch: {
            get() {
                return this.getFastSearchAddress
            },
            set(val) {
                this.setFastSearchAddress(val)
            }
        }
    },
    components: {
        NavOrder, DeliveryWayTable, DropdownCityInput, RecipientAddress,
        RecipientInfo
    },
    mounted() {
        this.fetchEDostDelivery('')
    }
}
</script>

<style lang="scss" scoped>
.btn-link{
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 22px;
    color: #038ED7;
}
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
