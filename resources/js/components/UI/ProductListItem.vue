<template>
    <tr
        class="product-list-item"
        :class="[amount > 0 ? 'table-success': '']"
    >
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ product.vendor_code }}</td>
        <td>{{ product.print_name }}</td>
        <td>
            <img
                v-if="product.is_sell_through_site_status_id && !isProfessionalStatus"
                :src="icLock"
                title="Только для проф косметологов"
                alt="lock"
            >
            <input
                v-else-if="product.price_for_partners || product.price_retail"
                type="number"
                class="form-control"
                v-model="amount"
                min="0"
            >
            <p class="text-center" v-else>&mdash;</p>
        </td>
        <td class="text-center" v-if="isPartner && product.price_for_partners">
            {{ product.price_for_partners }} P
        </td>
        <td class="text-center" v-else-if="product.price_retail">
            {{ product.price_retail }} P
        </td>
        <td class="text-center" v-else>
            <p>нет в наличии</p>
        </td>
        <td class="text-center">{{ product.points }}</td>
    </tr>
</template>

<script>
import icLock from '../../../assets/img/ic-lock.svg'
export default {
    name: "ProductListItem",
    props: ['product', 'isPartner', 'index', 'isProfessionalStatus'],
    data() {
        return {
            amount: 0,
            icLock
        }
    },
}
</script>

<style lang="scss" scoped>
.product-list-item {
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;

    &:hover {
        cursor: pointer;

    }

    input {
        font-size: 20px;
    }
}
</style>
