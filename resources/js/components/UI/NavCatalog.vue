<template>
    <div class="container">
        <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
                <a class="btn btn-lg btn-outline-info active" href="#">Продукты</a>
            </li>
            <li class="nav-item">
                <a class="btn btn-lg btn-outline-info" href="#">Программы</a>
            </li>
            <li class="nav-item">
                <a class="btn btn-lg btn-outline-info" href="#">Список</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "NavCatalog",
    props: ['slug']
}
</script>

<style lang="scss" scoped>
    .btn-lg {
        width: 100%;
    }
</style>
