<template>
    <tr>
        <th v-if="isPartner" scope="row">
            <div
                v-if=" isDisabledTwo"
                class="d-flex justify-content-center"
            >
                <input
                    type="number"
                    class="form-control"
                    min="0"
                    name="02"
                    v-model="amountTwo"
                    :class="{disabled: isDisabledTwo}"
                    :disabled="!isDisabledTwo"
                    @input="addToBasket"
                >
            </div>
            <div v-else class="empty-cell">-</div>
        </th>

        <td>
            <div
                v-if="isDisabledThree"
                class="d-flex justify-content-center"
            >
                <input
                    type="number"
                    class="form-control"
                    min="0"
                    name="03"
                    v-model="amountThree"
                    :class="{disabled: isDisabledThree}"
                    :disabled="!isDisabledThree"
                    @input="addToBasket"
                >
            </div>
            <div v-else class="empty-cell">-</div>
        </td>

        <td>
            <div
                v-if="isDisabledSeven"
                class="d-flex justify-content-center"
            >
                <input
                    type="number"
                    class="form-control"
                    min="0"
                    name="07"
                    v-model="amountSeven"
                    :class="{disabled: isDisabledSeven}"
                    :disabled="!isDisabledSeven"
                    @input="addToBasket"
                >
            </div>
            <div v-else class="empty-cell">-</div>
        </td>

        <td>
            <div
                v-if="isDisabledTwelve"
                class="d-flex justify-content-center"
            >
                <input
                    type="number"
                    class="form-control"
                    min="0"
                    name="12"
                    v-model="amountTwelve"
                    :class="{disabled: isDisabledTwelve}"
                    :disabled="!isDisabledTwelve"
                    @input="addToBasket"
                >
            </div>
            <div v-else class="empty-cell">-</div>
        </td>

        <td>
            <div
                v-if="isDisabledFifty"
                class="d-flex justify-content-center"
            >
                <input
                    type="number"
                    class="form-control"
                    min="0"
                    name="50"
                    v-model="amountFifty"
                    :class="{disabled: isDisabledFifty}"
                    :disabled="!isDisabledFifty"
                    @input="addToBasket"
                >
            </div>
            <div v-else class="empty-cell">-</div>
        </td>
    </tr>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name: "AromaShortTableItem",
    data() {
        return {
            amountTwo: '',
            amountThree: '',
            amountSeven: '',
            amountTwelve: '',
            amountFifty: '',
            price: 0,
            points: 0
        }
    },
    methods: {
        ...mapMutations(['setToastError', 'setPriceShortTable', 'setPointsShortTable']),
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
                // console.log('addToBasket target name', e.target.name)
                const curProduct = this.getAromaCurrentProducts
                    .find(i => i.name.includes(this.getAromaCurrentGroup.code)
                        &&
                        // i.name.includes(e.target.name))
                        (i.vendor_code.charAt(3) + i.vendor_code.charAt(4) === e.target.name)
                    )
                console.log('addToBasket curProduct', curProduct)
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
                    if (e.target.value == 0) {
                        this.removeFromBasketAction(orderObj)
                    }
                }
                this.checkProdGroup()
            }
        },
        checkProdGroup() {
            this.price = 0
            this.points = 0
            if (this.getLSOrder) {
                const groupProds = this.getLSOrder
                    .filter(i => this.getVendorExp(i.prodId) === this.getAromaCurrentGroup.code)
                if (groupProds.length) {
                    groupProds.forEach(groupProd => {
                        console.log('checkAmountTwo lsOrder&product', this.getLSOrder, this.product)
                        console.log('checkAmountTwo groupProd', groupProd)
                        const price = this.isPartner ? groupProd.product.price_retail : groupProd.product.price_for_partners
                        const lastNumberProdId = groupProd.prodId.charAt(3) + groupProd.prodId.charAt(4)
                        console.log('checkAmountTwo lastNumberProdId', lastNumberProdId)
                        if (lastNumberProdId === '02') {
                            this.amountTwo = groupProd.amount
                            this.price += parseInt(groupProd.amount) * price
                            this.points += parseInt(groupProd.amount) * groupProd.product.points
                        }
                        if (lastNumberProdId === '03') {
                            this.amountThree = groupProd.amount
                            this.price += parseInt(groupProd.amount) * price
                            this.points += parseInt(groupProd.amount) * groupProd.product.points
                        }
                        if (lastNumberProdId === '07') {
                            this.amountSeven = groupProd.amount
                            this.price += parseInt(groupProd.amount) * price
                            this.points += parseInt(groupProd.amount) * groupProd.product.points
                        }
                        if (lastNumberProdId === '12') {
                            this.amountTwelve = groupProd.amount;
                            this.price += parseInt(groupProd.amount) * price
                            this.points += parseInt(groupProd.amount) * groupProd.product.points
                        }
                        if (lastNumberProdId === '50') {
                            this.amountFifty = groupProd.amount
                            this.price += parseInt(groupProd.amount) * price
                            this.points += parseInt(groupProd.amount) * groupProd.product.points
                        }
                    });
                }
            }
            this.setPriceShortTable(this.price)
            this.setPointsShortTable(this.points)
            console.log('checkProdGroup this.price', this.price)
            if(this.price > 0) this.$emit('chang-btn', true)
            else this.$emit('chang-btn', false)
            // console.log('checkProdGroup this.points', this.points)
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
        ...mapGetters([
            'getLSOrder', 'getAromaCurrentProducts', 'getAromaCurrentGroup',
            'isPartner'
        ]),
        isDisabledTwo() {
            const curProd = this.getAromaCurrentProducts
                .find(i => i.name.includes(this.getAromaCurrentGroup.code)
                    &&
                    // i.name.includes('2мл')
                    (i.vendor_code.charAt(3) + i.vendor_code.charAt(4)) === '02'
                )
            return !!curProd;
        },
        isDisabledThree() {
            const curProd = this.getAromaCurrentProducts
                .find(i => i.name.includes(this.getAromaCurrentGroup.code)
                    &&
                    // i.name.includes('3мл')
                    (i.vendor_code.charAt(3) + i.vendor_code.charAt(4)) === '03'
                )
            // console.log('isDisabledTwo', curProd, !!curProd)
            return !!curProd;
        },
        isDisabledSeven() {
            const curProd = this.getAromaCurrentProducts
                .find(i => i.name.includes(this.getAromaCurrentGroup.code)
                    &&
                    // i.name.includes('7мл')
                    (i.vendor_code.charAt(3) + i.vendor_code.charAt(4)) === '07'
                )
            return !!curProd;
        },
        isDisabledTwelve() {
            const curProd = this.getAromaCurrentProducts
                .find(i => i.name.includes(this.getAromaCurrentGroup.code)
                    &&
                    // i.name.includes('12мл')
                    (i.vendor_code.charAt(3) + i.vendor_code.charAt(4)) === '12'
                )
            return !!curProd;
        },
        isDisabledFifty() {
            const curProd = this.getAromaCurrentProducts
                .find(i => i.name.includes(this.getAromaCurrentGroup.code)
                    &&
                    // i.name.includes('50мл'))
                    (i.vendor_code.charAt(3) + i.vendor_code.charAt(4)) === '50'
                )
            // console.log('isDisabledTwo', curProd, !!curProd)
            return !!curProd;
        },
    },
    mounted() {
        this.checkProdGroup()
    }
}
</script>

<style lang="scss" scoped>
tr {
    th, td {
        .empty-cell {
            font-size: 25px;
            font-weight: bold;
            text-align: center;
        }

        div {
            width: 150px;

            input {
                width: 70px;
                background-color: #cfe2ff;
                font-size: 20px;
                font-weight: bold;
                text-align: center;
            }
        }
    }
}

.disabled {
    //background-color: #cfe2ff;
    background-color: white;
}
</style>
