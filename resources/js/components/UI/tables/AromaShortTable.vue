<template>
    <div>
        <table
            class="table table-sm table-responsive-sm table-light table-bordered border-secondary shadow-lg small-table">
            <thead class="table-primary">
            <tr>
                <th
                    v-if="isPartner"
                    scope="col"
                    class="text-center"
                >
                    <b>Пробник, 2 мл</b><br>
                    {{ getAromaCurrentProducts[0].points }} PV
                    / {{ getAromaCurrentProducts[0].price_for_partners }} руб.
                </th>
                <th
                    scope="col"
                    class="text-center"
                >
                    <b>Спрей, 3 мл</b><br>
                    {{ getPricePv('03') }}
                </th>
                <th
                    scope="col"
                    class="text-center"
                >
                    <b>Масло, 7 мл</b><br>
                    {{ getPricePv('07') }}
                </th>
                <th
                    scope="col"
                    class="text-center"
                >
                    <b>Спрей, 12 мл</b><br>
                    {{ getPricePv('12') }}
                </th>
                <th
                    scope="col"
                    class="text-center"
                >
                    <b>Спрей, 50 мл</b><br>
                    {{ getPricePv('50') }}
                </th>
            </tr>
            </thead>
            <tbody>
                <AromaShortTableItem @chang-btn="changeBtnHandler" />
            </tbody>
        </table>
        <div class="d-flex justify-content-end align-items-center mt-4 mb-3 ">
            <span
                class="price me-3"
            >
                Итого:
                {{ getPointsShortTable }} PV
                /
                {{ getPriceShortTable }} руб.
            </span>

            <button
                v-if="isAdded"
                class="btn btn-lg btn-success"
                @click="basketAdd"
            >
                Добавлено
            </button>
            <button
                v-else
                class="btn btn-lg btn-info"
                @click="basketAdd"
            >
                добавить в корзину
            </button>
        </div>
    </div>
</template>

<script>
import AromaShortTableItem from "./AromaShortTableItem";
import {mapGetters} from 'vuex'
export default {
    name: "AromaShortTable",
    data() {
        return {
            isAdded: false
        }
    },
    components: {
        AromaShortTableItem
    },
    methods: {
        changeBtnHandler(isAdded) {
            this.isAdded = isAdded
        },
        basketAdd() {
            window.location.href = '/basket'
        },
        getPricePv(vendorCode) {
            // console.log('getPricePv')
            if (this.getAromaCurrentProducts) {
                const curProd = this.getAromaCurrentProducts.find(i => {
                    const lastNumbers = i.vendor_code.charAt(3) + i.vendor_code.charAt(4)
                    return vendorCode === lastNumbers
                });
                if (curProd && this.isPartner) {
                    const price = curProd.price_for_partners ?? curProd.price_retail ?? '0'
                    const points = curProd.points ?? '0'
                    return `${points} баллов / ${price} руб.`
                }
                if (curProd) {
                    const price = curProd.price_retail ?? '0'
                    const points = curProd.points ?? '0'
                    return `${points} баллов / ${price} руб.`
                }
                return '-'
            } else return '-'
        }
    },
    computed: {
        ...mapGetters(['getPriceShortTable', 'getPointsShortTable', 'isPartner', 'getAromaCurrentProducts'])
    }
}
</script>

<style lang="scss" scoped>
tr {
    th {
        background-color: rgb(255, 153, 204);
    }
}
.btn-info{
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
    &:hover, &:focus {
        border-color: white;
        background-color: #038ED7;
        color: white;
        -webkit-transform: scale(1.1, 1.1);
        -moz-transform: scale(1.1, 1.1);
        -ms-transform: scale(1.1, 1.1);
        -o-transform: scale(1.1, 1.1);
        transform: scale(1.1, 1.1);
    }
}
.price {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
}
</style>
