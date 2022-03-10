<template>
    <div
        v-if="getBasketOrder"
        class="card shadow blue-header-info-block mb-3">
        <div class="header-block p-3">
            Общие сведения о заказе
        </div>
        <div class="body-block p-3">
            <div class="d-flex justify-content-between content-wrapper">
                <span>Тип заказа</span>
                <span class="value">{{ getPointsOrder }} PV</span>
            </div>
            <div class="d-flex justify-content-between content-wrapper">
                <span>Наполнение в баллах</span>
                <span class="value">В личный объём</span>
            </div>
            <div class="d-flex justify-content-between content-wrapper">
                <span>Масса заказа</span>
                <span class="value">{{ getWeightOrder }} кг</span>
            </div>
            <div class="d-flex justify-content-between content-wrapper">
                <span>Стоимость заказа, со скидкой</span>
                <span class="value">{{ getSumOrder }} р.</span>
            </div>
            <div class="d-flex justify-content-between content-wrapper">
                <span>Стоимость доставки </span>
                <span class="value">260 р.</span>
            </div>
            <div class="d-flex justify-content-between content-wrapper mt-3">
                <span class="value">Итого к оплате</span>
                <span
                    class="title"
                    v-if="getEconomicSumOrder"
                >
                    {{ getEconomicSumOrder }} р.
                </span>
                <span
                    class="title"
                    v-else
                >
                    {{ getSumOrder }} р.
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "GeneralOrderInfo",
    methods: {
        ...mapActions(['fetchPhysicalPerson'])
    },
    computed: {
        ...mapGetters(['getBasketOrder', 'getPointsOrder', 'getWeightOrder',
            'getEconomicSumOrder', 'getSumOrder'])
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

    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 120%;
        color: #333333;
        margin-top: 25px;
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

    .btn-info
    .own-payment-list {
        width: 100%;
        max-width: 655px;

        span:first-of-type {
            width: 100%;
            max-width: 200px;
        }

        span:nth-of-type(2) {
            width: 100%;
            max-width: 200px;
            text-align: right;
        }

        span:last-of-type {
            width: 100%;
            max-width: 255px;
            text-align: right;
        }
    }
}

.form-group-blue {
    label {
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 22px;
        color: #333333;

        span {
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 22px;
            color: #EB5757;
        }
    }
}
</style>
