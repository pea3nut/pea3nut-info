<template>
    <div>
        <div :class="$options.name+'--title'">
            <h3 v-text="title" v-pea-focus="title"></h3>
            <hr />
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'block-justify',
    components:{
        'text-body':require('@/components/parts/text-body.vue'),
    },
    props:['title'],
    data(){return{
    }},
};
</script>

<style scoped="scoped" lang="scss">
@import "~pea-styles/scss/variable.scss";
.block-justify{
    width:100%;
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    .block-justify--title{
        display: flex;
        align-items:center;
        width:90%;
        margin:0 auto;
        $bgColor: #373a3c;
        @media print{
            width:100%;
        }
        &>h3{
            color:#fff;
            border-radius: 9999px;
            background-color:$bgColor;
            font-size: 1.3rem;
            font-family:$peaLabelFont;
            display: inline-block;
            line-height:2em;
            padding:10px;
            margin:0;
            @media print{
                color:$bgColor;
                border:3px solid $bgColor;
                border-right: none;
            }
        }
        hr{
            border-color: $bgColor;
            border-width: 3px;
            margin-left: -3px;
            flex-grow:1;
        }
    }
    &.block-justify__mobile{
        .block-justify--title{
            width:100%;
            margin-left:3px;
        }
    }
}
</style>
