<template>
<div class="d-flex justify-content-center">
    <table
        class="table table-sm table-responsive-sm table-light table-bordered border-secondary table-striped table-hover shadow-lg small-table">
        <thead class="table-primary">
        <tr>
            <th scope="col">Код</th>
            <th style="width: 40px" scope="col">Кат</th>
            <th style="width: 80px" scope="col">Пробник, 2 мл</th>
            <th style="width: 80px" scope="col">Спрей, <br> 3 мл</th>
            <th style="width: 80px" scope="col">Масло, <br> 7 мл</th>
            <th style="width: 80px" scope="col">Спрей, <br> 12 мл</th>
            <th style="width: 80px" scope="col">Спрей, <br> 50 мл</th>
        </tr>
        </thead>
        <tbody>
            <AromaGroupsTableItem
                v-if="getAromaGroups"
                v-for="product in getAromaGroups"
                :product="product"
                :key="product.id"
            />
        </tbody>
    </table>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import AromaGroupsTableItem from "./AromaGroupsTableItem";
export default {
    name: "AromaGroupsTable",
    computed: {
        ...mapGetters(['getAromaGroups'])
    },
    components: {
        AromaGroupsTableItem
    }
}
</script>

<style lang="scss" scoped>
.small-table{
    max-width: 560px;

    th {
        text-align: center;
    }
}
</style>
