<template>
    <div class="user-content">
        <div class="row">
            <div class="card data-card mb-5">
                <div class="d-flex align-items-center mb-3">
                    <BackBtn path-to="/user-bank-main"/>
                    <h3 class="mb-0">Карточка лицевого счёта</h3>
                </div>
                <MainAccountReportTable />
            </div>
        </div>
    </div>
</template>

<script>
import BackBtn from "../UI/BackBtn";
import MainAccountReportTable from "../UI/tables/MainAccountReportTable";
export default {
    name: "UserMyBankMainReport",
    components: {
        BackBtn, MainAccountReportTable
    }
}
</script>

<style scoped>

</style>
