<template>
    <div class="user-content">
        <div class="row">
            <h3>Мои заказы</h3>
        </div>
        <div class="row">
            <MyOrdersTable v-if="getOrders" />
            <h1 v-else>История заказов отсутствует</h1>
        </div>
        <div>
            <transition name="fade">
                <RemoveOrderModal v-if="getRemoveOrderModal" />
            </transition>
            <transition name="fade">
                <EditOrderModal v-if="getEditOrderModal" />
            </transition>
        </div>
    </div>
</template>

<script>
import MyOrdersTable from "../UI/tables/MyOrdersTable";
import {mapGetters} from 'vuex'
import RemoveOrderModal from "../Modals/RemoveOrderModal";
import EditOrderModal from "../Modals/EditOrderModal";
export default {
    name: "UserOrdersPanel",
    components: {
        MyOrdersTable, RemoveOrderModal, EditOrderModal
    },
    computed: {
        ...mapGetters(['getOrders', 'getRemoveOrderModal', 'getEditOrderModal'])
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1;
    transition: all .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    -webkit-transform: scale(0, 0);
    -moz-transform: scale(0, 0);
    -ms-transform: scale(0, 0);
    -o-transform: scale(0, 0);
    transform: scale(0, 0);
}
</style>
