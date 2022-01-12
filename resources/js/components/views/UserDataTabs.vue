<template>
    <div>
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button
                    class="btn btn-outline-info active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-own-data"
                    type="button"
                    role="tab"
                    aria-controls="pills-own-data"
                    aria-selected="true"
                >
                    Личные
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button
                    class="btn btn-outline-info"
                    id="pills-address-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-address"
                    type="button"
                    role="tab"
                    aria-controls="pills-address"
                    aria-selected="false"
                >
                    Адреса
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button
                    class="btn btn-outline-info"
                    id="pills-status-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-status"
                    type="button"
                    role="tab"
                    aria-controls="pills-status"
                    aria-selected="false"
                >
                    Проф статус
                </button>
            </li>

            <li class="nav-item" role="presentation">
                <button
                    class="btn btn-outline-info"
                    id="pills-passport-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-passport"
                    type="button"
                    role="tab"
                    aria-controls="pills-passport"
                    aria-selected="false"
                >
                    Паспорт
                </button>
            </li>

            <li class="nav-item" role="presentation">
                <button
                    class="btn btn-outline-info"
                    id="pills-billing-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-billing"
                    type="button"
                    role="tab"
                    aria-controls="pills-billing"
                    aria-selected="false"
                >
                    Платёжные реквизиты
                </button>
            </li>

            <li class="nav-item" role="presentation">
                <button
                    class="btn btn-outline-info"
                    id="pills-mentor-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-mentor"
                    type="button"
                    role="tab"
                    aria-controls="pills-mentor"
                    aria-selected="false"
                >
                    Наставник
                </button>
            </li>

        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div
                class="tab-pane fade show active"
                id="pills-own-data"
                role="tabpanel"
                aria-labelledby="pills-own-data-tab"
            >
                <user-data-panel></user-data-panel>
            </div>
            <div
                class="tab-pane fade"
                id="pills-address"
                role="tabpanel"
                aria-labelledby="pills-address-tab"
            >
                2
            </div>
            <div
                class="tab-pane fade"
                id="pills-status"
                role="tabpanel"
                aria-labelledby="pills-status-tab"
            >
                <user-status-panel></user-status-panel>
            </div>
            <div
                class="tab-pane fade"
                id="pills-passport"
                role="tabpanel"
                aria-labelledby="pills-passport-tab"
            >
                Passport
            </div>
            <div
                class="tab-pane fade"
                id="pills-billing"
                role="tabpanel"
                aria-labelledby="pills-billing-tab"
            >
                Платёжные реквизиты
            </div>
            <div
                class="tab-pane fade"
                id="pills-mentor"
                role="tabpanel"
                aria-labelledby="pills-mentor-tab"
            >
                Наставник
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "UserDataTabs"
}
</script>

<style scoped>

</style>
