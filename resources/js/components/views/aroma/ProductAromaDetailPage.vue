<template>
    <div class="mb-5">
        <CatalogProductsHeader/>
        <Breadcrumb/>
        <NavCatalog slug="DetailAroma"/>
        <div
            class="mb-3 aroma-detail"
            v-if="curProducts"
        >
            <div class="container">
                <div class="pt-3">
                    <QuickFilter
                        v-if="getAromaGroupsFilter && curProdGroup"
                        :curProdGroup="curProdGroup"
                    />
                </div>
                <div
                    v-if="curProdGroup"
                    class="d-flex justify-content-between"
                >
                    <CategoryOil
                        :isOilPresent="isOilPresent"
                        :curAromaGroup="curProdGroup"
                    />
                    <Pyramid
                        :curAromaGroup="curProdGroup"
                    />
                </div>
                <div class="d-flex justify-content-end">
                    <button class="btn btn-lg btn-outline-info">
                        В избранное <img :src="icHeart" alt="fav">
                    </button>
                </div>
                <p
                    v-if="aromaProperties"
                    class="aroma-prop"
                >
                    Характеристики аромата: {{ aromaProperties }}
                </p>
                <p
                    v-if="curProdGroup"
                    class="description mb-5"
                >
                    {{curProdGroup.short_description}}
                </p>
                <div class="d-flex justify-content-center">
                    <AromaShortTable
                        v-if="curProducts"
                        :curProducts="curProducts"
                    />
                </div>
            </div>

        </div>

        <div class="d-flex justify-content-center">
            <ComplementaryAromas
                v-if="curProdGroup && curProdGroup.complementary_aromas"
                :curProdGroup="curProdGroup.complementary_aromas"
            />
        </div>

        <div class="d-flex justify-content-center">
            <AntagonistAromas
                v-if="curProdGroup && curProdGroup.antagonists_aromas"
                :curProdGroup="curProdGroup.antagonists_aromas"
            />
        </div>

        <div class="d-flex justify-content-center">
            <PairAromas
                v-if="curProdGroup && curProdGroup.pair_aroma"
                :curProdGroup="curProdGroup.pair_aroma"
            />
        </div>
        <!--        {{ curProducts }}-->
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import CatalogProductsHeader from "../../page-parts/headers/CatalogProductsHeader";
import Breadcrumb from "../../UI/Breadcrumb";
import QuickFilter from "../../UI/aroma-vis/filters/QuickFilter";
import CategoryOil from "../../UI/aroma-vis/CategoryOil";
import Pyramid from "../../UI/aroma-vis/Pyramid";
import icHeart from '../../../../assets/img/ic-heart.svg'
import AromaShortTable from "../../UI/tables/AromaShortTable";
import ComplementaryAromas from "../../UI/aroma-vis/ComplementaryAromas";
import AntagonistAromas from "../../UI/aroma-vis/AntagonistAromas";
import PairAromas from "../../UI/aroma-vis/PairAromas";
import NavCatalog from "../../UI/NavCatalog";
import MultiCarousel from "../../UI/MultiCarousel";
export default {
    name: "ProductAromaDetailPage",
    props: ['slug'],
    data() {
        return {
            icHeart
        }
    },
    methods: {
        ...mapActions(['getCategoryPage', 'fetchPhysicalPerson']),
        ...mapMutations(['setAromaCurrentGroup', 'setAromaCurrentProducts']),

    },
    computed: {
        ...mapGetters(['getCategoryProducts', 'getAromaGroups', 'getAromaGroupsFilter']),
        aromaProperties() {
            if (this.curProdGroup)
                return `${this.curProdGroup.filter_values[0].name}, ${this.curProdGroup.filter_values[1].name}, ${this.curProdGroup.filter_values[2].name}`
            else return null
        },
        curProducts() {
            if (this.getCategoryProducts.length) {
                const products = this.getCategoryProducts
                    .filter(i => i.name.includes(this.slug))
                console.log('cur products', products)
                this.setAromaCurrentProducts(products)
                return products
            } else return null
        },
        curProdGroup() {
            if (this.getAromaGroups.length) {
                const curAromaGroups = this.getAromaGroups
                    .find(i => i.code === this.slug)
                if (curAromaGroups) {
                    console.log('cur aroma group', curAromaGroups)
                    this.setAromaCurrentGroup(curAromaGroups)
                    return curAromaGroups
                } else return null
            } else return null
        },
        isOilPresent() {
            let isPresent = false
            if (this.curProducts.length) {
                this.curProducts.forEach(i => {
                    const lastNumbers = i.vendor_code.charAt(3) + i.vendor_code.charAt(4)
                    if (lastNumbers === '07') isPresent = true
                });
            }
            return isPresent
        }
    },
    components: {
        CatalogProductsHeader, Breadcrumb, QuickFilter, CategoryOil, Pyramid,
        AromaShortTable, ComplementaryAromas, AntagonistAromas, PairAromas,
        NavCatalog, MultiCarousel
    },
    mounted() {
        const data = {
            slug: 'AromaVis',
            page: 'products'
        }
        this.getCategoryPage(data)
        console.log('auth user', window.User)
        if (window.User) {
            this.fetchPhysicalPerson()
        }
    }
}
</script>

<style lang="scss" scoped>
.description{
    border-left: 6px solid #038ED7;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #333333;
    padding-left: 10px;
}

.aroma-prop {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
}

.btn-outline-info {
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;

    &:hover {
        -webkit-transform: scale(1.1, 1.1);
        -moz-transform: scale(1.1, 1.1);
        -ms-transform: scale(1.1, 1.1);
        -o-transform: scale(1.1, 1.1);
        transform: scale(1.1, 1.1);
        border-color: #038ED7;
        color: #038ED7;
        background-color: #fff;
    }
}

.aroma-detail {
    background-color: #fff;
}
</style>
