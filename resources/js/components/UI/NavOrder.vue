<template>
    <div class="nav-wrapper">
        <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
                <button class="btn btn-outline-info active">
                    Корзина
                </button>
            </li>
            <li class="nav-item">
                <button class="btn btn-outline-info">
                    Параметры заказа
                </button>
            </li>
            <li class="nav-item">
                <button class="btn btn-outline-info">
                    Доставка
                </button>
            </li>
            <li class="nav-item">
                <button class="btn btn-outline-info">
                    Оплата
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "NavOrder"
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
    display: flex;
    justify-content: center;

    .nav{
        max-width: 570px;
    }
}
.btn-lg {
    width: 100%;
}
</style>
