<template>
    <div class="user-content">
        <div class="row">
            <div class="card data-card mb-5">
                <h3 class="mb-3">Работа СЦ</h3>
                <ul class="list-group list-group-flush mb-5">
                    <li
                        v-for="url in urlsOne"
                        :key="url.path"
                        class="list-group-item list-group-item-action"
                        aria-current="true"
                    >
                        <a
                            :href="url.path"
                            class="d-flex w-75 justify-content-between"
                        >
                            <h4>{{ url.name }}</h4>
                        </a>
                    </li>
                </ul>
                <ul class="list-group list-group-flush mb-5">
                    <li
                        v-for="url in urlsTwo"
                        :key="url.path"
                        class="list-group-item list-group-item-action"
                        aria-current="true"
                    >
                        <a
                            :href="url.path"
                            class="d-flex w-75 justify-content-between"
                        >
                            <h4>{{ url.name }}</h4>
                        </a>
                    </li>
                </ul>
                <ul class="list-group list-group-flush mb-3">
                    <li
                        v-for="url in urlsThree"
                        :key="url.path"
                        class="list-group-item list-group-item-action"
                        aria-current="true"
                    >
                        <a
                            :href="url.path"
                            class="d-flex w-75 justify-content-between"
                        >
                            <h4>{{ url.name }}</h4>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserWorkSCPage",
    data() {
        return {
            urlsOne: [
                {name: 'Продажа товаров', path: '/user-service-selling-products'},
                {name: 'Работа с бонусами', path: '/user-service-bonus-work'},
                {name: 'Пополнить лицевой счёт  покупателя', path: '/user-service-fill-main-account'},
            ],
            urlsTwo: [
                {name: 'История заказов', path: '/user-service-order-history'},
                {name: 'Отчёт о покупках по товарам', path: '/user-service-buy-product-report'},
            ],
            urlsThree: [
                {name: 'История продаж', path: '/user-service-selling-history'},
                {name: 'Отчёт о продажах по покупателям', path: '/user-service-sell-buyer-report'},
                {name: 'Отчёт о продажах по товарам', path: '/user-service-sell-product-report'},
            ],
        }
    }
}
</script>

<style scoped>

</style>
