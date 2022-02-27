<template>
    <div class="card shadow blue-header-info-block mb-3">
        <div class="header-block p-3">
            DPD:
        </div>
        <div class="body-block p-3">
            <ol class="list-group">
                <li
                    class="list-group-item"
                    v-if="getDpdOffices.length"
                    v-for="office in getDpdOffices"
                    :key="office.id"
                >
                    <div>
                        <h4 class="dpd-title">
                            Пункт выдачи:
                            <b>{{ office.address }}</b> <br>
                            <a :href="`http://www.edost.ru/office.php?c=${office.id}`">Показать на карте</a>
                        </h4>
                        <span class="dpd-code">код: {{ office.code }}</span>
                        <p class="dpd-body">
                            телефон: {{ office.tel }} <br>
                            офис: {{ office.schedule }}
                        </p>
                    </div>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "DPDList",
    computed: {
        ...mapGetters(['getDpdOffices'])
    }
}
</script>

<style lang="scss" scoped>
    .dpd-title {
        font-size: 22px;
    }
    .dpd-code, .dpd-body {
        font-size: 20px;
    }
</style>
