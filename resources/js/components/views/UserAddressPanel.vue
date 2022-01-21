<template>
    <div class="row mb-5">
        <div class="card data-card">
            <h3
                class="d-flex justify-content-between align-items-center"
            >
                Мои адреса
            </h3>
            <p v-if="getAddresses.length">
                Ниже перечислены ваши избранные адреса. <br>
                Нажмите на один из них, чтобы редактировать или удалить.
            </p>
            <p v-else>
                В данный момент вы не добавили ни одного адреса. Вы можете сделать это, нажав кнопку
                «Добавить адрес» ниже.
            </p>
        </div>
        <UserAddressAccordion v-if="getAddresses" />
        <div class="row d-flex justify-content-center mt-3">
            <button
                type="button"
                class="btn btn-lg btn-info"
                onclick="alert('Этот день мы приближали как могли!)')"
                style=" max-width: 220px;"
            >
                Добавить адрес
            </button>
        </div>
    </div>
</template>

<script>
import UserAddressAccordion from "../page-parts/user-address/UserAddressAccordion";
import {mapGetters} from 'vuex'
export default {
    name: "UserAddressPanel",

    components: {
        UserAddressAccordion
    },
    computed: {
        ...mapGetters(['getAddresses'])
    }
}
</script>

<style lang="scss" scoped>
h3 {
    text-transform: uppercase;
    color: #333333;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
}

p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
}
</style>
