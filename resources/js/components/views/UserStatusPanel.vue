<template>
    <div class="row">
        <div class="card data-card">
            <h3>Профессиональная деятельность</h3>
            <p>Выберите подходящий вариант из списка и загрузите диплом, сертификат или другой документ,
                подтверждающий вашу специализацию.</p>
            <div class="form-check mb-3">
                <input class="form-check-input" type="radio" name="flexRadioDefault" >
                <label class="form-check-label">
                    Косметолог
                </label>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <button class="btn btn-outline-info">Загрузить паспорт</button>
                    <button class="btn btn-outline-info">Загрузить сертификат</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserStatusPanel"
}
</script>

<style scoped>
h3{
    color: #333333;
}
</style>
