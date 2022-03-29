<template>
    <tr
        v-if="getCategoryProducts"
        class="aroma-table-item">
        <th
            scope="row"
            style="background-color: #ff99cc;"
        >
            {{ product.gender }}
        </th>
        <td
            :class="getCellStyle"
        >
            {{ product.code }}
        </td>
        <td v-if="isPartner">
            <input
                v-if="isDisabledTwo"
                type="number"
                class="form-control"
                min="0"
                name="02"
                v-model="amountTwo"
                :class="{disabled: isDisabledTwo}"
                :disabled="!isDisabledTwo"
                @input="addToBasket"
            >
            <div v-else class="empty-cell">-</div>
        </td>
        <td>
            <input
                v-if="isDisabledThree"
                type="number"
                class="form-control"
                min="0"
                name="03"
                v-model="amountThree"
                :class="{disabled: isDisabledThree}"
                :disabled="!isDisabledThree"
                @input="addToBasket"
            >
            <div v-else class="empty-cell">-</div>
        </td>
        <td>
            <input
                v-if="isDisabledSeven"
                type="number"
                class="form-control"
                min="0"
                name="07"
                v-model="amountSeven"
                :class="{disabled: isDisabledSeven}"
                :disabled="!isDisabledSeven"
                @input="addToBasket"
            >
            <div v-else class="empty-cell">-</div>
        </td>
        <td>
            <input
                v-if="isDisabledTwelve"
                type="number"
                class="form-control"
                min="0"
                name="12"
                v-model="amountTwelve"
                :class="{disabled: isDisabledTwelve}"
                :disabled="!isDisabledTwelve"
                @input="addToBasket"
            >
            <div v-else class="empty-cell">-</div>
        </td>
        <td>
            <input
                v-if="isDisabledFifty"
                type="number"
                class="form-control"
                min="0"
                name="50"
                v-model="amountFifty"
                :class="{disabled: isDisabledFifty}"
                :disabled="!isDisabledFifty"
                @input="addToBasket"
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
                switch (e.target.name) {
                    case '02':
                        this.amountTwo = 0
                        break
                    case '03':
                        this.amountThree = 0
                        break
                    case '07':
                        this.amountSeven = 0
                        break
                    case '12':
                        this.amountTwelve = 0
                        break
                    case '50':
                        this.amountFifty = 0
                        break
                }
            }
            if (e.target.value >= 0) {
                console.log('addToBasket target name', e.target.name)
                const curProduct = this.getCategoryProducts
                    .find(i => {
                        if(
                            i.name.includes(this.product.code)
                            &&
                            // i.name.includes(e.target.name)
                            (i.vendor_code.charAt(3) + i.vendor_code.charAt(4) === e.target.name)
                        ) return true
                    })
                console.log('addToBasket curProduct', curProduct)
                console.log('addToBasket this.product', this.product)
                console.log('addToBasket this.getCategoryProducts', this.getCategoryProducts)
                let curAmount = null
                switch (e.target.name) {
                    case '02':
                        curAmount = this.amountTwo
                        break
                    case '03':
                        curAmount = this.amountThree
                        break
                    case '07':
                        curAmount = this.amountSeven
                        break
                    case '12':
                        curAmount = this.amountTwelve
                        break
                    case '50':
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
            this.checkProdGroup()
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
            this.$emit('changeSum')
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
        ...mapGetters(['getCategoryProducts', 'getLSOrder', 'isPartner']),
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
                    // i.name.includes('2мл')
                    (i.vendor_code.charAt(3)+i.vendor_code.charAt(4)) === '02'
                )
            // console.log('isDisabledTwo', curProd, !!curProd)
            return !!curProd;
        },
        isDisabledThree() {
            const curProd = this.getCategoryProducts
                .find(i => i.name.includes(this.product.code)
                    &&
                    // i.name.includes('3мл')
                    (i.vendor_code.charAt(3)+i.vendor_code.charAt(4)) === '03'
                )
            return !!curProd;
        },
        isDisabledSeven() {
            const curProd = this.getCategoryProducts
                .find(i => i.name.includes(this.product.code)
                    &&
                    // i.name.includes('7мл')
                    (i.vendor_code.charAt(3)+i.vendor_code.charAt(4)) === '07'
                )
            return !!curProd;
        },
        isDisabledTwelve() {
            const curProd = this.getCategoryProducts
                .find(i => i.name.includes(this.product.code)
                    &&
                    // i.name.includes('12мл')
                    (i.vendor_code.charAt(3)+i.vendor_code.charAt(4)) === '12'
                )
            return !!curProd;
        },
        isDisabledFifty() {
            const curProd = this.getCategoryProducts
                .find(i => i.name.includes(this.product.code)
                    &&
                    // i.name.includes('50мл')
                    (i.vendor_code.charAt(3)+i.vendor_code.charAt(4)) === '50'
                )
            return !!curProd;
        },
    },
    mounted() {
        this.checkProdGroup()
        console.log('AromaGroupsItem', this.product)
    }
}
</script>

<style lang="scss" scoped>
.aroma-table-item {
    td, th {
        text-align: center;
        vertical-align: middle;
    }

    td:first-of-type {
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
    //background-color: #cfe2ff;
    background-color: white;
}
</style>
