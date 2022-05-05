<template>
    <div>
        <form
            class="d-flex align-items-center mb-3"
            @submit.prevent="getMainTransactionData"
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
            <tbody v-if="getTransactionsMainAccount && getTransactionsMainAccount.data.length">
                <MainAccountReportTableItem
                    v-for="(transaction, i) in getTransactionsMainAccount.data"
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
import MainAccountReportTableItem from "./MainAccountReportTableItem";
export default {
    name: "MainAccountReportTable",
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
        getMainTransactionData() {
            console.log('getMainTransactionData')
            if (this.getWalletMain) {
                this.getAllTransactionsByWalletIdAction({
                    walletId: this.getWalletMain.id,
                    startDate: this.startDate,
                    endDate: this.endDate
                })
            }
        }
    },
    computed: {
        ...mapGetters(['getTransactionsMainAccount', 'getWalletMain'])
    },
    components: {
        MainAccountReportTableItem
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
