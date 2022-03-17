<template>
    <div class="btn-group-toggle custom-radio" data-toggle="buttons">
        <label
            class="btn btn-aroma-filter"
        >
            <img :src="getIsMainFilterOn ? checkboxActive : checkbox" alt="cbx">
            <input
                type="checkbox"
                v-model="isOn"
            >
            Показывать все
        </label>
    </div>
</template>

<script>
import cbxFill from '../../../assets/img/ic-cbx-fill.svg'
import cbx from '../../../assets/img/ic-cbx.svg'
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    name: "ToggleAromaFilter",
    data() {
        return {
            checkboxActive: cbxFill,
            checkbox: cbx,
        }
    },
    methods: {
        ...mapActions(['fetchIsMainFilterOn']),
        ...mapMutations(['setAromaGroupsFilter']),
    },
    computed: {
        ...mapGetters(['getIsMainFilterOn']),
        isOn: {
            get: function () {
                return this.getIsMainFilterOn
            },
            set: function () {
                if (!this.getIsMainFilterOn)
                    this.fetchIsMainFilterOn(!this.getIsMainFilterOn)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.btn-aroma-filter {
    background-color: #038ed7;
    color: white;
}
</style>
