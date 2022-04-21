<template>
    <div>
        <div
            v-if="getTransactionsBMC && getTransactionsBMC.data.length"
        >
            <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center">
                    <h4
                        style="min-width: 90px;"
                        class="mb-0"
                    >
                        Выберете период с
                    </h4>
                    <input
                        type="date"
                        class="form-control me-3"
                    >
                    <h4 class="mb-0">по</h4>
                    <input
                        type="date"
                        class="form-control ms-3"
                    >
                </div>

                <button class="btn btn-info ms-3"> Показать</button>
            </div>
            <div
                v-if="getBillingAccountMBC"
                class="d-flex justify-content-between flex-column mb-3"
            >
                <h4
                    v-if="getBillingAccountMBC.income"
                >
                    Всего приход - {{ getBillingAccountMBC.income }}
                </h4>
                <h4
                    v-if="getBillingAccountMBC.expense"
                >
                    Всего расход - {{ getBillingAccountMBC.expense }}
                </h4>
<!--                <h4>Баланс: {{ parseInt(getBillingAccountMBC.balance) }}</h4>-->
            </div>
            <table
                class="table table-lg table-responsive-lg table-light table-striped shadow-lg"
            >
                <thead class="table-success">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Дата</th>
                    <th scope="col">Со счёта</th>
                    <th scope="col">На счёт</th>
                    <th scope="col">Приход</th>
                    <th scope="col">Расход</th>
                    <th scope="col">Операция</th>
                    <th scope="col">Примечание</th>
                </tr>
                </thead>
                <tbody>
                <BMReportTableItem
                    v-for="(transaction, i) in getTransactionsBMC.data"
                    :transaction="transaction"
                    :key="transaction.id"
                    :index="i"
                />
                </tbody>
            </table>
        </div>
        <h3 v-if="!getTransactionsBMC">Поиск...</h3>
        <h3 v-if="getTransactionsBMC && !getTransactionsBMC.data.length"
        >
            Не найдено ни одной транзакции
        </h3>
    </div>
</template>

<script>
import BMReportTableItem from "./BMReportTableItem";
import {mapGetters} from 'vuex'

export default {
    name: "BMReportTable",
    computed: {
        ...mapGetters(['getTransactionsBMC', 'getBillingAccountMBC'])
    },
    components: {
        BMReportTableItem
    }
}
</script>

<style scoped>

</style>
