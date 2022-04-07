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
                    v-if="order.status === 1"
                    class="bi bi-pencil edit-my-order"
                    @click="editOrder"
                >
                </i>
            </div>
        </td>
        <td>
            <div class="d-flex justify-content-center align-items-center">
                <span
                    v-if="order.status < 2"
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
import {mapMutations, mapGetters, mapActions} from 'vuex'

export default {
    name: "MyOrdersTableItem",
    props: ['order', 'index'],
    methods: {
        ...mapMutations(['setRemoveOrderModal', 'setEditOrderModal']),
        ...mapActions(['replaceBasketDraftOrderAction']),
        editOrder() {
            // console.log('editOrder', this.order)
            if (this.getBasketOrder) {
                this.setEditOrderModal(this.order)
            } else {
                // console.log('basket empty')
                this.replaceBasketDraftOrderAction(this.order)
                this.setEditOrderModal(null)
            }
        },
        removeOrder() {
            console.log('removeOrder', this.order)
            this.setRemoveOrderModal(this.order)
        }
    },
    computed: {
        ...mapGetters(['getBasketOrder']),
        getDataOrder() {
            if (this.order.created_at) {
                const date = new Date(this.order.created_at)
                const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
                const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
                const hours = date.getHours()
                const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
                const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
                return `${day}.${month}.${date.getFullYear()} ${hours}:${minutes}:${seconds}`;
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
    width: 30px;
    height: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    background-color: red;
    color: white;

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
