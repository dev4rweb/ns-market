<template>
    <div class="d-flex flex-column align-items-center justify-content-center">
        <table
            v-if="aromaGroups"
            class="table table-sm table-responsive-sm table-light table-bordered border-secondary shadow-lg small-table">
            <thead class="table-primary">
            <tr>
                <th
                    style="width: 70px; cursor: pointer;"
                    scope="col"
                    @click="sortByGender"
                >
                    Пол
                    <span v-if="genderDescSort === 0" class="ms-3">&#8801;</span>
                    <span
                        v-if="genderDescSort === 1"
                        class="ms-3"
                    >
                        &#8595;
                    </span>
                </th>
                <th
                    style="cursor: pointer;"
                    scope="col"
                    @click="sortByCode"
                >
                    Код
                    <span v-if="codeDescSort === 0" class="ms-3">&#8801;</span>
                    <span
                        v-if="codeDescSort === 1"
                        class="ms-3"
                    >
                        &#8595;
                    </span>
                </th>
                <th v-if="isPartner" style="width: 80px" scope="col">Пробник, 2 мл</th>
                <th style="width: 80px" scope="col">Спрей, <br> 3 мл</th>
                <th style="width: 80px" scope="col">Масло, <br> 7 мл</th>
                <th style="width: 80px" scope="col">Спрей, <br> 12 мл</th>
                <th style="width: 80px" scope="col">Спрей, <br> 50 мл</th>
            </tr>
            </thead>
            <tbody>
            <AromaGroupsTableItem
                v-if="aromaGroups"
                v-for="product in aromaGroups"
                :product="product"
                :key="product.id"
                @changeSum="getPricePointsAroma"
            />
            </tbody>
            <tfoot>
            <tr>
                <td></td>
                <td> Всего: </td>
                <td v-if="isPartner">{{ twoMl }}</td>
                <td>{{ threeMl }}</td>
                <td>{{ sevenMl }}</td>
                <td>{{ twelveMl }}</td>
                <td>{{ fiftyMl }}</td>
            </tr>
            </tfoot>
        </table>
        <div
            class="mb-3 price"
            v-if="pricePointsAroma"
            v-html="pricePointsAroma"
        >
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import AromaGroupsTableItem from "./AromaGroupsTableItem";

export default {
    name: "AromaGroupsTable",
    data() {
        return {
            aromaGroups: null,
            genderDesc: true,
            genderDescSort: 0,
            codeDesc: true,
            codeDescSort: 0,
            pricePointsAroma: null,
            twoMl: ' - ',
            threeMl: ' - ',
            sevenMl: ' - ',
            twelveMl: ' - ',
            fiftyMl: ' - ',
        }
    },
    methods: {
        sortByGender() {
            console.log('sortByGender', this.genderDescSort)
            if (this.genderDesc)
                this.aromaGroups = this.getAromaGroups.sort((a, b) =>
                    (a.gender < b.gender) ? 1 :
                        ((b.gender < a.gender) ? -1 : 0)
                )
            else
                this.aromaGroups = this.getAromaGroups.sort((a, b) =>
                    (a.gender > b.gender) ? 1 :
                        ((b.gender > a.gender) ? -1 : 0)
                )
            this.genderDesc = !this.genderDesc
            if (this.genderDescSort === 0) this.genderDescSort = 1
            this.codeDescSort = 0
        },
        sortByCode() {
            // console.log('sortByCode', this.aromaGroups)
            if (this.codeDesc)
                this.aromaGroups = this.getAromaGroups.sort((a, b) =>
                    (a.code < b.code) ? 1 :
                        ((b.code < a.code) ? -1 : 0)
                )
            else
                this.aromaGroups = this.getAromaGroups.sort((a, b) =>
                    (a.code > b.code) ? 1 :
                        ((b.code > a.code) ? -1 : 0)
                )
            this.codeDesc = !this.codeDesc
            if (this.codeDescSort === 0) this.codeDescSort = 1
            this.genderDescSort = 0
        },
        getPricePointsAroma() {
            const aromas = this.getLSOrder.filter(
                i => i.prodId.length === 5
            )
            if (aromas.length) {
                let price = 0
                let points = 0
                aromas.forEach(i => {
                    const priceItem = this.isPartner ?
                        i.product.price_for_partners :
                        i.product.price_retail

                    price += parseInt(i.amount) * priceItem
                    points += parseInt(i.amount) * i.product.points
                });
                // console.log('getPricePointsAroma', aromas)
                let twoBottles = 0
                let threeBottles = 0
                let sevenBottles = 0
                let twelveBottles = 0
                let fiftyBottles = 0
                aromas.forEach(i => {
                    let lastNum = i.prodId.charAt(3) + i.prodId.charAt(4)
                    // console.log('lastNum ', lastNum)
                    switch (lastNum) {
                        case '02':
                            twoBottles += parseInt(i.amount)
                            break;
                        case '03':
                            threeBottles += parseInt(i.amount)
                            // console.log('threeBottles', threeBottles, i.amount)
                            break;
                        case '07':
                            sevenBottles += parseInt(i.amount)
                            break;
                        case '12':
                            twelveBottles += parseInt(i.amount)
                            break;
                        case '50':
                            fiftyBottles += parseInt(i.amount)
                            break;
                        default:
                            break;
                    }
                });
                /*twoBottles = twoBottles ? `2мл - ${twoBottles}шт. <br>` : ''
                threeBottles = threeBottles ? `3мл - ${threeBottles}шт. <br>` : ''
                sevenBottles = sevenBottles ? `7мл - ${sevenBottles}шт. <br>` : ''
                twelveBottles = twelveBottles ? `12мл - ${twelveBottles}шт. <br>` : ''
                fiftyBottles = fiftyBottles ? `50мл - ${fiftyBottles}шт. <br>` : ''*/
                this.twoMl = twoBottles ?? ' - '
                this.threeMl = threeBottles ?? ' - '
                this.sevenMl = sevenBottles ?? ' - '
                this.twelveMl = twelveBottles ?? ' - '
                this.fiftyMl = fiftyBottles ?? ' - '
                this.pricePointsAroma = `Итого:
                Баллов - ${points} / Рублей - ${price}`
            } else this.pricePointsAroma = null
        }
    },
    computed: {
        ...mapGetters(['getAromaGroups', 'isPartner', 'getLSOrder']),

    },
    components: {
        AromaGroupsTableItem
    },
    mounted() {
        this.aromaGroups = this.getAromaGroups
        this.getPricePointsAroma()
    }
}
</script>

<style lang="scss" scoped>
.table > :not(caption) > * > * {
    background-color: #ff99cc;
}

.small-table {
    max-width: 560px;

    th {
        text-align: center;
    }

    tfoot {
        td {
            text-align: center;
            vertical-align: middle;
            font-size: 20px;
            font-weight: bold;
        }
    }
}

.price {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
}
</style>
