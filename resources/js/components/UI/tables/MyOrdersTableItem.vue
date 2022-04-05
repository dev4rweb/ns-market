<template>
    <tr>
        <th scope="row">{{ index + 1 }}</th>
        <!--        <td>{{ order.created_at }}</td>-->
        <td>{{ getDataOrder }}</td>
        <td> {{ order.products.length }}</td>
        <td>{{ order.amount_weight }}</td>
        <td>{{ order.amount_score }}</td>
        <td>{{ order.order_price }}</td>
        <td>{{ orderStatus }}</td>
        <td>
            <div class="d-flex justify-content-center align-items-center">
                <i
                    class="bi bi-pencil edit-my-order"
                    @click="editOrder"
                >

                </i>
            </div>
        </td>
        <td>
            <div class="d-flex justify-content-center align-items-center">
                <span
                    class="remove-my-order"
                    @click="removeOrder"
                >
                &times;
            </span>
            </div>
        </td>
    </tr>
</template>

<script>
import {orderStatuses} from "../../../store/utils/orderStatuses";
import {mapActions} from 'vuex'

export default {
    name: "MyOrdersTableItem",
    props: ['order', 'index'],
    methods: {
        ...mapActions(['removeMyOrderAction']),
        editOrder() {
            console.log('editOrder', this.order)
        },
        removeOrder() {
            console.log('removeOrder', this.order)
            this.removeMyOrderAction(this.order.id)
        }
    },
    computed: {
        getDataOrder() {
            if (this.order.created_at) {
                const date = new Date(this.order.created_at)
                const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
                return `${date.getDate()}.${month}.${date.getFullYear()}`;
            }
            return ''
        },
        orderStatus() {
            return orderStatuses(this.order.status)
        }
    }
}
</script>

<style lang="scss" scoped>
.edit-my-order {
    font-size: 20px;
    color: #038ED7;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;

    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.2, 1.2);
        -moz-transform: scale(1.2, 1.2);
        -ms-transform: scale(1.2, 1.2);
        -o-transform: scale(1.2, 1.2);
        transform: scale(1.2, 1.2);
    }
}

.remove-my-order {
    font-size: 25px;
    font-weight: bold;
    color: red;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;

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
