<template>
    <div>
        <table
            class="table table-sm table-responsive-sm table-light table-bordered border-secondary table-hover shadow-lg small-table">
            <thead class="table-primary">
            <tr>
                <th
                    scope="col"
                    class="text-center"
                >
                    <b>Пробник, 2 мл</b><br> 1 PV / 50 руб.
                </th>
                <th
                    scope="col"
                    class="text-center"
                >
                    <b>Спрей, 3 мл</b><br> 3 PV / 110 руб.
                </th>
                <th
                    scope="col"
                    class="text-center"
                >
                    <b>Масло, 7 мл</b><br> 19 PV / 450 руб.
                </th>
                <th
                    scope="col"
                    class="text-center"
                >
                    <b>Спрей, 12 мл</b><br> 19 PV / 500 руб.
                </th>
                <th
                    scope="col"
                    class="text-center"
                >
                    <b>Спрей, 50 мл</b><br> 52 PV / 1400 руб.
                </th>
            </tr>
            </thead>
            <tbody>
                <AromaShortTableItem />
            </tbody>
        </table>
        <div class="d-flex justify-content-between align-items-center mt-4 mb-3">
            <span
                class="price"
            >
                Итого:
                {{ getPointsShortTable }} PV
                /
                {{ getPriceShortTable }} руб.
            </span>
            <button
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
    components: {
        AromaShortTableItem
    },
    methods: {
        basketAdd() {
            alert('Что я должна делать? :-)')
        }
    },
    computed: {
        ...mapGetters(['getPriceShortTable', 'getPointsShortTable'])
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
