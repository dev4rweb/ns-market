<template>
    <div class="text-filter-result">

        <div v-if="getCategoryUnisex || getCategoryWoman || getCategoryMan">
            <span v-if="getCategoryUnisex">Ароматы унисекс</span>
            <span v-if="getCategoryWoman">Ароматы для женщин</span>
            <span v-if="getCategoryMan">Ароматы для мужчин</span>
            /
        </div>

        <div v-if="getCategoryC || getCategoryD || getCategoryK || getCategoryM">
            <span v-if="getCategoryC">цитрусовые, цветочные, фруктовые, фужерные</span>
            <span v-if="getCategoryD">древесные, мускусные, папоротниковые, восточные</span>
            <span v-if="getCategoryK">шипровые, ориентальные, сладкие, пряные, амбровые, альдегидные, кипарисовые</span>
            <span v-if="getCategoryM">морские, водные, свежие, океанические, зеленые</span>
            /
        </div>

        <div v-if="getMorningCategory || getAfternoonCategory || getEveningCategory || getMorningAfterEveningCategory || getMorningAfternoonCategory || getAfternoonEveningCategory">
            <span v-if="getMorningCategory">Утренние</span>
            <span v-if="getAfternoonCategory">Дневные</span>
            <span v-if="getEveningCategory">Вечерние</span>
            <span v-if="getMorningAfterEveningCategory">Утренние, дневные, вечерние</span>
            <span v-if="getMorningAfternoonCategory">Утренние, дневные</span>
            <span v-if="getAfternoonEveningCategory">Дневные, вечерние</span>
            /
        </div>

        <div v-if="getCitrusCategory || getWaterCategory || getGreenCategory || getFruitCategory || getFlowerCategory || getSoftFloralCategory || getFloralOrientalCategory || getSoftOrientalCategory || getOrientalCategory || getWoodyOrientalCategory || getWoodyCategory || getChypreCategory || getWineGlassCategory">
            <span v-if="getCitrusCategory">Цитрусовые</span>
            <span v-if="getWaterCategory">Водные</span>
            <span v-if="getGreenCategory">Зелёные</span>
            <span v-if="getFruitCategory">Фруктовые</span>
            <span v-if="getFlowerCategory">Цветочные</span>
            <span v-if="getSoftFloralCategory">Мягкие цветочные</span>
            <span v-if="getFloralOrientalCategory">Цветочные восточные</span>
            <span v-if="getSoftOrientalCategory">Мягкие восточные</span>
            <span v-if="getOrientalCategory">Восточные</span>
            <span v-if="getWoodyOrientalCategory">Древесные восточные</span>
            <span v-if="getWoodyCategory">Древесные</span>
            <span v-if="getChypreCategory">Шипровые</span>
            <span v-if="getWineGlassCategory">Фужерные</span>
            /
        </div>

        <div v-if="getOfficeCategory || getBraveCategory || getConfidentCategory || getBusinessCategory || getSexyCategory || getCharmCategory || getElegantCategory || getProvocativeCategory || getClubCategory || getSensualCategory || getRomanticCategory || getMisteryCategory || getSportCategory || getResoluteCategory" >
            <span v-if="getOfficeCategory">Офисные</span>
            <span v-if="getBraveCategory">Смелые</span>
            <span v-if="getConfidentCategory">Уверенные</span>
            <span v-if="getBusinessCategory">Бизнес</span>
            <span v-if="getSexyCategory">Сексуальные</span>
            <span v-if="getCharmCategory">Чарующие</span>
            <span v-if="getElegantCategory">Элегантные</span>
            <span v-if="getProvocativeCategory">Провокационные</span>
            <span v-if="getClubCategory">Клубные</span>
            <span v-if="getSensualCategory">Чувственные</span>
            <span v-if="getRomanticCategory">Романтические</span>
            <span v-if="getMisteryCategory">Таинственные</span>
            <span v-if="getSportCategory">Спортивные</span>
            <span v-if="getResoluteCategory">Решительные</span>
            /
        </div>

        <div v-if="getCategoryPair">
            <span>Парные</span>
        </div>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "TextFilterResult",
    computed: {
        ...mapGetters([
            'getCategoryUnisex',
            'getCategoryWoman',
            'getCategoryMan',

            'getCategoryC',
            'getCategoryD',
            'getCategoryK',
            'getCategoryM',

            'getMorningCategory',
            'getAfternoonCategory',
            'getEveningCategory',
            'getMorningAfterEveningCategory',
            'getMorningAfternoonCategory',
            'getAfternoonEveningCategory',

            'getCitrusCategory',
            'getWaterCategory',
            'getGreenCategory',
            'getFruitCategory',
            'getFlowerCategory',
            'getSoftFloralCategory',
            'getFloralOrientalCategory',
            'getSoftOrientalCategory',
            'getOrientalCategory',
            'getWoodyOrientalCategory',
            'getWoodyCategory',
            'getChypreCategory',
            'getWineGlassCategory',

            'getOfficeCategory',
            'getBraveCategory',
            'getConfidentCategory',
            'getBusinessCategory',
            'getSexyCategory',
            'getCharmCategory',
            'getElegantCategory',
            'getProvocativeCategory',
            'getClubCategory',
            'getSensualCategory',
            'getRomanticCategory',
            'getMisteryCategory',
            'getSportCategory',
            'getResoluteCategory',

            'getCategoryPair'
        ])
    }
}
</script>

<style scoped>
.text-filter-result {

}
</style>
