<template>
    <div class="accordion accordion-flush p-0 mt-3" id="accordionUserAddresses">
        <UserAddressAccordionItem
            v-for="(address, i) in getAddresses"
            :address="address"
            :index="i"
            :key="address.id"
        />
    </div>
</template>

<script>
import UserAddressAccordionItem from "./UserAddressAccordionItem";
import {mapGetters} from 'vuex'

export default {
    name: "UserAddressAccordion",

    components: {
        UserAddressAccordionItem
    },
    computed: {
        ...mapGetters(['getAddresses'])
    }
}
</script>

<style scoped>

</style>
