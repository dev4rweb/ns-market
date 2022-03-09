<template>
    <div class="nav-wrapper">
        <ul class="nav nav-pills nav-fill">
            <li
                v-for="link in links"
                class="nav-item"
                :key="link.id"
            >
                <button
                    class="btn btn-outline-info"
                    :class="{active: isActive(link.path)}"
                    :disabled="link.isDisabled"
                    @click="moveForward(link)"
                >
                    {{ link.name }}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "NavOrder",
    data() {
        return {
            links: [
                {id: 1, name: 'Корзина', path: '/basket', isDisabled: false},
                {id: 2, name: 'Параметры заказа', path: '/order-config', isDisabled: false},
                {id: 3, name: 'Доставка', path: '/order-delivery', isDisabled: false},
                {id: 4, name: 'Оплата', path: '/order-payment', isDisabled: false},
            ]
        }
    },
    methods: {
        ...mapMutations(['setToastError']),
        isActive(pathUrl) {
            return window.location.href.includes(pathUrl)
        },
        moveForward(link) {
            if (link.path.includes('/basket')) window.location.href = link.path
            if (link.path.includes('/order-config') && this.getLSOrder.length)
                window.location.href = link.path
            if (link.path.includes('/order-delivery') && this.getLSOrder.length)
                window.location.href = link.path
            if (
                link.path.includes('/order-payment')
                &&
                this.getLSOrder.length && this.getOrderAddress
                /*this.getCurrentDeliveryCompany
                &&
                this.getRecipientInfoData.first_name &&
                this.getRecipientInfoData.last_name &&
                this.getRecipientInfoData.phone*/
            ) window.location.href = link.path
            /*else {
                this.setToastError('Пустая корзина');
                link.isDisabled = true;
            }*/
        },
    },
    computed: {
        ...mapGetters(['getLSOrder', 'getCurrentDeliveryCompany', 'getRecipientInfoData',
        'getOrderAddress']),
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
    display: flex;
    justify-content: center;

    .nav {
        //max-width: 570px;

        .nav-item {
            width: 170px;

            button {
                width: 100%;
            }
        }
    }


}

.btn-lg {
    width: 100%;
}
</style>
