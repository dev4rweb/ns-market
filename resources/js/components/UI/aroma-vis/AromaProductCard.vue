<template>
    <div
        v-if="product"
        class="aroma-product-card"
        @click="selectProduct"
    >
        <div class="circle-color" :style="{backgroundColor: getCircleColor}">
            <h3>{{ product.code }}</h3>
            <span>{{ getSex }}</span>
        </div>
        <p> {{product.short_description}} </p>
    </div>
</template>

<script>
export default {
    name: "AromaProductCard",
    props: ['product'],
    methods: {
        selectProduct() {
            console.log('selectProduct', this.product)
            if (this.product.code) {
                const partUrls = window.location.pathname.split('/')
                window.location.href = `/catalog-aroma/${partUrls[2]}/${partUrls[3]}/${this.product.code}`;
            } else {
                this.setToastError('Продукт не имеет адреса')
            }
        }
    },
    computed: {
        getCircleColor() {
            // const firstNumber = this.product.vendor_code.charAt(0)
            const firstNumber = this.product.code.charAt(0)
            switch (firstNumber) {
                case 'C':
                    return '#EBAA3C'
                case 'D':
                    return '#86B649'
                case 'K':
                    return '#D75C34'
                default:
                    return '#3D8BCC'
            }
        },
        getVendorExp() {
            const firstNumber = this.product.vendor_code.charAt(0)
            const aromaNumber = this.product.vendor_code.charAt(1) + this.product.vendor_code.charAt(2)
            switch (firstNumber) {
                case '1':
                    return `C-${aromaNumber}`
                case '2':
                    return `D-${aromaNumber}`
                case '3':
                    return `K-${aromaNumber}`
                default:
                    return `M-${aromaNumber}`
            }
        },
        getSex() {
            const sex = this.product.gender
            switch (sex) {
                case 'Ж':
                    return 'женский аромат'
                case 'М':
                    return 'мужской аромат'
                default:
                    return 'унисекс'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.aroma-product-card {
    display: flex;
    align-items: center;
    padding: 8px 8px 8px 16px;
    width: 100%;
    max-width: 750px;
    background: #FFFFFF;
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    margin-bottom: 16px;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;

    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.05, 1.05);
        -moz-transform: scale(1.05, 1.05);
        -ms-transform: scale(1.05, 1.05);
        -o-transform: scale(1.05, 1.05);
        transform: scale(1.05, 1.05);
    }

    .circle-color {
        width: 72px;
        height: 72px;
        padding: 15px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        //background-color: #EBAA3C;
        color: white;
        margin-right: 25px;

        h3 {
            margin-bottom: 0;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 120%;
            color: white;
            text-align: center;
            text-transform: uppercase;
        }

        span {
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 10px;
            text-align: center;
        }
    }

    p {
        width: 100%;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: #333333;
    }
}
</style>
