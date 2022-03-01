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
                    @click="selectCurrentDpdOffice(office)"
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
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "DPDList",
    methods: {
        ...mapMutations(['setCurrentDpdOffice', 'setIsShowDpdData', 'setIsShowRecipientData']),
        selectCurrentDpdOffice(dpdOffice) {
            console.log('selectCurrentDpdOffice', dpdOffice)
            this.setCurrentDpdOffice(dpdOffice)
            this.setIsShowDpdData(false)
            this.setIsShowRecipientData(true)
        }
    },
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

    .list-group-item {
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
</style>
