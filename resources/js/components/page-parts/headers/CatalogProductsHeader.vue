<template>
    <div
        v-if="getCurrentCategory"
        :style="{backgroundImage: 'url(' + imgPath + ')'}"
        class="category bg-white">
        <div class="container info-side">
            <div>
                <p>{{ getCurrentCategory.short_description }}</p>
                <h1>{{ getCurrentCategory.name }}</h1>
                <div>
                    <button
                        type="button"
                        class="btn btn-lg btn-secondary"
                    >
                        Преимущества
                    </button>
                </div>
            </div>
            <AromaVisHeader
                v-if="getCurrentCategory.slug.toLowerCase().includes('aromavis')"
            />
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import categoryImg from '../../../../assets/img/category-additional.png'
import {WORK_HOST} from "../../../store/routeConsts";
import AromaVisHeader from "../../UI/aroma-vis/AromaVisHeader";
export default {
    name: "CatalogProductsHeader",
    data() {
        return {
            categoryImg
        }
    },
    computed: {
        ...mapGetters(['getCurrentCategory']),
        imgPath() {
            const url = WORK_HOST.replace('/api/', '')
            if (this.getCurrentCategory.additional_image)
                return `${url}${this.getCurrentCategory.additional_image}`
            else
                return categoryImg
        },
    },
    components: {
        AromaVisHeader
    }
}
</script>

<style lang="scss" scoped>
.category {
    height: 300px;
    display: flex;
    justify-content: flex-start;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;

    .info-side {
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: space-between;

        p {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 20px;
            color: #B87D63;
        }

        h1 {
            font-style: normal;
            font-weight: bold;
            font-size: 60px;
            line-height: 73px;
            color: #B87D63;
        }

        .btn-secondary {
            background: #B87D63;
            border-radius: 8px;
        }
    }

    img {
        width: 100%;
        max-width: 600px;
        height: auto;
    }
}
</style>
