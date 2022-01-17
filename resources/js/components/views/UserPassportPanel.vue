<template>
    <div class="row">
        <div class="card data-card">
            <h3>Паспортные данные</h3>
            <p>Загрузите первую страницу паспорта</p>
            <div class="row mb-3">
                <div class="col-md-6">
                    <div class="form-group form-group-blue">
                        <label>
                            Серия паспорта
                        </label>
                        <input
                            type="tel"
                            class="form-control form-control-lg"
                            ref="focusMe"
                            required
                        >
                        <div
                            class="invalid-feedback"
                        >
                            Error
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group form-group-blue">
                        <label>
                            Номер паспорта
                        </label>
                        <input
                            type="tel"
                            class="form-control form-control-lg"
                            ref="focusMe"
                            required
                        >
                        <div
                            class="invalid-feedback"
                        >
                            Error
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <button class="btn btn-lg btn-outline-info w-100">Загрузить Паспорт</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserPassportPanel"
}
</script>

<style lang="scss" scoped>
h3{
    text-transform: uppercase;
    color: #333333;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
}


.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>
