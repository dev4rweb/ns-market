<template>
    <div class="card shadow-lg mb-3 p-3">
        <ProgramComponents v-if="getProductDetail.is_program" />
        <div v-else>
            <div
                v-if="getProductDetail && getProductDetail.biologically_active_components && getProductDetail.biologically_active_components.length > 0"
            >
                <div class="bac-wrapper">
                    <div
                        v-if="getProductDetail.biologically_active_components.length"
                        v-for="item in getProductDetail.biologically_active_components"
                        class="card shadow-sm d-flex flex-column align-items-center justify-content-center bac-item p-3"
                        @click="setCurrentBac(item)"
                    >
                        <img
                            :src="imgPath(item.image)"
                            alt="component"
                        >
                        <h4 class="mt-3">{{item.name}}</h4>
                    </div>
                </div>

                <div
                    v-if="currentBac"
                    class="current-bac mt-4 shadow-sm p-5"
                >
                    <img
                        :src="imgPath(currentBac.image)"
                        alt="product"
                        class="mb-3"
                    >
                    <div>
                        <h3>{{currentBac.pivot.name}}</h3>
                        <div v-html="currentBac.description"></div>
                    </div>
                </div>
            </div>
            <h3 v-else>У продукта нет информации о составе</h3>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {WORK_HOST} from "../../../store/routeConsts";
import noPhoto from "../../../../assets/img/placeholder_300x228.png";
import ProgramComponents from "../../UI/ProgramComponents";
export default {
    name: "ProductKits",
    data() {
        return {
            currentBac: null,
        }
    },
    methods: {
        imgPath(pathImg) {
            const url = WORK_HOST.replace('/api/', '')
            if (pathImg) {
                return `${url}/uploads/${pathImg}`
                // return noPhoto
            } else return noPhoto
        },
        setCurrentBac(bac) {
            this.currentBac = bac
            console.log('setCurrentBac', this.currentBac)
        }
    },
    computed: {
        ...mapGetters(['getProductDetail']),
    },
    components: {
        ProgramComponents
    },
    mounted() {
        if (this.getProductDetail && this.getProductDetail.biologically_active_components) {
            this.setCurrentBac(this.getProductDetail.biologically_active_components[0])
        }
    }
}
</script>

<style lang="scss" scoped>
.bac-wrapper{
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto;
    grid-gap: 1rem;

    @media screen and (max-width: 1200px){
        grid-template-columns: auto auto auto auto auto auto;

    }

    .bac-item{
        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        -ms-transition: all .3s;
        -o-transition: all .3s;
        transition: all .3s;
        width: 150px;
        align-self: center;
        justify-self: center;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;

        img{
            width: 100%;
        }


        &:hover{
            cursor: pointer;
            -webkit-transform: scale(1.1, 1.1);
            -moz-transform: scale(1.1, 1.1);
            -ms-transform: scale(1.1, 1.1);
            -o-transform: scale(1.1, 1.1);
            transform: scale(1.1, 1.1);
        }
    }
}

.current-bac{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
