<template>
    <span class="me-3 back-btn">&larr;</span>
</template>

<script>
export default {
    name: "BackBtn"
}
</script>

<style lang="scss" scoped>
.back-btn {
    color: #038ED7;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    border: 1px solid #038ed7;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;

    &:hover {
        cursor: pointer;
    }
}
</style>
