<template>
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
</template>

<script>
export default {
    name: "AccountPaymentType"
}
</script>

<style lang="scss" scoped>
h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 120%;
    color: #333333;
    margin-top: 25px;
}

</style>
