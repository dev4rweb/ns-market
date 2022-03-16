<template>
    <div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="categoryMan"
                id="categoryMan"
            >
            <label
                class="form-check-label"
                for="categoryMan"
            >
                Ароматы для мужчин
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="categoryWoman"
                id="categoryWoman"
            >
            <label
                class="form-check-label"
                for="categoryWoman"
            >
                Ароматы для женщин
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="categoryUnisex"
                id="categoryUnisex"
            >
            <label
                class="form-check-label"
                for="categoryUnisex"
            >
                Ароматы унисекс
            </label>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "SexFilter",
    computed: {
      ...mapGetters(['getCategoryMan', 'getCategoryWoman', 'getCategoryUnisex']),
        categoryMan: {
            get: function () {
                return this.getCategoryMan
            },
            set: function () {
                this.fetchCategoryMan(!this.getCategoryMan)
            }
        },
        categoryWoman: {
            get: function () {
                return this.getCategoryWoman
            },
            set: function () {
                this.fetchCategoryWoman(!this.getCategoryWoman)
            }
        },
        categoryUnisex: {
            get: function () {
                return this.getCategoryUnisex
            },
            set: function () {
                this.fetchCategoryUnisex(!this.getCategoryUnisex)
            }
        }
    },
    methods: {
        ...mapActions(['fetchCategoryMan', 'fetchCategoryWoman', 'fetchCategoryUnisex'])
    }
}
</script>

<style scoped>

</style>
