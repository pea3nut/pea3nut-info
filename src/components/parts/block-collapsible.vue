<template>
    <div :class="[{[$options.name+'__folded']:isFolded}, peaRuleClassData]">
        <fieldset>
            <legend v-if="title" @click="switchFold" v-pea-focus="title" @focus="isFolded=false">
                {{title}}<span class="fa pea-print__hidden" :class="isFolded?'fa-caret-up':'fa-caret-down'"></span>
            </legend>
            <div :class="$options.name+'--body'">
                <text-body v-if="lang" :lang="lang">
                    <slot></slot>
                </text-body>
                <slot v-else></slot>
            </div>
        </fieldset>
    </div>
</template>

<script>
import {debounce} from 'pea-scripts/dist/function.browser.js';
import {getElementPosition} from 'pea-scripts/dist/function.browser.js';
export default{
    name:'block-collapsible',
    props:{
        title:String,
        folded:{
            type:Boolean,
            'default':false,
        },
        lang:String,
    },
    components:{
        'text-body':require('@/components/parts/text-body.vue'),
    },
    data(){return{
        isFolded:null,
    }},
    computed:{
    },
    created(){
        this.isFolded =this.folded;
        window.addEventListener('resize',debounce({
            fn(){
                var radars =Array.from(this.$el.querySelectorAll('.radar-img'));
                var className =`${this.$options.name}--radar__min-mode`;
                if(this.$el.clientWidth<=320){
                    radars.forEach(elt=>{
                        elt.classList.add(className);
                        elt.style.left =null;
                        elt.style.left =
                            -getElementPosition(elt).x
                            +(document.body.clientWidth -parseInt(getComputedStyle(elt).width))/2
                            +'px'
                        ;
                    });
                }else{
                    radars.forEach(elt=>{
                        elt.classList.remove(className);
                    });
                }
            },
            idle :400,
            context :this,
            run :true,
        }))
    },
    methods:{
        switchFold(){
            this.isFolded =!this.isFolded;
        },
    },
};
</script>

<style lang="scss">
@import "~pea-styles/scss/variable.scss";
.block-collapsible{
    .block-collapsible--radar__min-mode{
        position: absolute;
        left:0;//must
        z-index:500;
        background-color: $peaCoolWhite !important;
        border:1px solid #434343;
        padding:10px 0 12px;
        width:320px;
        margin :0 auto;
        &+*{//todo: has bug when radar-img is last element
            margin-top:375px;//block-collapsible--radar__min-mode height
        }
    }
    .radar-img{
        float:right;
    }
}
</style>
<style scoped="scoped" lang="scss">
.block-collapsible{
    width:100%;
    position: relative;
    fieldset{
        legend{
            display: inline-block;
            margin-left: 0.3em;
            padding-left:0.2em;
            margin-bottom:0;
            cursor: pointer;
            width:auto;
            .fa{
                margin:0 0.3em;
            }
        }
        .text-body{
            padding:.3em .6em;
        }
        width: 100%;
        border:1px solid #1f2021;
    }
    @media screen{
        &.block-collapsible__folded{
            fieldset{
                border-width:2px 0 0 0;
                margin:0 1px;
            }
            .block-collapsible--body{
                display: none;
            }
        }
    }
    @-moz-document url-prefix() {
         fieldset {
             display: table-cell;
         }
    }
}
</style>
