<template>
    <div class="container basket-page">
        <h1 class="mt-3 mb-3">Оформление заказа</h1>
        <div>
            <NavOrder/>
        </div>
        <!--        <h3 class="mt-5">Куда доставить заказ</h3>-->
        <div class="card shadow blue-header-info-block mb-3 mt-3">
            <div class="header-block p-3">
                Населённый пункт вручения заказа
            </div>
            <form
                @submit.prevent="findDeliveries"
                class="body-block p-3"
            >
                <div class="form-group form-group-blue">
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        :class="{borderRed: isAddressInvalid}"
                        v-model="fastSearch"
                        @input="cityOnInput"
                        ref="searchCity"
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
                <!--                <p>Вы можете в любой момент изменить населённый пункт</p>-->
            </form>
        </div>

        <div
            class="card shadow blue-header-info-block mb-3"
            v-if="getAddresses && getIsShowMyAddresses"
        >
            <div class="header-block p-3">
                Мои адреса:
            </div>
            <div
                class="body-block p-3"
            >
                <div class="form-group form-group-blue">
                    <UserAddressList
                        v-for="(address, i) in getAddresses"
                        :address="address"
                        :index="i"
                        :key="address.id"
                    />
                </div>
            </div>
        </div>

        <div
            class="card shadow blue-header-info-block mb-3"
            v-if="getCurrentDeliveryCompany"
        >
            <div class="header-block p-3">
                Способ доставки
            </div>
            <div
                class="body-block p-3"
            >
                <h3>
                    {{ getCurrentDeliveryCompany.deliveryService }} <br>
                    {{ getCurrentDeliveryCompany.payType }}
                </h3>
                <h4>Срок доставки - {{ getCurrentDeliveryCompany.deliveryTime }}</h4>
                <span
                    style="font-size: 25px"
                >
                    Стоимость - {{ getCurrentDeliveryCompany.price }} руб.
                </span>

                <div v-if="getCurrentDpdOffice">
                    <h4 class="dpd-title">
                        Пункт выдачи:
                        <b>{{ getCurrentDpdOffice.address }}</b> <br>
                        <a :href="`http://www.edost.ru/office.php?c=${getCurrentDpdOffice.id}`">Показать на карте</a>
                    </h4>
                    <span class="dpd-code">код: {{ getCurrentDpdOffice.code }}</span>
                    <p class="dpd-body">
                        телефон: {{ getCurrentDpdOffice.tel }} <br>
                        офис: {{ getCurrentDpdOffice.schedule }}
                    </p>
                </div>
            </div>
        </div>

        <div
            class="d-flex justify-content-center"
            v-if="getEDostDelivery"
        >
            <button
                class="btn btn-lg btn-link"
                @click="changeDeliveryWay"
            >
                Изменить способ доставки
            </button>
        </div>

        <div v-if="getEDostDelivery && getEDostDelivery.length && getIsShowDeliveryWayTable">
            <h3 class="mt-3">Способ доставки</h3>
            <DeliveryWayTable/>
        </div>

        <div v-if="getDpdOffices && getDpdOffices.length && getIsShowDpdData">
            <DPDList/>
        </div>

        <div
            class="mt-3 mb-5"
            v-if="getEDostDelivery && getIsShowRecipientData"
        >
            <RecipientAddress/>
        </div>

        <div
            class="mt-5 mb-5"
            v-if="getEDostDelivery && getIsShowRecipientData"
        >
            <RecipientInfo/>
        </div>

        <!--        <div class="mb-5 d-flex justify-content-end">
                    <button
                        v-if="!getEDostDelivery"
                        style="width: 206px;"
                        class="btn btn-lg btn-info"
                        @click="findDeliveries"
                    >
                        Подтвердить адрес
                    </button>
                </div>-->

        <div class="mb-5 d-flex justify-content-center">
            <button
                class="btn btn-lg btn-link me-3"
                @click="goBack"
            >
                Назад
            </button>
            <button
                v-if="getEDostDelivery && getIsShowRecipientData"
                style="width: 206px;"
                class="btn btn-lg btn-info"
                @click="gotoToPayPage"
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
import DPDList from "../UI/DPDList";
import UserAddressList from "../UI/UserAddressList";

export default {
    name: "OrderDeliveryPage",
    data() {
        return {
            isAddressInvalid: false,
        }
    },
    methods: {
        ...mapActions(['fetchDaDataAddress', 'fetchEDostDelivery', 'fetchPhysicalPerson']),
        ...mapMutations(['setFastSearchAddress', 'setEDostDelivery', 'setCurrentDaDataAddress',
            'setIsShowMyAddresses', 'setIsShowDeliveryWayTable', 'setIsShowDpdData', 'setToastError']),
        cityOnInput() {
            this.isAddressInvalid = false
            this.fetchDaDataAddress({
                query: this.getFastSearchAddress,
                fromOrderDelivery: true
            })
        },
        goBack() {
            window.history.back()
        },
        gotoToPayPage() {
            if (this.getRecipientInfoData.first_name &&
                this.getRecipientInfoData.last_name &&
                this.getRecipientInfoData.phone)
                window.location.href = '/order-payment'
            else this.setToastError('Заполните все необходимые поля для перехода на следующую страницу')
        },
        findDeliveries() {
            if (this.getCurrentDaDataAddress)
                this.fetchEDostDelivery('')
        },
        changeDeliveryWay() {
            console.log('changeDeliveryWay', this.getCurrentDaDataAddress)
            this.setCurrentDaDataAddress({
                city_with_type: '',
                postal_code: '',
                street_with_type: '',
                area_with_type: '',
                house: '',
                house_type_full: '',
                country: '',
                block: '',
                region: '',
                flat: '',
                settlement_with_type: '',
                street: '',
                building: '',
                city: ''
            })
            this.setFastSearchAddress('')
            this.setIsShowMyAddresses(true)
            this.setIsShowDpdData(false)
            this.setEDostDelivery(null)

        }
    },
    computed: {
        ...mapGetters(['getEDostDelivery', 'getFastSearchAddress', 'getEDostDelivery',
            'getDpdOffices', 'getCurrentDaDataAddress', 'getIsShowRecipientData',
            'getIsShowDpdData', 'getAddresses', 'getIsShowMyAddresses', 'getIsShowDeliveryWayTable',
            'getCurrentDeliveryCompany', 'getCurrentDpdOffice', 'getRecipientInfoData']),
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
        RecipientInfo, DPDList, UserAddressList
    },
    mounted() {
        if (window.User) {
            this.fetchPhysicalPerson()
        }
        setTimeout(() => {
            this.$refs.searchCity.click();
            // this.$refs.searchCity.focus();
        }, 500);
        // console.log('OrderDeliveryPage', locations_data.find(i => i[3].includes('Тульская')))
    }
}
</script>

<style lang="scss" scoped>
.btn-link {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 22px;
    color: #038ED7;
}

.show {
    display: block;
}

/*.form-control-lg{
    font-size: 20px;
}*/

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

    .btn-info {
        &:hover {
            border-color: white;
            background-color: #038ED7;
            color: white;
        }
    }
}
</style>
