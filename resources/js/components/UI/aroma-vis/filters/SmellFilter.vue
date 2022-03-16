<template>
    <div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="citrusCategory"
                id="citrusCategory"
            >
            <label
                class="form-check-label"
                for="citrusCategory"
            >
                Цитрусовые
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="waterCategory"
                id="waterCategory"
            >
            <label
                class="form-check-label"
                for="waterCategory"
            >
                Водные
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="greenCategory"
                id="greenCategory"
            >
            <label
                class="form-check-label"
                for="greenCategory"
            >
                Зелёные
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="fruitCategory"
                id="fruitCategory"
            >
            <label
                class="form-check-label"
                for="fruitCategory"
            >
                Фруктовые
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="flowerCategory"
                id="flowerCategory"
            >
            <label
                class="form-check-label"
                for="flowerCategory"
            >
                Цветочные
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="softFloralCategory"
                id="softFloralCategory"
            >
            <label
                class="form-check-label"
                for="softFloralCategory"
            >
                Мягкие цветочные
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="floralOrientalCategory"
                id="floralOrientalCategory"
            >
            <label
                class="form-check-label"
                for="floralOrientalCategory"
            >
                Цветочные восточные
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="softOrientalCategory"
                id="softOrientalCategory"
            >
            <label
                class="form-check-label"
                for="softOrientalCategory"
            >
                Мягкие восточные
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="orientalCategory"
                id="orientalCategory"
            >
            <label
                class="form-check-label"
                for="orientalCategory"
            >
                Восточные
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="woodyOrientalCategory"
                id="woodyOrientalCategory"
            >
            <label
                class="form-check-label"
                for="woodyOrientalCategory"
            >
                Древесные восточные
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="woodyCategory"
                id="woodyCategory"
            >
            <label
                class="form-check-label"
                for="woodyCategory"
            >
                Древесные
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="chypreCategory"
                id="chypreCategory"
            >
            <label
                class="form-check-label"
                for="chypreCategory"
            >
                Шипровые
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="wineGlassCategory"
                id="wineGlassCategory"
            >
            <label
                class="form-check-label"
                for="wineGlassCategory"
            >
                Фужерные
            </label>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "SmellFilter",
    methods: {
        ...mapActions([
            'fetchCitrusCategory',
            'fetchWaterCategory',
            'fetchGreenCategory',
            'fetchFruitCategory',
            'fetchFlowerCategory',
            'fetchSoftFloralCategory',
            'fetchFloralOrientalCategory',
            'fetchSoftOrientalCategory',
            'fetchOrientalCategory',
            'fetchWoodyOrientalCategory',
            'fetchWoodyCategory',
            'fetchChypreCategory',
            'fetchWineGlassCategory',
        ])
    },
    computed: {
        ...mapGetters([
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
        ]),
        citrusCategory: {
            get: function () {
                return this.getCitrusCategory
            },
            set: function () {
                this.fetchCitrusCategory(!this.getCitrusCategory)
            }
        },
        waterCategory: {
            get: function () {
                return this.getWaterCategory
            },
            set: function () {
                this.fetchWaterCategory(!this.getWaterCategory)
            }
        },
        greenCategory: {
            get: function () {
                return this.getGreenCategory
            },
            set: function () {
                this.fetchGreenCategory(!this.getGreenCategory)
            }
        },
        fruitCategory: {
            get: function () {
                return this.getFruitCategory
            },
            set: function () {
                this.fetchFruitCategory(!this.getFruitCategory)
            }
        },
        flowerCategory: {
            get: function () {
                return this.getFlowerCategory
            },
            set: function () {
                this.fetchFlowerCategory(!this.getFlowerCategory)
            }
        },
        softFloralCategory: {
            get: function () {
                return this.getSoftFloralCategory
            },
            set: function () {
                this.fetchSoftFloralCategory(!this.getSoftFloralCategory)
            }
        },
        floralOrientalCategory: {
            get: function () {
                return this.getFloralOrientalCategory
            },
            set: function () {
                this.fetchFloralOrientalCategory(!this.getFloralOrientalCategory)
            }
        },
        softOrientalCategory: {
            get: function () {
                return this.getSoftOrientalCategory
            },
            set: function () {
                this.fetchSoftOrientalCategory(!this.getSoftOrientalCategory)
            }
        },
        orientalCategory: {
            get: function () {
                return this.getOrientalCategory
            },
            set: function () {
                this.fetchOrientalCategory(!this.getOrientalCategory)
            }
        },
        woodyOrientalCategory: {
            get: function () {
                return this.getWoodyOrientalCategory
            },
            set: function () {
                this.fetchWoodyOrientalCategory(!this.getWoodyOrientalCategory)
            }
        },
        woodyCategory: {
            get: function () {
                return this.getWoodyCategory
            },
            set: function () {
                this.fetchWoodyCategory(!this.getWoodyCategory)
            }
        },
        chypreCategory: {
            get: function () {
                return this.getChypreCategory
            },
            set: function () {
                this.fetchChypreCategory(!this.getChypreCategory)
            }
        },
        wineGlassCategory: {
            get: function () {
                return this.getWineGlassCategory
            },
            set: function () {
                this.fetchWineGlassCategory(!this.getWineGlassCategory)
            }
        },
    }
}
</script>

<style scoped>

</style>
