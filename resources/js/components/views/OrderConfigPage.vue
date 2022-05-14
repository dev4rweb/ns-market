<template>
    <div class="container basket-page">
        <h1 class="mt-3 mb-3">Оформление заказа</h1>
        <div>
            <NavOrder/>
        </div>
        <div
            class="mt-3"
            v-if="getLSOrder.length > 0">
            <div class="card shadow blue-header-info-block mb-3">
                <div class="header-block p-3">
                    Общие сведения о заказе
                </div>
                <div class="body-block p-3">
                    <div class="d-flex justify-content-between content-wrapper">
                        <span>Наименований</span>
                        <span class="value">{{ getLSOrder.length }}</span>
                    </div>
                    <div class="d-flex justify-content-between content-wrapper">
                        <span>Товаров шт.</span>
                        <span class="value">{{ getAmountProduct }}</span>
                    </div>
                    <div class="d-flex justify-content-between content-wrapper">
                        <span>Масса заказа кг.</span>
                        <span class="value">{{ getWeightOrder }}</span>
                    </div>
                    <div class="d-flex justify-content-between content-wrapper">
                        <span>Наполнение в баллах</span>
                        <span class="value">{{ getPointsOrder }}</span>
                    </div>
                    <div class="d-flex justify-content-between content-wrapper">
                        <span>Стоимость заказа</span>
                        <span class="value">{{ getSumOrder }}</span>
                    </div>
                    <div class="d-flex justify-content-between content-wrapper">
                        <span>Ваша скидка, руб</span>
                        <span class="value">{{ getEconomicSumOrder }}</span>
                    </div>
                    <div class="d-flex justify-content-between content-wrapper mt-3">
                        <span class="value">Итого к оплате, руб</span>
                        <span class="title">{{ getSumOrder }}</span>
                    </div>
                </div>
            </div>
            <div
                class="card shadow blue-header-info-block mb-3"
                v-if="isPartner"
            >
                <div
                    ref="focusMe"
                    class="header-block p-3"
                >
                    Выберите тип заказа
                </div>
                <div
                    class="body-block p-3"
                >
                    <div
                        v-if="getBasketOrder"
                        class="d-flex"
                    >
                        <RadioBox
                            label="Личный объем"
                            value="0"
                            v-model="getBasketOrder.is_reserve"
                            @change="isReserveInvalid = false"
                        />
                        <RadioBox
                            label="Резерв"
                            value="1"
                            v-model="getBasketOrder.is_reserve"
                            @change="isReserveInvalid = false"
                        />
                    </div>
                    <div
                        class="invalid-feedback"
                        :class="{show: isReserveInvalid}"
                    >
                        {{ invalidMessage }}
                    </div>
                </div>
            </div>
            <div
                v-if="getBasketOrder"
                class="card shadow blue-header-info-block mb-4"
            >
                <div class="header-block p-3">
                    При необходимости добавьте комментарий к заказ
                </div>
                <div
                    class="body-block p-3"
                >
                    <div class="form-group form-group-blue">
                        <textarea
                            class="form-control form-control-lg"
                            v-model="getBasketOrder.customer_notes"
                        ></textarea>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mb-5">
                <button
                    class="btn btn-lg btn-link me-3"
                    @click="goBack"
                >
                    Назад
                </button>
                <button
                    class="btn btn-lg btn-info"
                    @click="gotoOrderDelivery"
                >
                    Продолжить
                </button>
            </div>
        </div>
        <h1 class="mt-5" v-else>Корзина пуста</h1>
    </div>
</template>

<script>
import NavOrder from "../UI/NavOrder";
import {mapGetters, mapActions, mapMutations} from 'vuex'
import RadioBox from "../UI/RadioBox";
import {patchCustomerOrderApi} from "../../store/actions/ordersApi";

export default {
    name: "OrderConfigPage",
    data() {
        return {
            customer_notes: '',
            is_reserve: null,
            isReserveInvalid: false,
            invalidMessage: 'Выберите тип заказа'
        }
    },
    methods: {
        ...mapActions(['fetchPhysicalPerson']),
        ...mapMutations(['setLoading']),
        gotoOrderDelivery() {
            let customerOrder = null;
            if (this.isPartner) {
                if (!this.getBasketOrder.is_reserve) {
                    this.isReserveInvalid = true
                    this.$refs.focusMe.scrollIntoView();
                    return
                }
                customerOrder = {
                    id: this.getBasketOrder.id,
                    customer_notes: this.getBasketOrder.customer_notes,
                    is_reserve: parseInt(this.getBasketOrder.is_reserve)
                }
            } else {
                customerOrder = {
                    id: this.getBasketOrder.id,
                    customer_notes: this.getBasketOrder.customer_notes,
                    is_reserve: this.isServiceCenter ? 1 : 0
                }
            }
            if (this.getBasketOrder && customerOrder) {
                this.setLoading(true)
                patchCustomerOrderApi(customerOrder)
                    .then(res => {
                        console.log('patchCustomerOrderApi', res)
                        if (res.data.success) window.location.href = '/order-delivery';
                    })
                    .catch(err => {
                        console.log('patchCustomerOrderApi err', err)
                    })
                    .finally(() => {
                        this.setLoading(false)
                    });
            }
        },
        goBack() {
            window.location.href = '/basket'
        },
    },
    components: {
        NavOrder, RadioBox
    },
    computed: {
        ...mapGetters(['getLSOrder', 'getAmountProduct', 'getWeightOrder',
            'getPointsOrder', 'getSumOrder', 'getEconomicSumOrder', 'isPartner',
            'getBasketOrder', 'isServiceCenter'])
    },
    mounted() {
        if (window.User) {
            this.fetchPhysicalPerson()
        }
    }
}
</script>

<style lang="scss" scoped>
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

textarea {
    resize: none;
    min-height: 219px;
    max-width: 536px;
}

.invalid-feedback {
    font-weight: bold;
    font-style: italic;
}

.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>
