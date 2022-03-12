<template>
    <div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="morningCategory"
            >
            <label
                class="form-check-label"
                for="morningCategory"
            >
                Утренние
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="afternoonCategory"
            >
            <label
                class="form-check-label"
                for="afternoonCategory"
            >
                Дневные
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="eveningCategory"
            >
            <label
                class="form-check-label"
                for="eveningCategory"
            >
                Вечерние
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="morningAfterEveningCategory"
            >
            <label
                class="form-check-label"
                for="morningAfterEveningCategory"
            >
                Утренние, дневные, вечерние
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="morningAfternoonCategory"
            >
            <label
                class="form-check-label"
                for="morningAfternoonCategory"
            >
                Утренние, дневные
            </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="afternoonEveningCategory"
            >
            <label
                class="form-check-label"
                for="afternoonEveningCategory"
            >
                Дневные, вечерние
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: "DailyFilter"
}
</script>

<style scoped>

</style>
