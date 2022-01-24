<template>
    <div class="row mb-5">
        <AddAddressForm
            v-if="getIsShowAddressForm && !getEditAddress"
        />
        <EditAddressForm
            v-if="getIsShowAddressForm && getEditAddress"
        />
        <div
            v-if="!getIsShowAddressForm"
        >
            <div class="card data-card">
                <h3
                    class="d-flex justify-content-between align-items-center"
                >
                    Мои адреса
                </h3>
                <p v-if="getAddresses.length">
                    В этом разделе Вы можете создавать, просматривать, редактировать и удалять адреса для доставки Ваших
                    заказов.
                </p>
                <p v-else>
                    В данный момент вы не добавили ни одного адреса. Вы можете сделать это, нажав кнопку
                    «Добавить адрес» ниже.
                </p>
                <div class="row d-flex justify-content-center position-relative">
                    <button
                        type="button"
                        class="btn btn-lg btn-info"
                        style=" max-width: 220px; margin-bottom: -50px;"
                        @click="addAddress"
                    >
                        Добавить адрес
                    </button>
                </div>
            </div>
            <div class="mt-5 p-0">
                <!--            <UserAddressAccordion v-if="getAddresses"/>-->
                <UserAddressItem
                    v-if="getAddresses"
                    v-for="(address, i) in getAddresses"
                    :address="address"
                    :index="i"
                    :key="address.id"
                />
            </div>
        </div>

    </div>
</template>

<script>
import UserAddressAccordion from "../page-parts/user-address/UserAddressAccordion";
import UserAddressItem from "../page-parts/user-address/UserAddressItem";
import AddAddressForm from "../page-parts/user-address/AddAddressForm";
import EditAddressForm from "../page-parts/user-address/EditAddressForm";
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "UserAddressPanel",
    methods: {
        ...mapMutations(['setIsShowAddressForm', 'setEditAddress']),
        addAddress() {
            this.setEditAddress(null)
            this.setIsShowAddressForm(true)
        }
    },
    components: {
        UserAddressAccordion,
        UserAddressItem,
        AddAddressForm,
        EditAddressForm
    },
    computed: {
        ...mapGetters(['getAddresses', 'getIsShowAddressForm', 'getEditAddress'])
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
