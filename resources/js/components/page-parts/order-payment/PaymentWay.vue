<template>
    <div
        class="card shadow blue-header-info-block mb-5">
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
</template>

<script>
import icCard from '../../../../assets/img/ic-card.png'
import icPayOut from '../../../../assets/img/ic-pay-outline.png'
import icQr from '../../../../assets/img/ic-qr.png'
import icTerminal from '../../../../assets/img/ic-terminal.png'
import icYouMoney from '../../../../assets/img/ic-you-money.png'
export default {
    name: "PaymentWay",
    data() {
        return {
            icPayOut, icQr, icTerminal, icYouMoney,
            icCard,
        }
    },
}
</script>

<style lang="scss" scoped>

.pay-way {
    margin-bottom: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #333333;
}

</style>
