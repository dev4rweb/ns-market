<template>
    <div class="card data-card mb-5">
        <h3>Платежные реквизиты</h3>
        <form
            class="needs-validation"
            @submit.prevent="savePayment"
        >
            <div class="form-group form-group-data mb-3">
                <label class="form-label">Наименование получателя платежей</label>
                <input
                    type="text"
                    class="form-control form-control-lg"
                >
            </div>

            <div class="form-group form-group-data mb-3">
                <label class="form-label">ИНН</label>
                <input
                    type="text"
                    class="form-control form-control-lg"
                >
            </div>

            <div class="form-group form-group-data">
                <label>Самозанятый или Индивидуальный предприниматель</label>
                <div
                    class="d-flex justify-content-between align-items-center"
                    style="max-width: 250px;"
                >
                    <RadioBox label="ИП" value="1" v-model="isPP"/>
                    <RadioBox label="Самозанятый" value="2" v-model="isPP"/>
                </div>
            </div>

            <div class="form-group form-group-data mb-3">
                <label class="form-label">Номер счета</label>
                <input
                    type="text"
                    class="form-control form-control-lg"
                >
            </div>

            <div class="form-group form-group-data mb-3">
                <label class="form-label">БИК</label>
                <input
                    type="text"
                    class="form-control form-control-lg"
                >
            </div>

            <div class="form-group form-group-data mb-3">
                <label class="form-label">Банк</label>
                <input
                    type="text"
                    class="form-control form-control-lg"
                >
            </div>

            <div class="form-group form-group-data mb-3">
                <label class="form-label">Корреспондентский счет</label>
                <input
                    type="text"
                    class="form-control form-control-lg"
                >
            </div>

            <div class="form-group form-group-data mb-3">
                <label class="form-label">Номер пластиковой карты</label>
                <input
                    type="text"
                    class="form-control form-control-lg"
                >
            </div>

            <div class="d-flex justify-content-center position-relative">
                <button
                    class="btn btn-lg btn-info"
                    style="min-width: 180px; margin-bottom: -50px;"
                    type="submit"
                >
                    Сохранить
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import RadioBox from "../UI/RadioBox";
export default {
    name: "UserPaymentPage",
    data() {
        return {
            isPP: 1
        }
    },
    methods: {
        savePayment() {
            console.log('savePayment')
        }
    },
    components: {
        RadioBox
    }
}
</script>

<style scoped>

</style>
