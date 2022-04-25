<template>
    <div>
        <div

        >
            <form
                class="d-flex align-items-center mb-3"
                @submit.prevent="getData"
            >
                <div class="d-flex align-items-center">
                    <h4
                        style="min-width: 180px;"
                        class="mb-0"
                    >
                        Выберете период с
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
                <tbody v-if="getTransactionsBMC && getTransactionsBMC.data.length">
                <BMReportTableItem
                    v-for="(transaction, i) in getTransactionsBMC.data"
                    :transaction="transaction"
                    :key="transaction.id"
                    :index="i"
                />
                </tbody>
            </table>
        </div>
        <!--        <h3 v-if="!getTransactionsBMC">Поиск...</h3>
                <h3 v-if="getTransactionsBMC && !getTransactionsBMC.data.length"
                >
                    Не найдено ни одной транзакции
                </h3>-->
    </div>
</template>

<script>
import BMReportTableItem from "./BMReportTableItem";
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "BMReportTable",
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
        ...mapActions(['getAllTransactionsByWalletIdAction']),
        getData() {
            console.log('getData')
            if (this.getWalletMBC) {
                this.getAllTransactionsByWalletIdAction({
                    walletId: this.getWalletMBC.id,
                    startDate: this.startDate,
                    endDate: this.endDate
                })
            }
            // this.validateCalendar()
        },
        validateCalendar() {
            console.log('validate', this.startDate, this.endDate)

            let isValid = true
            if (this.startDate) {
                console.log('validate', new Date(this.startDate).getTime() > new Date().getTime())
            }

            return isValid;
        }
    },
    computed: {
        ...mapGetters(['getTransactionsBMC', 'getWalletMBC'])
    },
    components: {
        BMReportTableItem
    },
    mounted() {
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
