<template>
    <tr
        class="product-list-item"
        :class="[amount > 0 ? 'table-success': '']"
    >
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ product.vendor_code }}</td>
        <td>{{ product.print_name }}</td>
        <td>
            <input
                type="number"
                class="form-control"
                v-model="amount"
                min="0"
            >
        </td>
        <td class="text-center" v-if="isPartner">
            {{ product.price_for_partners }} P
        </td>
        <td class="text-center" v-else>
            {{ product.price_retail }} P
        </td>
        <td class="text-center">{{ product.points }}</td>
    </tr>
</template>

<script>
export default {
    name: "ProductListItem",
    props: ['product', 'isPartner', 'index'],
    data() {
        return {
            amount: 0
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
