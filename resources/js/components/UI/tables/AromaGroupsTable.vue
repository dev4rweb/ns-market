<template>
    <div class="d-flex justify-content-center">
        <table
            v-if="aromaGroups"
            class="table table-sm table-responsive-sm table-light table-bordered border-secondary shadow-lg small-table">
            <thead class="table-primary">
            <tr>
                <th
                    style="width: 70px; cursor: pointer;"
                    scope="col"
                    @click="sortByGender"
                >
                    Пол
                    <span v-if="genderDescSort === 0" class="ms-3">&#8801;</span>
                    <span
                        v-if="genderDescSort === 1"
                        class="ms-3"
                    >
                        &#8595;
                    </span>
                </th>
                <th
                    style="cursor: pointer;"
                    scope="col"
                    @click="sortByCode"
                >
                    Код
                    <span v-if="codeDescSort === 0" class="ms-3">&#8801;</span>
                    <span
                        v-if="codeDescSort === 1"
                        class="ms-3"
                    >
                        &#8595;
                    </span>
                </th>
                <th v-if="isPartner" style="width: 80px" scope="col">Пробник, 2 мл</th>
                <th style="width: 80px" scope="col">Спрей, <br> 3 мл</th>
                <th style="width: 80px" scope="col">Масло, <br> 7 мл</th>
                <th style="width: 80px" scope="col">Спрей, <br> 12 мл</th>
                <th style="width: 80px" scope="col">Спрей, <br> 50 мл</th>
            </tr>
            </thead>
            <tbody>
            <AromaGroupsTableItem
                v-if="aromaGroups"
                v-for="product in aromaGroups"
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
    data() {
        return {
            aromaGroups: null,
            genderDesc: true,
            genderDescSort: 0,
            codeDesc: true,
            codeDescSort: 0
        }
    },
    methods: {
        sortByGender() {
            console.log('sortByGender', this.genderDescSort)
            if (this.genderDesc)
                this.aromaGroups = this.getAromaGroups.sort((a, b) =>
                    (a.gender < b.gender) ? 1 :
                        ((b.gender < a.gender) ? -1 : 0)
                )
            else
                this.aromaGroups = this.getAromaGroups.sort((a, b) =>
                    (a.gender > b.gender) ? 1 :
                        ((b.gender > a.gender) ? -1 : 0)
                )
            this.genderDesc = !this.genderDesc
            if (this.genderDescSort === 0) this.genderDescSort = 1
            this.codeDescSort = 0
        },
        sortByCode() {
            console.log('sortByCode')
            if (this.codeDesc)
                this.aromaGroups = this.getAromaGroups.sort((a, b) =>
                    (a.code < b.code) ? 1 :
                        ((b.code < a.code) ? -1 : 0)
                )
            else
                this.aromaGroups = this.getAromaGroups.sort((a, b) =>
                    (a.gender > b.gender) ? 1 :
                        ((b.code > a.code) ? -1 : 0)
                )
            this.codeDesc = !this.codeDesc
            if (this.codeDescSort === 0) this.codeDescSort = 1
            this.genderDescSort = 0
        }
    },
    computed: {
        ...mapGetters(['getAromaGroups', 'isPartner'])
    },
    components: {
        AromaGroupsTableItem
    },
    mounted() {
        this.aromaGroups = this.getAromaGroups
    }
}
</script>

<style lang="scss" scoped>
.table > :not(caption) > * > * {
    background-color: #ff99cc;
}

.small-table {
    max-width: 560px;

    th {
        text-align: center;
    }
}
</style>
