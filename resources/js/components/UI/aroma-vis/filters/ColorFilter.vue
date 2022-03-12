<template>
    <div>
        <div
            class="form-check d-flex p-0"
            @click="changeCategoryC"
        >
            <div
                class="custom-box orange-box"
            >
                <span
                    class="custom-checked orange-checked"
                    :style="categoryC ? 'display: block': 'display: none'"
                >
                    &gt;
                </span>
            </div>
            <input
                class="form-check-input"
                type="checkbox"
                v-model="categoryC"
                id="categoryC"
                style="display: none;"
            >
            <span
                class="circle-letter letter-orange"
                :style="categoryC ? 'color: white; background-color: #EBAA3C': 'color: #EBAA3C'"
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
        <div class="form-check d-flex p-0"
             @click="changeCategoryD">
            <div
                class="custom-box green-box"
            >
                <span
                    class="custom-checked green-checked"
                    :style="categoryD ? 'display: block': 'display: none'"
                >
                    &gt;
                </span>
            </div>
            <input
                class="form-check-input"
                type="checkbox"
                v-model="categoryD"
                id="categoryD"
                style="display: none;"
            >
            <span
                class="circle-letter letter-green"
                :style="categoryD ? 'color: white; background-color: #86B649': 'color: #86B649'"
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
        <div class="form-check d-flex p-0"
             @click="changeCategoryK"
        >
            <div
                class="custom-box red-box"
            >
                <span
                    class="custom-checked red-checked"
                    :style="categoryK ? 'display: block': 'display: none'"
                >
                    &gt;
                </span>
            </div>
            <input
                class="form-check-input"
                type="checkbox"
                v-model="categoryK"
                id="categoryK"
                style="display: none;"
            >
            <span
                class="circle-letter letter-red"
                :style="categoryK ? 'color: white; background-color: #D75C34': 'color: #D75C34'"
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
        <div class="form-check d-flex p-0"
             @click="changeCategoryM"
        >
            <div
                class="custom-box blue-box"
            >
                <span
                    class="custom-checked blue-checked"
                    :style="categoryM ? 'display: block': 'display: none'"
                >
                    &gt;
                </span>
            </div>
            <input
                class="form-check-input"
                type="checkbox"
                v-model="categoryM"
                id="categoryM"
                style="display: none;"
            >
            <span
                class="circle-letter letter-blue"
                :style="categoryM ? 'color: white; background-color: #3D8BCC': 'color: #3D8BCC'"
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
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "ColorFilter",
    methods: {
        ...mapMutations(['setCategoryC', 'setCategoryD', 'setCategoryK', 'setCategoryM']),
        changeCategoryC() {
            this.setCategoryC(!this.getCategoryC)
        },
        changeCategoryD() {
            this.setCategoryD(!this.getCategoryD)
        },
        changeCategoryK() {
            this.setCategoryK(!this.getCategoryK)
        },
        changeCategoryM() {
            this.setCategoryM(!this.getCategoryM)
        },
    },
    computed: {
        ...mapGetters(['getCategoryC', 'getCategoryD', 'getCategoryK', 'getCategoryM']),
        categoryC: {
            get: function () {
                return this.getCategoryC
            },
            set: function () {
                this.setCategoryC(!this.getCategoryC)
            }
        },
        categoryD: {
            get: function () {
                return this.getCategoryD
            },
            set: function () {
                this.setCategoryD(!this.getCategoryD)
            }
        },
        categoryK: {
            get: function () {
                return this.getCategoryK
            },
            set: function () {
                this.setCategoryK(!this.getCategoryK)
            }
        },
        categoryM: {
            get: function () {
                return this.getCategoryM
            },
            set: function () {
                this.setCategoryM(!this.getCategoryM)
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.form-check {
    cursor: pointer;

    .form-check-label {
        width: 100%;
    }
}

.custom-box {
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    margin-top: 6px;
    margin-right: 5px;

    .custom-checked {
        font-size: 25px;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
    }
}

.orange-box {
    border: 1px solid #EBAA3C;

    .orange-checked {
        color: #EBAA3C;
    }
}

.green-box {
    border: 1px solid #86B649;

    .green-checked {
        color: #86B649;
    }
}

.red-box {
    border: 1px solid #D75C34;

    .red-checked {
        color: #D75C34;
    }
}

.blue-box {
    border: 1px solid #3D8BCC;

    .blue-checked {
        color: #3D8BCC;
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
