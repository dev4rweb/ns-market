<template>
    <div class="user-content">
        <div class="row">
            <div class="card data-card mb-5">
                <h3 class="mb-3">История баллов резерва</h3>
                <ReserveReportTable />
            </div>
        </div>
    </div>
</template>

<script>
import ReserveReportTable from "../UI/tables/ReserveReportTable";
export default {
    name: "UserMyBankReserveReport",
    components: {
        ReserveReportTable
    }
}
</script>

<style scoped>

</style>
