<template>
    <div class="btn-group-toggle custom-radio" data-toggle="buttons">
        <label class="btn btn-outline-secondary active">
            <img :src="checkboxActive" alt="cbx">
            <input type="radio" name="male" id="option1" checked> Мужской
        </label>
        <label class="btn btn-outline-secondary">
            <img :src="checkbox" alt="cbx">
            <input type="radio" name="female" id="option2"> женский
        </label>
    </div>
</template>

<script>
import cbxFill from '../../../assets/img/ic-cbx-fill.svg'
import cbx from '../../../assets/img/ic-cbx.svg'
export default {
    name: "CustomRadio",
    data() {
        return {
            checkboxActive: cbxFill,
            checkbox: cbx,
        }
    }
}
</script>

<style scoped>

</style>
