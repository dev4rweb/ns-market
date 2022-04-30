<template>
    <div>
        <form
            class="d-flex align-items-center mb-3"
            @submit.prevent="getReserveReportData"
        >
            <div class="d-flex align-items-center">
                <h4
                    style="min-width: 180px;"
                    class="mb-0"
                >
                    Период с
                </h4>
                <div class="d-flex flex-column me-3">
                    <input
                        type="date"
                        class="form-control"
                        v-model="startDate"
                        @input="isStartDateInvalid = false"
                        ref="focusMe"
                        :class="{borderRed: isStartDateInvalid}"
                        required
                    >
                    <div
                        class="invalid-feedback text-center"
                        :class="{show: isStartDateInvalid}"
                    >
                        {{ startDateInvalidMsg }}
                    </div>
                </div>
                <h4 class="mb-0">по</h4>
                <div class="d-flex flex-column  ms-3">
                    <input
                        type="date"
                        class="form-control"
                        v-model="endDate"
                        @input="isEndDateInvalid = false"
                        :class="{borderRed: isEndDateInvalid}"
                        required
                    >
                    <div
                        class="invalid-feedback text-center"
                        :class="{show: isEndDateInvalid}"
                    >
                        {{ endDateInvalidMsg }}
                    </div>
                </div>
            </div>

            <button
                class="btn btn-info ms-3"
                type="submit"
            >
                Показать
            </button>
        </form>

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
            <tbody v-if="getTransactionsReserve && getTransactionsReserve.data.length">
              <ReserveReportTableItem
                  v-for="(transaction, i) in getTransactionsReserve.data"
                  :transaction="transaction"
                  :key="transaction.id"
                  :index="i"
              />
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import ReserveReportTableItem from "./ReserveReportTableItem";
export default {
    name: "ReserveReportTable",
    data() {
        return {
            startDate: '',
            isStartDateInvalid: false,
            startDateInvalidMsg: 'Some',
            endDate: '',
            isEndDateInvalid: false,
            endDateInvalidMsg: ''
        }
    },
    methods: {
        ...mapActions(['getAllTransactionsByWalletIdAction', 'getAllTransactionTypesAction']),
        getReserveReportData() {
            console.log('getReserveReportData')
            if (this.getWalletPVC) {
                this.getAllTransactionsByWalletIdAction({
                    walletId: this.getWalletPVC.id,
                    startDate: this.startDate,
                    endDate: this.endDate
                })
            }
        }
    },
    computed: {
        ...mapGetters(['getTransactionsReserve', 'getWalletPVC'])
    },
    components: {
        ReserveReportTableItem
    },
    mounted() {
        this.getAllTransactionTypesAction()
        setTimeout(() => {
            this.$refs.focusMe.focus();
        }, 500);
    }
}
</script>

<style lang="scss" scoped>

.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>

