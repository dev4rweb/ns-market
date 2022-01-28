<template>
    <div class="position-relative">
        <div
            class="popover-content"
            :class="{open: visible}"
        >
            Вы можете воспользоваться автоматическим сервисом для отправки SMS-сообщений или скопировать индивидуальную
            реферальную ссылку для отправки удобным для Вас способом.
        </div>
        <span
            class="what"
            @mouseenter="visible = true"
            @mouseleave="visible = false"
        >
        ?
        </span>
    </div>
</template>

<script>
export default {
    name: "Tooltip",
    data() {
        return {
            visible: false
        }
    }
}
</script>

<style lang="scss" scoped>
.what {
    width: 23px;
    height: 23px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    color: #999999;
    border: 1px solid #999999;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;

    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.2, 1.2);
        -moz-transform: scale(1.2, 1.2);
        -ms-transform: scale(1.2, 1.2);
        -o-transform: scale(1.2, 1.2);
        transform: scale(1.2, 1.2);
    }
}

.popover-content {
    display: none;
    position: absolute;
    background: #EEF2F5;
    border-radius: 10px;
    width: 320px;
    padding: 1rem;
    right: 0px;
    bottom: 30px;
    border: 1px solid #038ed7;
}
.open {
    display: block;
}
</style>
