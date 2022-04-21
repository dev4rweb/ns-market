<template>
    <div class="user-content">
        <div class="row">
            <div class="card data-card mb-5">
                <h3 class="mb-3">Карточка счета</h3>
                <BMReportTable />
            </div>
        </div>
    </div>
</template>

<script>
import BMReportTable from "../UI/tables/BMReportTable";
export default {
    name: "UserMyBankBonusMarkReport",

    components: {
        BMReportTable
    },
}
</script>

<style scoped>

</style>
