<template>
    <div>
        <div :class="$options.name+'--label'" v-text="title" v-pea-focus="title"></div>
        <text-body :class="$options.name+'--text'" :lang="lang">
            <slot></slot>
        </text-body>
    </div>
</template>

<script>
export default{
    name:'block-justify-row',
    components:{
        'text-body':require('@/components/parts/text-body.vue'),
    },
    props:['title','lang'],
    data(){return{
    }},
};
</script>

<style>
.block-justify-row .block-justify-row--text p{
    text-indent:0 !important;
}
.block-justify-row .block-justify-row--text img{
    margin-left: 0 !important;
    border: 1px dashed #ccc;
}
</style>
<style scoped="scoped" lang="scss">
@import "~pea-styles/scss/variable.scss";
.block-justify-row{
    display: flex;
    width:100%;
    .block-justify-row--label{
        $fontSize: 1.5rem;
        text-align: right;
        font-size: $fontSize;
        width: ($fontSize * 7 + 1rem);
        font-family: $peaLabelFont;
        color: #8d8e8f;
        margin-top:1rem;
        flex-shrink: 0;
        line-height:1em;
        padding-top:3px;
        word-wrap:break-word;
    }
    .block-justify-row--text{
        flex-grow:1;
        border-left:2px solid #373a3c;
        padding:1em 5em 2em 1.5em;
        margin-left:1.5em;
    }
    &.block-justify-row__mobile{
        width:100%;
        .block-justify-row--label{
            width:4.2rem;
            padding-right:0.4rem;
            text-align: left;
            writing-mode: tb-rl;
        }
        .block-justify-row--text{
            margin-left:0.4em;
            margin-right:0.3em;
            padding-left:0.5em;
            padding-right:0.1em;
            width:auto;
        }
    }
}
</style>

