<template>
    <div class="text-filter-result w-100">

        <div v-if="getCategoryPair">
            <span>Парные</span>
        </div>
        <div v-else>
            {{ makeParagraph }}
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
        ]),
        makeSex() {
            const sexArr = []
            if (this.getCategoryUnisex) sexArr.push('Ароматы унисекс')
            if (this.getCategoryWoman) sexArr.push('Ароматы для женщин')
            if (this.getCategoryMan) sexArr.push('Ароматы для мужчин')
            let sentence = ''
            if (sexArr.length && sexArr.length !== 3) {
                for (let i = 0; i < sexArr.length; i++) {
                    sentence += sexArr[i]
                    if (i !== sexArr.length - 1) sentence += ' + '
                }
                return sentence
            } else return null
        },
        makeLetters() {
            const lettersArr = []
            if (this.getCategoryC) lettersArr.push('C')
            if (this.getCategoryD) lettersArr.push('D')
            if (this.getCategoryK) lettersArr.push('K')
            if (this.getCategoryM) lettersArr.push('M')
            let sentence = ''
            if (lettersArr.length && lettersArr.length !== 4) {
                for (let i = 0; i < lettersArr.length; i++) {
                    sentence += lettersArr[i]
                    if (i !== lettersArr.length - 1) sentence += ' + '
                }
                return sentence
            } else return null
        },
        makeDaily() {
            const smellArr = []
            if (this.getMorningCategory) smellArr.push('Утренние')
            if (this.getAfternoonCategory) smellArr.push('Дневные')
            if (this.getEveningCategory) smellArr.push('Вечерние')
            if (this.getMorningAfterEveningCategory) smellArr.push('Утренние, дневные, вечерние')
            if (this.getMorningAfternoonCategory) smellArr.push('Утренние, дневные')
            if (this.getAfternoonEveningCategory) smellArr.push('Дневные, вечерние')
            let sentence = ''
            if (smellArr.length && smellArr.length !== 6) {
                for (let i = 0; i < smellArr.length; i++) {
                    sentence += smellArr[i]
                    if (i !== smellArr.length - 1) sentence += ' + '
                }
                return sentence
            } else return null
        },
        makeSmell() {
            const lettersArr = []
            if (this.getCitrusCategory) lettersArr.push('Цитрусовые')
            if (this.getWaterCategory) lettersArr.push('Водные')
            if (this.getGreenCategory) lettersArr.push('Зелёные')
            if (this.getFruitCategory) lettersArr.push('Фруктовые')
            if (this.getFlowerCategory) lettersArr.push('Цветочные')
            if (this.getSoftFloralCategory) lettersArr.push('Мягкие цветочные')
            if (this.getFloralOrientalCategory) lettersArr.push('Цветочные восточные')
            if (this.getSoftOrientalCategory) lettersArr.push('Мягкие восточные')
            if (this.getOrientalCategory) lettersArr.push('Восточные')
            if (this.getWoodyOrientalCategory) lettersArr.push('Древесные восточные')
            if (this.getWoodyCategory) lettersArr.push('Древесные')
            if (this.getChypreCategory) lettersArr.push('Шипровые')
            if (this.getWineGlassCategory) lettersArr.push('Фужерные')
            let sentence = ''
            if (lettersArr.length && lettersArr.length !== 13) {
                for (let i = 0; i < lettersArr.length; i++) {
                    sentence += lettersArr[i]
                    if (i !== lettersArr.length - 1) sentence += ' + '
                }
                return sentence
            } else return null
        },
        makeSpirit() {
            const lettersArr = []
            if (this.getOfficeCategory) lettersArr.push('Офисные')
            if (this.getBraveCategory) lettersArr.push('Смелые')
            if (this.getConfidentCategory) lettersArr.push('Уверенные')
            if (this.getBusinessCategory) lettersArr.push('Бизнес')
            if (this.getSexyCategory) lettersArr.push('Сексуальные')
            if (this.getCharmCategory) lettersArr.push('Чарующие')
            if (this.getElegantCategory) lettersArr.push('Элегантные')
            if (this.getProvocativeCategory) lettersArr.push('Провокационные')
            if (this.getClubCategory) lettersArr.push('Клубные')
            if (this.getSensualCategory) lettersArr.push('Чувственные')
            if (this.getRomanticCategory) lettersArr.push('Романтические')
            if (this.getMisteryCategory) lettersArr.push('Таинственные')
            if (this.getSportCategory) lettersArr.push('Спортивные')
            if (this.getResoluteCategory) lettersArr.push('Решительные')
            let sentence = ''
            if (lettersArr.length && lettersArr.length !== 14) {
                for (let i = 0; i < lettersArr.length; i++) {
                    sentence += lettersArr[i]
                    if (i !== lettersArr.length - 1) sentence += ' + '
                }
                return sentence
            } else return null
        },
        makeParagraph() {
            let arr = []
            if (this.makeSex) arr.push(this.makeSex)
            if (this.makeLetters) arr.push(this.makeLetters)
            if (this.makeDaily) arr.push(this.makeDaily)
            if (this.makeSmell) arr.push(this.makeSmell)
            if (this.makeSpirit) arr.push(this.makeSpirit)
            let sentence = ''
            if (arr.length) {
                for (let i = 0; i < arr.length; i++) {
                    sentence += arr[i]
                    if (i !== arr.length - 1) sentence += ' / '
                }
                return sentence
            } else return ''
        }
    }
}
</script>

<style scoped>
.text-filter-result {
    display: flex;
}
</style>
