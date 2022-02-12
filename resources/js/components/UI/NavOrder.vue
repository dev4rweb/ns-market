<template>
    <div class="nav-wrapper">
        <ul class="nav nav-pills nav-fill">
            <li
                v-for="link in links"
                class="nav-item"
                :key="link.id"
            >
                <a
                    :href="link.path"
                    class="btn btn-outline-info"
                    :class="{active: isActive(link.path)}"
                >
                    {{link.name}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "NavOrder",
    data() {
        return {
            links: [
                {id: 1, name: 'Корзина', path: '/basket', isDisabled: true},
                {id: 2, name: 'Параметры заказа', path: '/order-config', isDisabled: true},
                {id: 3, name: 'Доставка', path: '/order-delivery', isDisabled: true},
                {id: 4, name: 'Оплата', path: '/order-payment', isDisabled: true},
            ]
        }
    },
    methods: {
        isActive(pathUrl) {
            return window.location.href.includes(pathUrl)
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
    display: flex;
    justify-content: center;

    .nav {
        max-width: 570px;
    }
}

.btn-lg {
    width: 100%;
}
</style>
