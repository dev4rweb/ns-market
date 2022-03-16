<template>
    <div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="morningCategory"
                id="morningCategory"
            >
            <label
                class="form-check-label"
                for="morningCategory"
            >
                Утренние
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="afternoonCategory"
                id="afternoonCategory"
            >
            <label
                class="form-check-label"
                for="afternoonCategory"
            >
                Дневные
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="eveningCategory"
                id="eveningCategory"
            >
            <label
                class="form-check-label"
                for="eveningCategory"
            >
                Вечерние
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="morningAfterEveningCategory"
                id="morningAfterEveningCategory"
            >
            <label
                class="form-check-label"
                for="morningAfterEveningCategory"
            >
                Утренние, дневные, вечерние
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="morningAfternoonCategory"
                id="morningAfternoonCategory"
            >
            <label
                class="form-check-label"
                for="morningAfternoonCategory"
            >
                Утренние, дневные
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="afternoonEveningCategory"
                id="afternoonEveningCategory"
            >
            <label
                class="form-check-label"
                for="afternoonEveningCategory"
            >
                Дневные, вечерние
            </label>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "DailyFilter",
    methods: {
        ...mapActions([
            'fetchMorningCategory', 'fetchAfternoonCategory', 'fetchEveningCategory',
            'fetchMorningAfterEveningCategory', 'fetchMorningAfternoonCategory', 'fetchAfternoonEveningCategory'
        ])
    },
    computed: {
        ...mapGetters([
            'getMorningCategory',
            'getAfternoonCategory',
            'getEveningCategory',
            'getMorningAfterEveningCategory',
            'getMorningAfternoonCategory',
            'getAfternoonEveningCategory',
        ]),
        morningCategory: {
            get: function () {
                return this.getMorningCategory
            },
            set: function () {
                this.fetchMorningCategory(!this.getMorningCategory)
            }
        },
        afternoonCategory: {
            get: function () {
                return this.getAfternoonCategory
            },
            set: function () {
                this.fetchAfternoonCategory(!this.getAfternoonCategory)
            }
        },
        eveningCategory: {
            get: function () {
                return this.getEveningCategory
            },
            set: function () {
                this.fetchEveningCategory(!this.getEveningCategory)
            }
        },
        morningAfterEveningCategory: {
            get: function () {
                return this.getMorningAfterEveningCategory
            },
            set: function () {
                this.fetchMorningAfterEveningCategory(!this.getMorningAfterEveningCategory)
            }
        },
        morningAfternoonCategory: {
            get: function () {
                return this.getMorningAfternoonCategory
            },
            set: function () {
                this.fetchMorningAfternoonCategory(!this.getMorningAfternoonCategory)
            }
        },
        afternoonEveningCategory: {
            get: function () {
                return this.getAfternoonEveningCategory
            },
            set: function () {
                this.fetchAfternoonEveningCategory(!this.getAfternoonEveningCategory)
            }
        }
    }
}
</script>

<style scoped>

</style>
