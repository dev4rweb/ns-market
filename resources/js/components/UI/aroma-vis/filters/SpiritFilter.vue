<template>
<div>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            v-model="officeCategory"
            id="officeCategory"
        >
        <label
            class="form-check-label"
            for="officeCategory"
        >
            Офисные
        </label>
    </div>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            v-model="braveCategory"
            id="braveCategory"
        >
        <label
            class="form-check-label"
            for="braveCategory"
        >
            Смелые
        </label>
    </div>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            v-model="confidentCategory"
            id="confidentCategory"
        >
        <label
            class="form-check-label"
            for="confidentCategory"
        >
            Уверенные
        </label>
    </div>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            v-model="businessCategory"
            id="businessCategory"
        >
        <label
            class="form-check-label"
            for="businessCategory"
        >
            Бизнес
        </label>
    </div>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            v-model="sexyCategory"
            id="sexyCategory"
        >
        <label
            class="form-check-label"
            for="sexyCategory"
        >
            Сексуальные
        </label>
    </div>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            v-model="charmCategory"
            id="charmCategory"
        >
        <label
            class="form-check-label"
            for="charmCategory"
        >
            Чарующие
        </label>
    </div>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            v-model="elegantCategory"
            id="elegantCategory"
        >
        <label
            class="form-check-label"
            for="elegantCategory"
        >
            Элегантные
        </label>
    </div>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            v-model="provocativeCategory"
            id="provocativeCategory"
        >
        <label
            class="form-check-label"
            for="provocativeCategory"
        >
            Провокационные
        </label>
    </div>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            v-model="clubCategory"
            id="clubCategory"
        >
        <label
            class="form-check-label"
            for="clubCategory"
        >
            Клубные
        </label>
    </div>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            v-model="sensualCategory"
            id="sensualCategory"
        >
        <label
            class="form-check-label"
            for="sensualCategory"
        >
            Чувственные
        </label>
    </div>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            v-model="romanticCategory"
            id="romanticCategory"
        >
        <label
            class="form-check-label"
            for="romanticCategory"
        >
            Романтические
        </label>
    </div>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            v-model="misteryCategory"
            id="misteryCategory"
        >
        <label
            class="form-check-label"
            for="misteryCategory"
        >
            Таинственные
        </label>
    </div>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            v-model="sportCategory"
            id="sportCategory"
        >
        <label
            class="form-check-label"
            for="sportCategory"
        >
            Спортивные
        </label>
    </div>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            v-model="resoluteCategory"
            id="resoluteCategory"
        >
        <label
            class="form-check-label"
            for="resoluteCategory"
        >
            Решительные
        </label>
    </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "SpiritFilter",
    methods: {
        ...mapActions([
            'fetchOfficeCategory',
            'fetchBraveCategory',
            'fetchConfidentCategory',
            'fetchBusinessCategory',
            'fetchSexyCategory',
            'fetchCharmCategory',
            'fetchElegantCategory',
            'fetchProvocativeCategory',
            'fetchClubCategory',
            'fetchSensualCategory',
            'fetchRomanticCategory',
            'fetchMisteryCategory',
            'fetchSportCategory',
            'fetchResoluteCategory',
        ])
    },
    computed: {
        ...mapGetters([
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
        ]),
        officeCategory: {
            get: function () {
                return this.getOfficeCategory
            },
            set: function () {
                this.fetchOfficeCategory(!this.getOfficeCategory)
            }
        },
        braveCategory: {
            get: function () {
                return this.getBraveCategory
            },
            set: function () {
                this.fetchBraveCategory(!this.getBraveCategory)
            }
        },
        confidentCategory: {
            get: function () {
                return this.getConfidentCategory
            },
            set: function () {
                this.fetchConfidentCategory(!this.getConfidentCategory)
            }
        },
        businessCategory: {
            get: function () {
                return this.getBusinessCategory
            },
            set: function () {
                this.fetchBusinessCategory(!this.getBusinessCategory)
            }
        },
        sexyCategory: {
            get: function () {
                return this.getSexyCategory
            },
            set: function () {
                this.fetchSexyCategory(!this.getSexyCategory)
            }
        },
        charmCategory: {
            get: function () {
                return this.getCharmCategory
            },
            set: function () {
                this.fetchCharmCategory(!this.getCharmCategory)
            }
        },
        elegantCategory: {
            get: function () {
                return this.getElegantCategory
            },
            set: function () {
                this.fetchElegantCategory(!this.getElegantCategory)
            }
        },
        provocativeCategory: {
            get: function () {
                return this.getProvocativeCategory
            },
            set: function () {
                this.fetchProvocativeCategory(!this.getProvocativeCategory)
            }
        },
        clubCategory: {
            get: function () {
                return this.getClubCategory
            },
            set: function () {
                this.fetchClubCategory(!this.getClubCategory)
            }
        },
        sensualCategory: {
            get: function () {
                return this.getSensualCategory
            },
            set: function () {
                this.fetchSensualCategory(!this.getSensualCategory)
            }
        },
        romanticCategory: {
            get: function () {
                return this.getRomanticCategory
            },
            set: function () {
                this.fetchRomanticCategory(!this.getRomanticCategory)
            }
        },
        misteryCategory: {
            get: function () {
                return this.getMisteryCategory
            },
            set: function () {
                this.fetchMisteryCategory(!this.getMisteryCategory)
            }
        },
        sportCategory: {
            get: function () {
                return this.getSportCategory
            },
            set: function () {
                this.fetchSportCategory(!this.getSportCategory)
            }
        },
        resoluteCategory: {
            get: function () {
                return this.getResoluteCategory
            },
            set: function () {
                this.fetchResoluteCategory(!this.getResoluteCategory)
            }
        }
    }
}
</script>

<style scoped>

</style>
