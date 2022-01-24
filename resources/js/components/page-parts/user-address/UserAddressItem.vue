<template>
    <div class="card data-card mb-3">
        <div class="d-flex justify-content-between align-items-center">
            <h3>
                {{ address.name }}
            </h3>
            <div>
                <button
                    type="button"
                    class="btn btn-outline-info me-1"
                    @click="editAddress"
                >
                    Изменить
                </button>
                <button
                    type="button"
                    class="btn btn-outline-danger"
                    v-if="!address.is_main_address"
                >
                    Удалить
                </button>
            </div>
        </div>
        <div>
            <p>{{ mainAddress }} <br> {{ additionalAddress }} </p>
            <p>Получатель – {{ fullName }} <br> {{ phoneEmail }}</p>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "UserAddressItem",
    props: {
        address: {
            type: Object,
            required: true
        },
        index: Number
    },
    methods: {
        ...mapMutations(['setIsShowAddressForm', 'setEditAddress']),
        editAddress() {
            this.setIsShowAddressForm(true)
            this.setEditAddress(this.address)
        }
    },
    computed: {
        ...mapGetters(['getCurrentUser']),
        mainAddress() {
            const postCode = this.address.postcode ?? ''
            const country = this.address.country ? `${this.address.country}.` : ''
            const region = this.address.region ? `${this.address.region},` : ''
            const city = this.address.city ? `${this.address.city},` :  ''

            return `${postCode} ${country} ${region} ${city}`
        },
        additionalAddress() {
            const street = this.address.street ? `${this.address.street},` : ''
            const house = this.address.house ? `${this.address.house},` : ''
            const housing = this.address.housing ? `корпус ${this.address.housing},` : '' // part
            const building = this.address.building ? `владение ${this.address.building},` : '' // owning
            const apartment = this.address.apartment ? `кв.${this.address.apartment}` : ''
            const office = this.address.office ? `офис ${this.address.office}` : ''

            return `${street} ${building} ${house} ${housing} ${apartment} ${office}`
        },
        fullName() {
            const lastName = this.address.last_name ?? ''
            const firstName = this.address.first_name ?? ''
            const middleName = this.address.middle_name ?? ''

            return `${lastName} ${firstName} ${middleName}`
        },
        phoneEmail() {
            const phone = this.address.phone ? `тел. +${this.address.phone}` : ''
            const email = this.getCurrentUser.email ? `, e-mail: ${this.getCurrentUser.email}` : ''

            return `${phone}${email}`
        }
    }
}
</script>

<style scoped>

p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
}
</style>
