<template>
    <tr
        v-if="getCategoryProducts"
        class="aroma-table-item">
        <th scope="row">{{ product.code }}</th>
        <td>{{ product.gender }}</td>
        <td>
            <input
                type="number"
                class="form-control"
                min="0"
                :class="{disabled: isDisabledTwo}"
                :disabled="isDisabledTwo"
            >
        </td>
        <td>
            <input
                type="number"
                class="form-control"
                min="0"
                :class="{disabled: isDisabledThree}"
                :disabled="isDisabledThree"
            >
        </td>
        <td>
            <input
                type="number"
                class="form-control"
                min="0"
                :class="{disabled: isDisabledSeven}"
                :disabled="isDisabledSeven"
            >
        </td>
        <td>
            <input
                type="number"
                class="form-control"
                min="0"
                :class="{disabled: isDisabledTwelve}"
                :disabled="isDisabledTwelve"
            >
        </td>
        <td>
            <input
                type="number"
                class="form-control"
                :class="{disabled: isDisabledFifty}"
                :disabled="isDisabledFifty"
            >
        </td>
    </tr>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "AromaGroupsTableItem",
    props: ['product'],
    methods: {},
    computed: {
        ...mapGetters(['getCategoryProducts']),
        isDisabledTwo() {
            const curProd = this.getCategoryProducts
                .find(i => i.name.includes(this.product.code)
                    &&
                    i.name.includes('2мл'))
            return !!curProd;
        },
        isDisabledThree() {
            const curProd = this.getCategoryProducts
                .find(i => i.name.includes(this.product.code)
                    &&
                    i.name.includes('3мл'))
            return !!curProd;
        },
        isDisabledSeven() {
            const curProd = this.getCategoryProducts
                .find(i => i.name.includes(this.product.code)
                    &&
                    i.name.includes('7мл'))
            return !!curProd;
        },
        isDisabledTwelve() {
            const curProd = this.getCategoryProducts
                .find(i => i.name.includes(this.product.code)
                    &&
                    i.name.includes('12мл'))
            return !!curProd;
        },
        isDisabledFifty() {
            const curProd = this.getCategoryProducts
                .find(i => i.name.includes(this.product.code)
                    &&
                    i.name.includes('50мл'))
            return !!curProd;
        },
    }
}
</script>

<style lang="scss" scoped>
.aroma-table-item {
    td, th {
        text-align: center;
    }
}

.form-control {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
}

.disabled {
    background-color: #cfe2ff;
}
</style>
