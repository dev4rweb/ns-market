<template>
    <div class="user-content">
        <div class="row">
            <div class="card data-card mb-5">
                <h3>Мои Банк</h3>
                <ul class="list-group list-group-flush">
                    <li
                        class="list-group-item list-group-item-action"
                        aria-current="true">
                        <div class="d-flex w-75 justify-content-between">
                            <h4>Лицевой счет пользователя</h4>
                            <h4 v-if="getWalletMain">{{ getWalletMain.balance }}</h4>
                        </div>
                    </li>
                    <li
                        class="list-group-item list-group-item-action">
                        <div class="d-flex w-75 justify-content-between">
                            <h4>Накопительный счет пользователя</h4>
                            <h4 v-if="getWalletSaving">{{ getWalletSaving.balance }}</h4>
                        </div>
                    </li>
                    <li
                        class="list-group-item list-group-item-action">
                        <div class="d-flex w-75 justify-content-between">
                            <h4>Ваучер банка пользователя</h4>
                            <h4 v-if="getWalletVoucher">{{ getWalletVoucher.balance }}</h4>
                        </div>
                    </li>
                    <li
                        class="list-group-item list-group-item-action">
                        <a
                            href="/user-bank-bonus-mark"
                            class="d-flex w-75 justify-content-between"
                        >
                            <h4>Счет Бонус марок пользователя</h4>
                            <h4 v-if="getWalletMBC">{{ getWalletMBC.balance }}</h4>
                        </a>
                    </li>
                    <li
                        class="list-group-item list-group-item-action ">
                        <a
                            href="/user-bank-reserve"
                            class="d-flex w-75 justify-content-between"
                        >
                            <h4>Резерв пользователя PV</h4>
                            <h4 v-if="getWalletPVC">{{ getWalletPVC.balance }}</h4>
                        </a>
                    </li>
                    <!--                    <li
                                            v-if="isPartner"
                                            class="list-group-item list-group-item-action disabled"
                                            aria-disabled="true">
                                            <div class="d-flex w-75 justify-content-between">
                                                <h4>Личный объем PV</h4>
                                                <h4>{{ isPartner }}</h4>
                                            </div>
                                        </li>-->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "UserMyBankPanel",
    data() {
        return {
            billing_account_types: [
                {
                    id: 1,
                    name: 'Лицевой счет пользователя',
                    description: 'Это счет, пополняемый извне (Яндекс.Деньги, карты, наличные в офисе). С этого счета оплачиваются заказы 1 и 2 типа.'
                },
                {
                    id: 2,
                    name: 'Накопительный счет пользователя',
                    description: 'На этот счёт попадают вознаграждения, начисленные Компанией. С этого счета можно оплачивать заказы 1 и 2 типа. Отличие от лицевого счёта в том, что бонусы клиент может забрать наличными, а деньги с лицевого счета только использовать в оплате.'
                },
                {
                    id: 3,
                    name: 'Ваучер банка пользователя',
                    description: 'Счёт с которого можно оплатить только заказы 1 типа.'
                },
                {id: 4, name: 'Счет Бонус марок пользователя', description: 'Счет для оплаты заказов только 3 типа.'},
                {id: 5, name: 'Резерв PV пользователя', description: ''},
            ]
        }
    },
    computed: {
        ...mapGetters(['isPartner', 'getWalletMain', 'getWalletSaving', 'getWalletVoucher',
            'getWalletMBC', 'getWalletPVC'])
    },
}
</script>

<style lang="scss" scoped>
.list-group {
    font-size: 18px;

    .list-group-item {
        cursor: pointer;
        -webkit-transition: all .2s;
        -moz-transition: all .2s;
        -ms-transition: all .2s;
        -o-transition: all .2s;
        transition: all .2s;

        a {
            text-decoration: none;
        }

        h4 {
            font-size: 22px;
        }

        &.active, &:hover {
            background-color: #038ED7;
            color: white;

            h4 {
                color: white;
            }
        }
    }
}
</style>
