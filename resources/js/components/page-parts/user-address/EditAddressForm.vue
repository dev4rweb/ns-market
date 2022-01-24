<template>
    <div class="card data-card mb-3">
        <h3>Редактировать адрес</h3>
        <form
            @submit.prevent="saveAddress"
            class="needs-validation"
            novalidate
        >
            <div class="d-flex justify-content-end">
                <button
                    type="submit"
                    class="btn btn-lg btn-info me-3"
                >
                    Сохранить
                </button>
                <button
                    type="button"
                    class="btn btn-lg btn-secondary"
                    @click="canceled"
                >
                    Отмена
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: "EditAddressForm",
    methods: {
        ...mapMutations(['setEditAddress', 'setIsShowAddressForm']),
        saveAddress() {
            alert('in progress')
            this.setEditAddress(null)
            this.setIsShowAddressForm(false)
        },
        canceled() {
            this.setEditAddress(null)
            this.setIsShowAddressForm(false)
        }
    }
}
</script>

<style scoped>

</style>
