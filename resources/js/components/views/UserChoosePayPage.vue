<template>
<div class="row mb-5">
    <div class="card data-card">
        <h3
            class="d-flex justify-content-between align-items-center"
        >
            Покупка франшизы New Star market
        </h3>
        <p>
            Шаг <b>2</b> из 2
        </p>
        <p>
            Стоимость франшизы – 3000 рублей
        </p>
        <p>
            Срок действия франшизы – 12 месяцев. Срок действия автоматически
            продлевается на 12 месяцев после каждой,
            совершённой Вами покупки.
        </p>
        <p>
            Оплата франшизы подтверждает Ваше согласие
            с правилами сотрудничества с New Star market.
        </p>
        <div class="mb-3">
            <ChangeStatusBtn
                :btnName="{name: 'Оплатить пластиковой картой'}"
                :redirectUrl="{url: '/user-panel'}"
            />
        </div>
        <div>
            <ChangeStatusBtn
                :btnName="{name: 'Оплатить по QR коду'}"
                :redirectUrl="{url: '/user-panel'}"
            />
        </div>
    </div>
</div>
</template>

<script>
import ChangeStatusBtn from "../UI/ChangeStatusBtn";
export default {
    name: "UserChoosePayPage",
    components: {
        ChangeStatusBtn
    }
}
</script>

<style scoped>
h3{
    text-transform: uppercase;
    color: #333333;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
}

p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
}
</style>
