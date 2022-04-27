<template>
    <div class="user-content">
        <div class="row">
            <div class="card data-card mb-5">
                <div class="d-flex align-items-center mb-3">
                    <BackBtn path-to="/user-bank-reserve"/>
                    <h3 class="mb-0">История баллов резерва</h3>
                </div>
                <ReserveReportTable/>
            </div>
        </div>
    </div>
</template>

<script>
import ReserveReportTable from "../UI/tables/ReserveReportTable";
import BackBtn from "../UI/BackBtn";

export default {
    name: "UserMyBankReserveReport",
    components: {
        ReserveReportTable, BackBtn
    }
}
</script>

<style lang="scss" scoped>
h3 {
    font-size: 34px;
}
</style>
