<template>
    <table class="table table-lg table-responsive-lg table-light table-striped table-hover shadow-lg">
        <thead  class="table-danger">
        <tr>
            <th scope="col">#</th>
            <th style="width: 120px" scope="col">Код</th>
            <th scope="col">Наименование</th>
            <th style="width: 90px;" scope="col">Срок годности</th>
            <th scope="col">Дата изготовления</th>
            <th scope="col">Годен до</th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
</template>

<script>
export default {
    name: "ExpirationDateTable"
}
</script>

<style lang="scss" scoped>
thead tr th{
    background-color: #EB5757;
    color: white;
}
</style>
