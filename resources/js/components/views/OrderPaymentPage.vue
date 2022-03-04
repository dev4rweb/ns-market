<template>
    <div class="container basket-page">
        <h1 class="mt-3 mb-3">Оформление заказа</h1>
        <div>
            <NavOrder/>
        </div>
        <div class="mt-3">
            <div class="card shadow blue-header-info-block mb-3">
                <div class="header-block p-3">
                    Общие сведения о заказе
                </div>
                <div class="body-block p-3">
                    <div class="d-flex justify-content-between content-wrapper">
                        <span>Тип заказа</span>
                        <span class="value">122 PV</span>
                    </div>
                    <div class="d-flex justify-content-between content-wrapper">
                        <span>Наполнение в баллах</span>
                        <span class="value">В личный объём</span>
                    </div>
                    <div class="d-flex justify-content-between content-wrapper">
                        <span>Масса заказа</span>
                        <span class="value">0,7 кг</span>
                    </div>
                    <div class="d-flex justify-content-between content-wrapper">
                        <span>Стоимость заказа, со скидкой</span>
                        <span class="value">40 020 р.</span>
                    </div>
                    <div class="d-flex justify-content-between content-wrapper">
                        <span>Стоимость доставки </span>
                        <span class="value">260 р.</span>
                    </div>
                    <div class="d-flex justify-content-between content-wrapper mt-3">
                        <span class="value">Итого к оплате</span>
                        <span class="title">34 869,6 р.</span>
                    </div>
                </div>
            </div>
            <h3 class="mt-3">Ваши счета</h3>
            <div class="card shadow blue-header-info-block mb-3">
                <div class="header-block p-3">
                    <div class=" d-flex justify-content-between own-payment-list">
                        <span>Тип счёта</span>
                        <span>Тип счёта</span>
                        <span>Оплата со счёта (р.)</span>
                    </div>
                </div>
                <div class="body-block p-3">
                    <div class="d-flex justify-content-between content-wrapper own-payment-list">
                        <span>Ваучер банк</span>
                        <span>123</span>
                        <span>123</span>
                    </div>
                    <div class="d-flex justify-content-between content-wrapper own-payment-list">
                        <span>Лицевой счёт</span>
                        <span>1234</span>
                        <span>112345</span>
                    </div>
                    <div class="d-flex justify-content-between content-wrapper own-payment-list">
                        <span>Счёт бонусов</span>
                        <span>99999</span>
                        <span>99999</span>
                    </div>
                    <div class="d-flex justify-content-between content-wrapper mt-3 own-payment-list">
                        <span class="value">Итого</span>
                        <span class="value">12 345,6 р.</span>
                        <span class="value">34 869,6 р.</span>
                    </div>
                    <h2>Итого к оплате: 34 567 р.</h2>
                </div>
            </div>
            <div class="card shadow blue-header-info-block mb-5">
                <div class="header-block p-3">
                    Выберите способ оплаты, чтобы продолжить
                </div>
                <div class="body-block p-3">
                    <div class="d-flex align-items-center mb-3">
                        <img
                            :src="icQr"
                            alt="ic-qr"
                            class="me-3"
                        >
                        <p class="pay-way">По QR-коду</p>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <img
                            :src="icCard"
                            alt="ic-qr"
                            class="me-3"
                        >
                        <p class="pay-way">Банковской картой</p>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <img
                            :src="icYouMoney"
                            alt="ic-qr"
                            class="me-3"
                        >
                        <p class="pay-way">В системе ЮMoney (+1%)</p>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <img
                            :src="icTerminal"
                            alt="ic-qr"
                            class="me-3"
                        >
                        <p class="pay-way">По коду через терминал (+1%)</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <img
                            :src="icPayOut"
                            alt="ic-qr"
                            class="me-3"
                        >
                        <p class="pay-way">Оплачу заказ при получении</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavOrder from "../UI/NavOrder";
import icCard from '../../../assets/img/ic-card.png'
import icPayOut from '../../../assets/img/ic-pay-outline.png'
import icQr from '../../../assets/img/ic-qr.png'
import icTerminal from '../../../assets/img/ic-terminal.png'
import icYouMoney from '../../../assets/img/ic-you-money.png'

export default {
    name: "OrderPaymentPage",
    data() {
        return {
            icPayOut, icQr, icTerminal, icYouMoney,
            icCard,
        }
    },
    components: {
        NavOrder,
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

.pay-way{
    margin-bottom: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #333333;
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
