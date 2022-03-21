<template>
<div class="pyramid">
    <img :src="perfumeImg" alt="perfume" class="perfume">
    <div class="note-wrapper">
        <div class="top-note"></div>
        <div class="center-note"></div>
        <div class="base-note"></div>
    </div>
</div>
</template>

<script>
import perfumeImg from '../../../../assets/img/perfume-pyramid.png'
export default {
    name: "Pyramid",
    data() {
        return {
            perfumeImg
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
        .top-note {
        }

        .center-note {

        }

        .base-note {

        }
    }
}
</style>
