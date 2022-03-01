<template>
    <div
        class="card data-card mb-3 user-address-list"
        @click="selectAddress"
    >
        <div class="d-flex justify-content-between align-items-center">
            <h3>
                {{ address.name }}
            </h3>
        </div>
        <div>
            <p>{{ mainAddress }} <br> {{ additionalAddress }} </p>
            <p>Получатель – {{ fullName }} <br> {{ phoneEmail }}</p>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name: "UserAddressList",
    props: {
        address: {
            type: Object,
            required: true
        },
        index: Number
    },
    methods: {
        ...mapMutations(['setCurrentDaDataAddress', 'setRecipientInfoData']),
        ...mapActions(['fetchEDostDelivery']),
        selectAddress() {
            console.log('selectAddress', this.address)
            this.setCurrentDaDataAddress({
                city_with_type: '',
                postal_code: this.address.postcode ?? '',
                street_with_type: '',
                area_with_type: '',
                house: this.address.house ?? '',
                house_type_full: '',
                country: this.address.country ?? '',
                block: '',
                region: this.address.region ?? '',
                flat: this.address.apartment ?? this.address.office ?? '',
                settlement_with_type: '',
                street: this.address.street ?? '',
                building: this.address.housing ?? '',
                city: this.address.city.replace('г ', '')
            })
            this.fetchEDostDelivery('')
            this.setRecipientInfoData({
                last_name: this.address.last_name ?? '',
                first_name: this.address.first_name ?? '',
                middle_name: this.address.middle_name ?? '',
                phone: this.address.phone ?? '',
                email: this.address.email ?? '',
            })
        },

    },
    computed: {
        ...mapGetters(['getCurrentUser']),
        mainAddress() {
            const postCode = this.address.postcode ?? ''
            const country = this.address.country ? `${this.address.country}.` : ''
            const region = this.address.region ? `${this.address.region},` : ''
            const city = this.address.city ? `${this.address.city},` : ''

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
            const email = this.address.is_main_address ? `, e-mail: ${this.getCurrentUser.email}`
                : this.address.email ? `, e-mail: ${this.address.email}` : ''

            return `${phone}${email}`
        }
    }
}
</script>

<style lang="scss" scoped>
.user-address-list {
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;

    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.05, 1.05);
        -moz-transform: scale(1.05, 1.05);
        -ms-transform: scale(1.05, 1.05);
        -o-transform: scale(1.05, 1.05);
        transform: scale(1.05, 1.05);
    }
}

p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
}
</style>
