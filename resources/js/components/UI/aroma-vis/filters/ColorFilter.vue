<template>
    <div>
        <div class="form-check d-flex">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="categoryC"
                id="categoryC"
            >
            <span
                class="circle-letter letter-orange"
                style="color: white; background-color: #EBAA3C"
            >
                    С
            </span>
            <label
                class="form-check-label"
                for="categoryC"
            >
                (цитрусовые, цветочные, фруктовые, фужерные)
            </label>
        </div>
        <div class="form-check d-flex">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="categoryD"
                id="categoryD"
            >
            <span
                class="circle-letter letter-green"
                style="color: white; background-color: #86B649"
            >
                    D
            </span>
            <label
                class="form-check-label"
                for="categoryD"
            >
                (древесные, мускусные, папоротниковые, восточные)
            </label>
        </div>
        <div class="form-check d-flex">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="categoryK"
                id="categoryK"
            >
            <span
                class="circle-letter letter-red"
                style="color: white; background-color: #D75C34"
            >
                    K
            </span>
            <label
                class="form-check-label"
                for="categoryK"
            >
                (шипровые, ориентальные, сладкие, пряные, амбровые, альдегидные, кипарисовые)
            </label>
        </div>
        <div class="form-check d-flex">
            <input
                class="form-check-input"
                type="checkbox"
                v-model="categoryM"
                id="categoryM"
            >
            <span
                class="circle-letter letter-blue"
                style="color: white; background-color: #3D8BCC"
            >
                    M
            </span>
            <label
                class="form-check-label"
                for="categoryM"
            >
                (морские, водные, свежие, океанические, зеленые)
            </label>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "ColorFilter",
    methods: {
        ...mapActions(['fetchCategoryC', 'fetchCategoryD', 'fetchCategoryK', 'fetchCategoryM'])
    },
    computed: {
        ...mapGetters(['getCategoryC', 'getCategoryD', 'getCategoryK', 'getCategoryM']),
        categoryC: {
            get: function () {
                return this.getCategoryC
            },
            set: function () {
                this.fetchCategoryC(!this.getCategoryC)
            }
        },
        categoryD: {
            get: function () {
                return this.getCategoryD
            },
            set: function () {
                this.fetchCategoryD(!this.getCategoryD)
            }
        },
        categoryK: {
            get: function () {
                return this.getCategoryK
            },
            set: function () {
                this.fetchCategoryK(!this.getCategoryK)
            }
        },
        categoryM: {
            get: function () {
                return this.getCategoryM
            },
            set: function () {
                this.fetchCategoryM(!this.getCategoryM)
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.form-check {

    .form-check-label {
        width: 100%;
    }
}

.circle-letter {
    padding: 5px;
    width: 20px;
    height: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-right: 3px;
    margin-top: 4px;
}

.letter-orange {
    border: 2px solid #EBAA3C;
}

.letter-green {
    border: 2px solid #86B649;
}

.letter-red {
    border: 2px solid #D75C34;
}

.letter-blue {
    border: 2px solid #3D8BCC;
}
</style>
