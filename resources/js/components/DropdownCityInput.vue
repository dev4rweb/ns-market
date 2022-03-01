<template>
    <ul
        class="dropdown-menu"
        aria-labelledby="dropdownCity"
        v-if="getDaDataAddress"
    >
        <li

            v-for="(address, i) in getDaDataAddress"
            @click="selectedItem(address)"
            :key="i"
        >
            <a
                class="dropdown-item"
                href=""
                @click="selectedTag"
            >
                {{address.value}}
            </a>
        </li>
    </ul>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    name: "DropdownCityInput",
    methods: {
        ...mapActions(['fetchEDostDelivery']),
        ...mapMutations(['setCurrentDaDataAddress', 'setFastSearchAddress', 'setIsSearchingDaDataAddress']),
        selectedItem(address) {
            console.log('selected Item', address)
            this.setCurrentDaDataAddress(address.data)
            this.setFastSearchAddress(address.value)
            this.setIsSearchingDaDataAddress(true)
            this.fetchEDostDelivery('')
        },
        selectedTag(e) {
            console.log('selectedTag')
            e.preventDefault()
        }
    },
    computed: {
        ...mapGetters(['getDaDataAddress'])
    }
}
</script>

<style lang="scss" scoped>
.dropdown-menu{
    width: 94%;
    @media screen and (max-width: 998px){
        width: 90%;
    }
}
</style>
