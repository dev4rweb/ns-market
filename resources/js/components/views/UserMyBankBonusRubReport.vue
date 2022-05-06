<template>
    <div class="user-content">
        <div class="row">
            <div class="card data-card mb-5">
                <div class="d-flex align-items-center mb-3">
                    <BackBtn path-to="/user-bank-bonus-rub" />
                    <h3 class="mb-0">Карточка счёта бонусов</h3>
                </div>

                <BonusReportTable />

            </div>
        </div>
    </div>
</template>

<script>
import BackBtn from "../UI/BackBtn";
import BonusReportTable from "../UI/tables/BonusReportTable";
export default {
    name: "UserMyBankBonusRubReport",
    components: {
        BackBtn, BonusReportTable
    },
}
</script>

<style lang="scss" scoped>
h3{
    font-size: 34px;
}
</style>
