<template>
<div class="pyramid">
    <img :src="perfumeImg" alt="perfume" class="perfume">
    <div class="note-wrapper">
        <div class="top-note">
            <img :src="noteOne" alt="note-top">
            <div class="right-side">
                <div class="top-line"></div>
                <div class="content-side">
                    <h5 class="title">верхние ноты</h5>
                    <p class="desc">
                        бергамот, африканский апельсиновый цвет,
                        гардения, мускатный орех и зелёные ноты
                    </p>
                </div>
            </div>
        </div>
        <div class="center-note">
            <img :src="noteTwo" alt="note-center">
            <div class="right-side">
                <div class="center-line"></div>
                <div class="content-side">
                    <h5 class="title">ноты сердца</h5>
                    <p class="desc">
                        жимолость, тубероза, жасмин, ирис,
                        грецкий орех и пион
                    </p>
                </div>
            </div>
        </div>
        <div class="base-note">
            <img :src="noteThree" alt="note-base">
            <div class="right-side">
                <div class="base-line"></div>
                <div class="content-side">
                    <h5 class="title">ноты базы</h5>
                    <p class="desc">
                        ваниль, амбра, кедр из Вирджинии,
                        уд и древесные ноты
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
export default {
    name: "Pyramid",
    data() {
        return {
            perfumeImg, noteOne, noteTwo, noteThree
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
                font-size: 18px;
                line-height: 120%;
                text-transform: uppercase;
                margin-bottom: 0;
            }
            .desc {
                font-weight: 400;
                font-size: 18px;
                line-height: 20px;
            }
        }
        .top-note {
            display: flex;
            align-items: center;
            justify-content: space-between;

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
