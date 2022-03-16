<template>
    <tr
        v-if="getCategoryProducts"
        class="aroma-table-item">
        <th
            scope="row"
            :class="getCellStyle"
        >
            {{ product.code }}
        </th>
        <td
            :class="getCellStyle"
        >
            {{ product.gender }}
        </td>
        <td>
            <input
                v-if="isDisabledTwo"
                type="number"
                class="form-control"
                min="0"
                name="2мл"
                v-model="amountTwo"
                :class="{disabled: isDisabledTwo}"
                :disabled="!isDisabledTwo"
                @blur="addToBasket"
            >
            <div v-else class="empty-cell">-</div>
        </td>
        <td>
            <input
                v-if="isDisabledThree"
                type="number"
                class="form-control"
                min="0"
                name="3мл"
                v-model="amountThree"
                :class="{disabled: isDisabledThree}"
                :disabled="!isDisabledThree"
                @blur="addToBasket"
            >
            <div v-else class="empty-cell">-</div>
        </td>
        <td>
            <input
                v-if="isDisabledSeven"
                type="number"
                class="form-control"
                min="0"
                name="7мл"
                v-model="amountSeven"
                :class="{disabled: isDisabledSeven}"
                :disabled="!isDisabledSeven"
                @blur="addToBasket"
            >
            <div v-else class="empty-cell">-</div>
        </td>
        <td>
            <input
                v-if="isDisabledTwelve"
                type="number"
                class="form-control"
                min="0"
                name="12мл"
                v-model="amountTwelve"
                :class="{disabled: isDisabledTwelve}"
                :disabled="!isDisabledTwelve"
                @blur="addToBasket"
            >
            <div v-else class="empty-cell">-</div>
        </td>
        <td>
            <input
                v-if="isDisabledFifty"
                type="number"
                class="form-control"
                min="0"
                name="50мл"
                v-model="amountFifty"
                :class="{disabled: isDisabledFifty}"
                :disabled="!isDisabledFifty"
                @blur="addToBasket"
            >
            <div v-else class="empty-cell">-</div>
        </td>
    </tr>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name: "AromaGroupsTableItem",
    props: ['product'],
    data() {
        return {
            amountTwo: '',
            amountThree: '',
            amountSeven: '',
            amountTwelve: '',
            amountFifty: '',
        }
    },
    methods: {
        ...mapMutations(['setToastError']),
        ...mapActions(['addToBasketAction', 'removeFromBasketAction']),
        addToBasket(e) {
            console.log('addToBasket', e.target.value)
            if (e.target.value < 0) {
                this.setToastError('Некорректное значение');
                e.target.value = '';
            }
            if (e.target.value >= 0) {
                // console.log('addToBasket target name', e.target.name)
                const curProduct = this.getCategoryProducts
                    .find(i => i.name.includes(this.product.code)
                        &&
                        i.name.includes(e.target.name))
                console.log('addToBasket curProduct', curProduct)
                let curAmount = null
                switch (e.target.name) {
                    case '2мл':
                        curAmount = this.amountTwo
                        break
                    case '3мл':
                        curAmount = this.amountThree
                        break
                    case '7мл':
                        curAmount = this.amountSeven
                        break
                    case '12мл':
                        curAmount = this.amountTwelve
                        break
                    case '50мл':
                        curAmount = this.amountFifty
                        break
                }
                if (curProduct) {
                    const orderObj = {
                        prodId: curProduct.vendor_code,
                        amount: curAmount,
                        product: curProduct,
                        created_at: Date.now(),
                    };
                    console.log('addToBasket orderObj', orderObj)
                    if (e.target.value > 0) this.addToBasketAction(orderObj)
                    if (e.target.value == 0) this.removeFromBasketAction(orderObj)
                }
            }
        },
        checkProdGroup() {
            if (this.getLSOrder) {
                const groupProds = this.getLSOrder.filter(i => this.getVendorExp(i.prodId) === this.product.code)
                if (groupProds.length) {
                    groupProds.forEach(groupProd => {
                        console.log('checkAmountTwo lsOrder&product', this.getLSOrder, this.product)
                        console.log('checkAmountTwo groupProd', groupProd)
                        const lastNumberProdId = groupProd.prodId.charAt(3) + groupProd.prodId.charAt(4)
                        console.log('checkAmountTwo lastNumberProdId', lastNumberProdId)
                        if (lastNumberProdId === '02') this.amountTwo = groupProd.amount
                        if (lastNumberProdId === '03') this.amountThree = groupProd.amount
                        if (lastNumberProdId === '07') this.amountSeven = groupProd.amount
                        if (lastNumberProdId === '12') this.amountTwelve = groupProd.amount
                        if (lastNumberProdId === '50') this.amountFifty = groupProd.amount
                    });
                }
            }
        },
        getVendorExp(prodId) {
            const firstNumber = prodId.charAt(0)
            const aromaNumber = prodId.charAt(1) + prodId.charAt(2)
            switch (firstNumber) {
                case '1':
                    return `C-${aromaNumber}`
                case '2':
                    return `D-${aromaNumber}`
                case '3':
                    return `K-${aromaNumber}`
                default:
                    return `M-${aromaNumber}`
            }
        },
    },
    computed: {
        ...mapGetters(['getCategoryProducts', 'getLSOrder']),
        getCellStyle() {
            if (this.product.code.includes('C-')) return 'orange'
            if (this.product.code.includes('D-')) return 'green'
            if (this.product.code.includes('K-')) return 'red'
            if (this.product.code.includes('M-')) return 'blue'
        },
        isDisabledTwo() {
            const curProd = this.getCategoryProducts
                .find(i => i.name.includes(this.product.code)
                    &&
                    i.name.includes('2мл'))
            // console.log('isDisabledTwo', curProd, !!curProd)
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
    },
    mounted() {
        this.checkProdGroup()
    }
}
</script>

<style lang="scss" scoped>
.aroma-table-item {
    td, th {
        text-align: center;
        vertical-align: middle;
    }

    th {
        font-size: 20px;
    }

    td {
        .empty-cell {
            font-size: 25px;
            font-weight: bold;
        }
    }

    .orange {
        background-color: #EBAA3C;
        color: white;
    }
    .green {
        background-color: #86B649;
        color: white;
    }
    .red {
        background-color: #D75C34;
        color: white;
    }
    .blue {
        background-color: #3D8BCC;
        color: white;
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
