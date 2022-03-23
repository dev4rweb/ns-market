<template>
<div class="pyramid">
    <img :src="perfumeImg" alt="perfume" class="perfume">
    <div class="note-wrapper">
        <div class="top-note">
            <img :src="getPathToImage(curAromaGroup.note_1_image)" alt="note">
<!--            <img :src="noteOne" alt="note-top">-->
            <div class="right-side">
                <div class="top-line"></div>
                <div class="content-side">
                    <h5 class="title">верхние ноты</h5>
                    <p class="desc">
                        {{ curAromaGroup.note_1_description }}
                    </p>
                </div>
            </div>
        </div>
        <div class="center-note">
            <img :src="getPathToImage(curAromaGroup.note_2_image)" alt="note">
            <div class="right-side">
                <div class="center-line"></div>
                <div class="content-side">
                    <h5 class="title">ноты сердца</h5>
                    <p class="desc">
                        {{ curAromaGroup.note_2_description }}
                    </p>
                </div>
            </div>
        </div>
        <div class="base-note">
            <img :src="getPathToImage(curAromaGroup.note_3_image)" alt="note">
            <div class="right-side">
                <div class="base-line"></div>
                <div class="content-side">
                    <h5 class="title">ноты базы</h5>
                    <p class="desc">
                        {{ curAromaGroup.note_3_description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import perfumeImg from '../../../../assets/img/perfume-pyramid.png'
import noteOne from '../../../../assets/img/note-one.png'
import noteTwo from '../../../../assets/img/note-two.png'
import noteThree from '../../../../assets/img/note-three.png'
import {WORK_HOST} from "../../../store/routeConsts";
export default {
    name: "Pyramid",
    props: ['curAromaGroup'],
    data() {
        return {
            perfumeImg, noteOne, noteTwo, noteThree
        }
    },
    methods: {
        getPathToImage(path) {
            let host = WORK_HOST.replace('/api', '')
            if (path) {
                return `${host}uploads/${path}`
            } else return null
        }
    }
}
</script>

<style lang="scss" scoped>
.pyramid {
    height: 400px;
    display: flex;

    .perfume {
    }

    .note-wrapper {
        position: relative;
        margin-left: -350px;

        .right-side{
            max-width: 570px;
            display: flex;
            justify-content: flex-end;
        }

        .content-side{
            color: #000000;
            font-style: normal;
            max-width: 370px;
            .title{
                font-weight: 700;
                font-size: 20px;
                line-height: 120%;
                text-transform: uppercase;
                margin-bottom: 0;
            }
            .desc {
                font-weight: 400;
                font-size: 20px;
                line-height: 20px;
            }
        }
        .top-note {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 130px;

            .top-line {
                width: 164px;
                height: 2px;
                margin-right: 30px;
                margin-top: 10px;
                background-color:  rgba(103, 103, 103, 0.47);
            }

        }

        .center-note {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 130px;

            .center-line {
                width: 98px;
                height: 2px;
                margin-right: 30px;
                margin-top: 10px;
                background-color:  rgba(103, 103, 103, 0.47);
            }
        }

        .base-note {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 130px;

            .base-line {
                width: 46px;
                height: 2px;
                margin-right: 30px;
                margin-top: 10px;
                background-color:  rgba(103, 103, 103, 0.47);
            }

        }
    }
}
</style>
