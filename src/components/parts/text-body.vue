<template>
    <div>
        <markdown-render v-if="isMarkdown" :render-hook="renderComponent">
            <slot></slot>
        </markdown-render>
        <slot v-else></slot>
    </div>
</template>

<script>
import Vue from 'vue';
import {getRandomChar} from 'pea-scripts/dist/function.browser.js';
export default {
    name :'text-body',
    props :['lang'],
    data(){return{
        sourceData :'',
        elementMap :[],
    }},
    computed :{
        isMarkdown(){
            return ['md','markdown'].includes(this.lang)
        },
    },
    mounted(){
        ~function (vm){// pea component event support

            // 防止多绑定
            if(window['TEXT_BODY_EVENT_DELEGATE'])return;
            window['TEXT_BODY_EVENT_DELEGATE']=true;

            // 环境检测
            const eventType =vm.mobileMode?'touchstart':'click';

            // 委派
            var toolTipArr =[];
            var focusEltArr =[];
            document.body.addEventListener(eventType,function(event){
                if(focusEltArr.indexOf(event.target) !==-1){
                    let index =focusEltArr.indexOf(event.target);
                    focusEltArr.splice(index,1);
                    document.body.removeChild(toolTipArr.splice(index,1)[0]);
                }else if(event.target.matches(`.${vm.$options.name}--pea-detail`)){
                    createTip(event.target).then(elt=>{
                        toolTipArr.push(elt);
                        focusEltArr.push(event.target);
                    });
                }else if(toolTipArr.length && function(){
                        let elt =event.target;
                        while(elt !==document){
                            if(elt.matches(`.${vm.$options.name}--pea-tooltip-window`)) return false;
                            elt=elt.parentNode;
                        }
                        return true;
                    }()){
                    for(let elt of toolTipArr){
                        document.body.removeChild(elt);
                    };
                    toolTipArr.length=0;
                    focusEltArr.length=0;
                }
            },{passive: true});
            document.body.addEventListener(eventType,function(event){
                if(event.target.matches(`.${vm.$options.name}--pea-hidden`)){
                    if(event.target.classList.contains(`${vm.$options.name}--pea-hidden__show`)){
                        event.target.classList.add(`${vm.$options.name}--pea-hidden__hidden`);
                        event.target.classList.remove(`${vm.$options.name}--pea-hidden__show`);
                    }else{
                        event.target.classList.add(`${vm.$options.name}--pea-hidden__show`);
                        event.target.classList.remove(`${vm.$options.name}--pea-hidden__hidden`);
                    }
                };
            },{passive: true});
            async function createTip(tarElt){
                const conElt =document.createElement('div');
                const contentText =decodeURIComponent(tarElt.getAttribute('data-pea-tooltip'));
                let bodyEltClass =vm.$options.name+'--pea-tooltip-window--body';
                conElt.className=vm.$options.name+'--pea-tooltip-window';
                conElt.innerHTML=`
                    <div class="${bodyEltClass}"></div>
                    <div class="${vm.$options.name}--pea-tooltip-window--icon">
                        <span class="fa fa-caret-down"></span>
                        <span class="fa fa-caret-down"></span>
                    </div>
                `;
                document.body.appendChild(conElt);
                const bodyElt =conElt.querySelector(`.${bodyEltClass}`);

                var countPosition =function(){
                    var poiElt =conElt.querySelector(`.${vm.$options.name}--pea-tooltip-window--icon`);
                    let {x:tarX,y:tarY}=getElementPosition(tarElt);

                    // 计算容器坐标
                    let posX =tarX-20
                        ,posY =tarY-conElt.clientHeight-12
                    ;
                    if(posX < 3) posX=3;
                    if(
                        posX+conElt.clientWidth
                        >
                        document.body.clientWidth -3
                    ){
                        posX =document.body.clientWidth-conElt.clientWidth-3;
                    }

                    // 计算指尖坐标
                    let proX =
                        tarX-posX
                        +tarElt.clientWidth/2
                        -poiElt.querySelector('.fa').clientWidth/2
                        -2
                    ;

                    conElt.style.top =posY+'px';
                    conElt.style.left =posX+'px';
                    poiElt.style.left=proX+'px';
                    return conElt;
                };
                // render content text
                if(contentText.substr(0,2) !=='#!'){
                    bodyElt.textContent =contentText;
                }else if(/^#!\s?(md|markdown)/im.test(contentText)){
                    let markdownSource =contentText.replace(/^#! ?(md|markdown)\s/ ,'');
                    let vmEl =document.createElement('span');
                    bodyElt.appendChild(vmEl);
                    let tmpVm =new Vue({
                        el :vmEl,
                        components :{
                            'markdown-render':require('@/components/parts/markdown-render.vue'),
                        },
                        template :`<markdown-render>\n${markdownSource}\n</markdown-render>`,
                    });
                    bodyElt.classList.add('text-body');
                    await tmpVm.$nextTick();
                }else if(/^#! ?html/im.test(contentText)){
                    bodyElt.innerHTML =contentText.replace(/^.+\n/g ,'');
                };


                Array.from(bodyElt.getElementsByTagName('img')).forEach(img=>{
                    img.onload =countPosition;
                });


                return countPosition();

            };
            function getElementPosition(e) {
                var x = 0;
                var y = 0;
                while (e !== null)  {
                    x += e.offsetLeft;
                    y += e.offsetTop;
                    e = e.offsetParent;
                }
                return {x: x, y: y};
            }
        }(this);
    },
    methods :{
        renderComponent(text){
            // extension mark render
            // @- xxx -@
            // @| xxx |@
            // @@[xxx](xxx)@@
            return text
                .replace(
                    /@@ ?\[(.+?)\] ?\(([\W\w]+?)\) ?@@/g
                    //,'<i class="tb-detail" rbd-tooltip="$2">$1</i>'
                    ,(str ,group1 ,group2)=>{
                        return `<i class="${this.$options.name}--pea-detail" data-pea-tooltip="${encodeURIComponent(group2)}">${group1}</i>`;
                    },
                )
                .replace(/@\- ?/g ,`<i class="${this.$options.name}--pea-not">`)
                .replace(/@\| ?/g ,`<i class="${this.$options.name}--pea-hidden">`)
                .replace(/\-@|\|@/g ,'</i>')
            ;
        },
    },
    components :{
        'markdown-render':require('@/components/parts/markdown-render.vue'),
    },
}
</script>

<style lang="scss">
.text-body{
    position: relative;
    font-size:16px;
    $allPLineHeight:1.7em;
    letter-spacing:0.1em;
    width:100%;
    word-break:break-all;
    strong{
        @media print{
            text-decoration: underline;
        }
    }
    p{
        text-indent:2em;
        margin:0 0 1em 0;
        max-width:100%;
        line-height:$allPLineHeight;
    }
    &.text-body__mobile p{
        text-indent:1em;
    }
    &.text-body__mobile blockquote p{
        text-indent:0;
    }
    ul{
        padding-left:2.5em;
        li{
            margin-bottom: 0.3em;
            line-height:1.5em;
        }
    }
    &.text-body__mobile ul{
        padding-left:1.5em;
    }
    img{
        max-width:96%;
        min-width:0;
        width:auto;
        margin-left:-1.5em;
    }
    blockquote{
        border-left:7px solid #afb3b4;
        margin:0.5em 0 0.7em 0;
        color:#585c5d;
        background-color: #e1e1e1;
        padding:0.2em 0 0.2em 0.4em;
        p{
            text-indent:0;
            margin: 0.2em 0 0.6em 0;
            &.markdown-render--quote__-- ,.markdown-render--quote__--{
                text-align: right;
            }
        }
    }
    a{
        letter-spacing:0;
    }
    pre{
        border:1px dotted #2b2d2f;
        background-color: #e6e6e6;
        padding:0.5em 1em;
        letter-spacing:0;
        code{
            background-color: inherit;
        }
    }
    code{
        background-color: #f9f2f4;
        letter-spacing:0;
    }
    .fa{
        text-indent:0;
    }
    .text-body--pea-not{
        font-style: italic;
        text-decoration : line-through;
        margin-right:0.2em;
    }
    .text-body--pea-detail{
        display: inline-block;
        text-indent:0;
        font-style: normal;
        cursor: pointer;
        border:1px solid #2b2d2f;
        padding:0 #{($allPLineHeight - 1em)/4};
        margin:0 #{($allPLineHeight - 1em)/4};
        line-height:($allPLineHeight - 1em)/2+1em;
    }
    .text-body--pea-hidden{
        font-style: normal;
        color:#fff;
        background-color: #fff;
        border-bottom:1px solid #2b2d2f;
        &.text-body--pea-hidden__hidden{
            color:#fff !important;
        }
        &.text-body--pea-hidden__show ,&:hover{
            color:inherit !important;
            border:none !important;
        }
    }
    .text-body__mobile{
        letter-spacing:1px;
    }
}
.text-body--pea-tooltip-window{
    $bgColor:#f4f4f4;
    $borderColor: #999b9e;
    border:1px solid $borderColor;
    box-shadow: 1px 1px 6px #4c4c4c;
    position: absolute;
    top:0;
    left:0;
    background-color: $bgColor;
    z-index:900;
    .text-body--pea-tooltip-window--body{
        padding:0.3em;
        width: 16rem;
        &.text-body{
            width: 32rem;
            max-width:98vw;
        }
    }
    .text-body--pea-tooltip-window--icon{
        font-size: 25px;
        position: absolute;
        bottom:9px;
        right:3rem;
        .fa:nth-child(1){
            position: absolute;
            top:-1px;
            color:$bgColor;
            z-index: 200;
        }
        .fa:nth-child(2){
            color:$borderColor;
            z-index: 199;
            position: absolute;
        }
    }
}
</style>