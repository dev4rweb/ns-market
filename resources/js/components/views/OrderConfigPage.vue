<template>
    <div class="container basket-page">
        <h1 class="mt-3 mb-3">Оформление заказа</h1>
        <div>
            <NavOrder/>
        </div>
        <div
            class="mt-5"
            v-if="getLSOrder.length > 0">
            <div class="card shadow blue-header-info-block mb-3">
                <div class="header-block p-3">
                    Общие сведения о заказе
                </div>
                <div class="body-block p-3">
                    <h4 class="mb-3">Общие сведения о заказе</h4>
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
            <div class="card shadow blue-header-info-block mb-3">
                <div class="header-block p-3">
                    Выберите тип заказа
                </div>
                <div class="body-block p-3">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="isReserve"
                            value="0"
                            checked>
                        <label
                            class="form-check-label">
                            Личный объём
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="isReserve"
                            value="1">
                        <label
                            class="form-check-label"
                        >
                            Резерв
                        </label>
                    </div>
                </div>
            </div>
            <div class="card shadow blue-header-info-block mb-4">
                <div class="header-block p-3">
                    Комментарий к заказу
                </div>
                <div class="body-block p-3">
                    <div class="form-group form-group-blue">
                        <textarea
                            class="form-control form-control-lg"
                            v-model="comment"
                            placeholder="При необходимости оставьте комментарий"
                        ></textarea>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end mb-5">
                <button
                    class="btn btn-lg btn-info"

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
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "OrderConfigPage",
    data() {
        return {
            comment: ''
        }
    },
    methods: {
        ...mapActions(['fetchPhysicalPerson']),
        gotoOrderDelivery() {
            window.location.href = '/order-delivery'
        }
    },
    components: {
        NavOrder
    },
    computed: {
        ...mapGetters(['getLSOrder', 'getAmountProduct', 'getWeightOrder',
        'getPointsOrder', 'getSumOrder', 'getEconomicSumOrder'])
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
}
textarea {
    resize: none;
    min-height: 219px;
    max-width: 536px;
}
</style>
