<template>
    <tr
        class="product-list-item"
        :class="[amount > 0 ? 'table-success': '']"
        @click="selectCard"
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
import {mapMutations} from 'vuex'
export default {
    name: "ProductListItem",
    props: ['product', 'isPartner', 'index', 'isProfessionalStatus'],
    data() {
        return {
            amount: 0,
            icLock
        }
    },
    methods: {
        selectCard(e) {
            if (e.target.tagName !== 'INPUT') {
                console.log('selectCardList', this.product, e.target.tagName);
                if (this.product.slug) {
                    if (this.product.slug) {
                        const partUrls = window.location.pathname.split('/')
                        console.log(window.location.pathname.split('/'))
                        window.location.href = `/catalog/${partUrls[2]}/${partUrls[3]}/${this.product.slug}`;
                    } else {
                        this.setToastError('Продукт не имеет адреса')
                    }
                } else {
                    this.setToastError('Продукт не имеет адреса')
                }
            }
        }
    }
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
