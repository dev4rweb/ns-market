<template>
<div class="container basket-page">
    <h1 class="mt-3 mb-3">Оформление заказа</h1>
    <div>
        <NavOrder />
    </div>
    <div v-if="getLSOrder.length > 0">
        <div class="d-flex justify-content-between align-items-center pt-2 pb-2">
            <h3 class="mb-0">Проверьте состав заказа</h3>
            <div class="nav-tabs">
                <button
                    class="btn btn-link"
                    :class="{active: getOrderActiveTable === 1}"
                    @click="changeTable(1)"
                >
                    Все данные
                </button>
                <span class="dot">&#9679;</span>
                <button
                    class="btn btn-link"
                    :class="{active: getOrderActiveTable === 2}"
                    @click="changeTable(2)"
                >
                    Сроки годности
                </button>
<!--                <span class="dot">&#9679;</span>
                <button
                    class="btn btn-link"
                    :class="{active: getOrderActiveTable === 3}"
                    @click="changeTable(3)"
                >
                    Скидки
                </button>-->
            </div>
        </div>
        <OrderDataTable v-if="getOrderActiveTable === 1" />
        <ExpirationDateTable v-if="getOrderActiveTable === 2" />
        <DiscountOrderTable v-if="getOrderActiveTable === 3" />
        <div class="d-flex justify-content-between align-items-start mt-5 mb-3">
            <DearFriendsBanner />
            <OrderSumInfo />
        </div>
        <div class="d-flex justify-content-center mb-5 mt-3">
            <button
                class="btn btn-lg btn-link me-3"
                @click="addToDraft"
            >
                Сохранить в черновиках
            </button>
            <button
                class="btn btn-lg btn-info"
                @click="createOrder"
            >
                Оформить заказ
            </button>
            <button
                style="display: none;"
                data-toggle="modal"
                data-target="#loginModal"
                ref="loginBtn"
            >
            </button>
        </div>
    </div>
    <h1 class="mt-5" v-else>Корзина пуста</h1>
</div>
</template>

<script>
import NavOrder from "../UI/NavOrder";
import {mapMutations, mapGetters, mapActions} from 'vuex'
import OrderDataTable from "../UI/tables/OrderDataTable";
import ExpirationDateTable from "../UI/tables/ExpirationDateTable";
import DiscountOrderTable from "../UI/tables/DiscountOrderTable";
import DearFriendsBanner from "../UI/DearFriendsBanner";
import OrderSumInfo from "../UI/OrderSumInfo";
export default {
    name: "BasketPage",
    methods: {
        ...mapMutations(['setOrderActiveTable', 'setFromBasketPage']),
        ...mapActions(['fetchPhysicalPerson']),
        changeTable(activeNumber) {
            this.setOrderActiveTable(activeNumber)
        },
        addToDraft() {
            console.log('addToDraft', this.getCurrentUser)
            if (this.getCurrentUser) {
                window.location.href = '/user-orders-panel'
            } else {
                this.setFromBasketPage('/user-orders-panel')
                $(this.$refs.loginBtn).click();
            }
        },
        createOrder() {
            console.log('createOrder', this.getCurrentUser)
            if (this.getCurrentUser) {
                window.location.href = '/order-config'
            } else {
                this.setFromBasketPage('/order-config')
                $(this.$refs.loginBtn).click();
            }
        }
    },
    components: {
        NavOrder, OrderDataTable, ExpirationDateTable, DiscountOrderTable,
        DearFriendsBanner, OrderSumInfo
    },
    computed: {
        ...mapGetters(['getLSOrder', 'getOrderActiveTable', 'getCurrentUser']),
    },
    mounted() {
        if (window.User) {
            this.fetchPhysicalPerson()
        }
    }
}
</script>

<style lang="scss" scoped>
.basket-page{
    min-height: calc(100vh - 222px - 288px);
    h1{
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 39px;
        text-transform: uppercase;
        text-align: center;
        color: #333333;
    }

    h3{
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
</style>
