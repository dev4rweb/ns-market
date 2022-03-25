<template>
    <div class="d-flex justify-content-center align-items-center">
        <span
            v-if="getAromaGroupsFilter.length > windowSize"
            class="arrow arrow-left"
            @click="moveCarousel(-1)"
            :disabled="atHeadOfList">
        </span>

        <div
            v-if="getAromaGroupsFilter"
            class="carousel"
            :style="{width: getAromaGroupsFilter.length > windowSize ? '864px':
             `${getAromaGroupsFilter.length * 96}px`}"
        >
            <div class="overflow-container">
                <div
                    class="d-flex cards"
                    v-if="getAromaGroupsFilter.length"
                    :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')' }"
                >
                    <div
                        v-for="item in getAromaGroupsFilter"
                        class="circle-color"
                        :style="{backgroundColor: getCircleColor(item.code)}"
                        :key="item.id"
                        :class="{active: item.id === curProdGroup.id}"
                        @click="chooseProductGroup(item)"
                    >
                        <h5>{{ item.code }}</h5>
                        <span>{{ getSex(item.gender) }}</span>
                    </div>
                </div>
            </div>
        </div>
        <span
            v-if="getAromaGroupsFilter.length > windowSize"
            class="arrow arrow-right"
            @click="moveCarousel(1)"
            :disabled="atEndOfList"
        >
        </span>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {getAromaGroupColor} from "../../store/utils/getAromaGroupColor";
import {getGender} from "../../store/utils/getGender";

export default {
    name: "MultiCarouselAromaFilter",
    props: ['curProdGroup'],
    data() {
        return {
            currentOffset: 0,
            windowSize: 9, // card visible
            paginationFactor: 96, // card container is visible with in pixel
        }
    },
    methods: {
        chooseProductGroup(prodGroup) {
            console.log('chooseProductGroup', prodGroup)
            if (prodGroup.code) {
                const partUrls = window.location.pathname.split('/')
                window.location.href = `/catalog-aroma/${partUrls[2]}/${partUrls[3]}/${prodGroup.code}`;
            } else {
                this.setToastError('Продукт не имеет адреса')
            }
        },
        getCircleColor(code) {
            return getAromaGroupColor(code)
        },
        getSex(gender) {
            return getGender(gender)
        },
        moveCarousel(direction) {
            // Find a more elegant way to express the :style. consider using props to make it truly generic
            if (direction === 1 && !this.atEndOfList) {
                this.currentOffset -= this.paginationFactor;
            } else if (direction === -1 && !this.atHeadOfList) {
                this.currentOffset += this.paginationFactor;
            }
        },
        getCenterPosition() {
            const index = this.getAromaGroupsFilter.findIndex(i => i.id === this.curProdGroup.id)
            console.log('getCenterPosition', index)
            if (this.getAromaGroupsFilter.length > 9) {
                if (
                    (this.getAromaGroupsFilter.length - 5) > index
                    &&
                    this.getAromaGroupsFilter.length > this.windowSize
                    &&
                    index > 4
                ) {
                    this.currentOffset = - (96 * (index - 4))
                }

                if (
                    (this.getAromaGroupsFilter.length - 5) <= index
                ) {
                    this.currentOffset = - (96 * (this.getAromaGroupsFilter.length - 9))
                }
            } else this.currentOffset = 0
        }
    },
    computed: {
        ...mapGetters(['getAromaGroupsFilter']),
        atEndOfList() {
            // console.log('atEndOfList currentOffset', this.currentOffset)
            // console.log('atEndOfList paginationFactor', this.paginationFactor)
            // console.log('atEndOfList getAromaGroupsFilter', this.getAromaGroupsFilter.length)
            // console.log('atEndOfList computed', (this.paginationFactor * -1) * (this.getAromaGroupsFilter.length - this.windowSize))
            return this.currentOffset <= (this.paginationFactor * -1) *
                (this.getAromaGroupsFilter.length - this.windowSize);
        },
        atHeadOfList() {
            return this.currentOffset === 0;
        },
    },
    mounted() {
        this.getCenterPosition()
    }
}
</script>

<style lang="scss" scoped>
.arrow {
    width: 15px;
    height: 15px;
    color: #038ED7;
    padding: 10px;
    box-sizing: border-box;
    border-top: 2px solid #038ED7;
    border-right: 2px solid #038ED7;
    transition: all 150ms linear;
    margin: 0 20px;
    cursor: pointer;

    &[disabled] {
        opacity: 0.2;
        border-color: black;
    }
}

.arrow-left {
    transform: rotate(-135deg);

    &:active {
        transform: rotate(-135deg) scale(0.9);
    }
}

.arrow-right {
    transform: rotate(45deg);

    &:active {
        transform: rotate(45deg) scale(0.9);
    }
}

.carousel {
    //width: 300px;
    width: calc(96px * 9);

    .overflow-container {
        overflow: hidden;

        .cards {
            transition: transform 500ms ease-out;
            transform: translatex(0px);
        }
    }
}

.circle-color {
    width: 72px;
    height: 72px;
    padding: 15px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    //background-color: #EBAA3C;
    color: white;
    margin: 12px;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;

    &.active, &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.2, 1.2);
        -moz-transform: scale(1.2, 1.2);
        -ms-transform: scale(1.2, 1.2);
        -o-transform: scale(1.2, 1.2);
        transform: scale(1.2, 1.2);
    }

    h5 {
        margin-bottom: 0;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 120%;
        color: white;
        text-align: center;
        text-transform: uppercase;
    }

    span {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 10px;
        text-align: center;
    }
}
</style>
