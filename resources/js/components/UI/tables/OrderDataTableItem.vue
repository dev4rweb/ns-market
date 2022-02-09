<template>
    <tr>
        <th style="font-weight: 400" scope="row">{{ index + 1 }}</th>
        <td style="font-weight: 400">{{ order.prodId }}</td>
        <td style="font-weight: 400">{{ order.product.print_name }}</td>
        <!--        <td>{{ order.amount }} p.</td>-->
        <td>
            <input
                type="number"
                class="form-control"
                v-model="amount"
                @blur="addToBasket"
            >
        </td>
        <td>{{ currentPrice }} p.</td>
        <td>{{ order.product.points }}</td>
        <td>{{ sumPv }}</td>
        <td>{{ sumPos }}</td>
        <td>
            <span
                class="remove-pos"
                @click="removeRow"
            >
                &times;
            </span>
        </td>
    </tr>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "OrderDataTableItem",
    props: ['order', 'index'],
    data() {
        return {
            amount: 0,
        }
    },
    methods: {
        ...mapActions(['getProductDetailDataById', 'addToBasketAction', 'removeFromBasketAction']),
        addToBasket() {
            // console.log('addToBasket')
            if (this.amount < 0) {
                this.setToastError('Некорректное значение');
                this.amount = 0
            }
            const orderObj = {
                prodId: this.order.product.vendor_code,
                amount: this.amount,
                product: this.order.product
            };
            if (this.amount > 0) {
                this.addToBasketAction(orderObj);
            }
            if (this.amount == 0) {
                this.removeFromBasketAction(orderObj)
            }

        },
        currentAmount() {
            if (this.isPartner)
                this.amount = this.order.amount
            else this.amount = this.order.amount
        },
        removeRow() {
            const orderObj = {
                prodId: this.order.product.vendor_code,
                amount: 0,
                product: this.order.product
            };
            this.removeFromBasketAction(orderObj)
        }
    },
    computed: {
        ...mapGetters(['isPartner']),
        currentPrice() {
            if (this.isPartner)
                return this.order.product.price_for_partners
            else return this.order.product.price_retail
        },
        sumPv() {
            return this.amount * this.order.product.points
        },
        sumPos() {
            return this.amount * this.currentPrice
        }
    },
    mounted() {
        this.currentAmount()
    }
}
</script>

<style lang="scss" scoped>
.form-control {
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
    font-weight: 800;
}
.remove-pos {
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EB5757;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
    color: white;
    font-size: 23px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.2, 1.2);
        -moz-transform: scale(1.2, 1.2);
        -ms-transform: scale(1.2, 1.2);
        -o-transform: scale(1.2, 1.2);
        transform: scale(1.2, 1.2);
    }
}
</style>
