<template>
    <tr>
        <th style="font-weight: 400" scope="row">{{ index + 1 }}</th>
        <td style="font-weight: 400">{{ order.prodId }}</td>
        <td style="font-weight: 400">{{ order.product.print_name }}</td>
        <td class="text-center">
            {{ order.product.shelf_life }}
        </td>
        <td class="text-center">
            {{ manDate }}
        </td>
        <td class="text-center">
            {{ expirationDate }}
        </td>
        <td class="d-flex justify-content-center">
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
import {mapActions} from 'vuex'

export default {
    name: "ExpirationDateTableItem",
    props: ['order', 'index'],
    methods: {
        ...mapActions(['removeFromBasketAction']),
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
        manDate() {
            if (this.order.product.manufacturing_date) {
                const date = new Date(this.order.product.manufacturing_date);
                const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
                return `${date.getDate()}.${month}.${date.getFullYear()}`;
            } else {
                return ' - '
            }

        },
        expirationDate() {
            if (this.order.product.shelf_life && this.order.product.manufacturing_date) {
                const shelfLife = parseInt(this.order.product.shelf_life)
                const manDate = new Date(this.order.product.manufacturing_date)
                const expDate = new Date(manDate.setMonth(manDate.getMonth() + shelfLife))
                const month = expDate.getMonth() < 9 ? `0${expDate.getMonth() + 1}` : expDate.getMonth() + 1;
                return `${expDate.getDate()}.${month}.${expDate.getFullYear()}`
            } else return ' - '
        }
    }
}
</script>

<style lang="scss" scoped>
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
