<template>
    <ul
        class="user-sidebar"
        v-if="getPhysicalPerson"
    >
        <li
            v-if="isShow(menu)"
            v-for="menu in menus"
            :key="menu.id"
        >
            <a
                :href="menu.url"
                :class="isActive(menu)"
            >
                {{ menu.name }}
            </a>
        </li>
    </ul>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "UserSidebar",
    data() {
        return {
            menus: [
                {id: 1, name: 'Новости', url: '/user-panel'},
                {id: 2, name: 'Мои данные', url: '/user-data-panel'},
                {id: 3, name: 'Мои заказы', url: '/user-orders-panel'},
                {id: 4, name: 'Работа СЦ', url: '/user-service-center'},
                {id: 5, name: 'Мои банк', url: '/user-bank-panel'},
                {id: 6, name: 'Техподдержка', url: '/user-support-panel'},
            ]
        }
    },
    methods: {
        isActive(menu) {
            return  window.location.href.includes(menu.url) ? 'active' : ''
        },
        isShow(menu) {
            if (menu.id === 3) {
                return  this.getPhysicalPerson.trade_status !== 'S'
            }
            if (menu.id === 4) {
                return  this.getPhysicalPerson.trade_status === 'S'
            }
            return true;
        }
    },
    computed: {
        ...mapGetters(['getPhysicalPerson'])
    }
}
</script>

<style scoped>

</style>
