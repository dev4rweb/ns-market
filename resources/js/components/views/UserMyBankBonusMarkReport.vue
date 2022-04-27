<template>
    <div class="user-content">
        <div class="row">
            <div class="card data-card mb-5">
                <div class="d-flex align-items-center mb-3">
                    <BackBtn path-to="/user-bank-bonus-mark" />
                    <h3 class="mb-0">Карточка счёта бонус марок</h3>
                </div>

                <BMReportTable />
            </div>
        </div>
    </div>
</template>

<script>
import BMReportTable from "../UI/tables/BMReportTable";
import BackBtn from "../UI/BackBtn";
export default {
    name: "UserMyBankBonusMarkReport",

    components: {
        BMReportTable, BackBtn
    },
}
</script>

<style lang="scss" scoped>
h3{
    font-size: 34px;
}
</style>
