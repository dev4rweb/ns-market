<template>
    <label
        class="wrapper-checkbox btn btn-lg btn-outline-secondary d-flex justify-content-center align-items-center"
        :class="{active: isChecked}"
    >
        <img
            v-if="isChecked"
            :src="cbxFill"
            class="image"
            alt="cbx">
        <img
            v-else
            :src="cbx"
            class="image"
            alt="cbx">
        {{ label }}
        <input
            class="checkbox"
            type="radio"
            :checked="isChecked"
            :value="value"
            @change="$emit('change', $event.target.value)"/>
        <!--        <span class="checkmark"></span>-->
    </label>
</template>

<script>
import cbxFill from '../../../assets/img/ic-cbx-fill.svg'
import cbx from '../../../assets/img/ic-cbx.svg'

export default {
    name: "RadioBox",
    data() {
        return {
            cbx: cbx,
            cbxFill: cbxFill
        }
    },
    model: {
        prop: 'modelValue',
        event: 'change',
    },
    props: {
        "label": {type: String, default: "", required: true},
        "modelValue": {default: ""},
        "value": {type: String, default: undefined}
    },
    computed: {
        isChecked() {
            return this.modelValue == this.value
        }
    }
}
</script>

<style scoped>
/* Customize the label (the wrapper) */
.wrapper-checkbox {
    display: block;
    /*max-width: 185px;*/
    position: relative;
    margin-right: 1rem;
    cursor: pointer;
    font-size: 18px;
    text-transform: uppercase;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default radio button */
.wrapper-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.btn-outline-secondary:not(:disabled):not(.disabled).active {
    background-color: #038ED7;
    border-color: #038ED7;
}

.image {
    margin-right: 1rem;
}

/* Create a custom radio button */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 21px;
    width: 21px;
    border-radius: 50%;
    background-color: #eee;
    border: 1px solid #ccc;
}

/* On mouse-over, add a grey background color */
.wrapper-checkbox:hover input ~ .checkmark {
    background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.wrapper-checkbox input:checked ~ .checkmark {
    background-color: #1CD4A7;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.wrapper-checkbox input:checked ~ .checkmark:after {
    display: block;
}

/* Style the indicator (dot/circle) */
.wrapper-checkbox .checkmark:after {
    top: 5px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
}
</style>
