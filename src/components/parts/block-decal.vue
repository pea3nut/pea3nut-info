<template>
    <div v-random-scope="2.5">
        <div v-if="imgSrc" :class="$options.name+'--img'">
            <img :class="$options.name+'--img--photo-like img-fluid'" :src="imgSrc" alt="example" v-random-scope="10" />
        </div>
        <text-body :class="{
            [$options.name+'--body']: true,
            [$options.name+'--body__withOutImage']: !imgSrc
        }" :lang="lang">
            <slot></slot>
        </text-body>
    </div>
</template>

<script>
import {getRandom} from 'pea-scripts/dist/function.browser.js';
export default{
    name:'block-decal',
    props:['img-src','lang'],
    data(){return{
    }},
    components:{
        'text-body':require('@/components/parts/text-body.vue'),
    },
    directives:{
        'random-scope'(el, {value}) {
            el.style.transform=`rotate(${getRandom(-value,value)}deg)`;
        }
    }
};
</script>

<style scoped="scoped" lang="scss">
@import "~pea-styles/scss/variable.scss";
@import "~pea-styles/scss/pea-class.scss";
.block-decal{
    background-color: #f5f5d5;
    border:2px dotted #f5e4cc;
    box-shadow: 2px 2px 10px #303030;
    border-radius: 5px;
    padding-top:2rem;
    padding-bottom:3rem;
    display: flex;
    align-items:center;
    justify-content:space-around;
    max-width:100%;
    margin:10px 0;
    .block-decal--img{
        width: 40%;
        .block-decal--img--photo-like{
            @extend .pea-photo-like__desktop;
        }
    }
    .block-decal--body{
        width: 50%;
        color: #282b2d;
        font-family: $peaHandwrittenFont;
        font-size: 1.2em;

        &__withOutImage {
            width: 80%;
        }
    }
    &.block-decal__mobile{
        flex-wrap: wrap;
        .block-decal--img{
            width: 90%;
            .block-decal--img--photo-like{
                @extend .pea-photo-like__mobile;
            }
        }
        .block-decal--body{
            width: 100%;
            margin-top:2em;
            padding: 5px;
            font-size: 1.1em;
        }
    }
}
</style>
