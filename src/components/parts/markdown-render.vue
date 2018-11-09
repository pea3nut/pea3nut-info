<template>
    <div>
        <div :class="$options.name+'--show'"></div>
        <div :class="$options.name+'--origin'">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Marked from 'marked';
import {getRandomChar} from 'pea-scripts/dist/function.browser.js';
export default {
    name :'markdown-render',
    props :{
        renderHook:{
            type :Function,
            'default' :text=>text,
        },
    },
    mounted(){
        // record and mark all be slot elements
        var elementMap =[];
        Array.from(this.$el.querySelectorAll(
            `.${this.$options.name}--origin > *`
        )).forEach(elt=>{
            let id =getRandomChar(8);
            elt.setAttribute('markdown-render-element',id);
            elementMap.push({
                key :id,
                element :elt,
            });
        });
        var mdElementmdsContainer =this.renderMarkdown(
            this.formatMarkdown(
                this.$el.querySelector(
                    `.${this.$options.name}--origin`
                ).innerHTML
            )
        );
        // replace origin element
        Array.from(mdElementmdsContainer.querySelectorAll('[markdown-render-element]')).forEach(elt=>{
            let key =elt.getAttribute('markdown-render-element');
            elt.parentElement.insertBefore(
                elementMap.find(item=>item.key===key).element,
                elt
            );
            elt.parentElement.removeChild(elt);
        });
        // append to .show
        Array.from(mdElementmdsContainer.children).forEach(elt=>{
            this.$el.querySelector(`.${this.$options.name}--show`).appendChild(elt);
        });
    },
    methods :{
        renderMarkdown(text){
            var dom =null;
            text =this.renderHook(text);
            dom =this.parseHTML(Marked(text));

            // add target="_blank" to <a> tab which outer link
            Array.from(dom.getElementsByTagName('a')).forEach(a=>{
                if(!a.target &&/^http\:/.test(a.getAttribute('href'))){
                    a.target ='_blank';
                };
            });


            // fix
            // > text1
            // > text2
            // be render to <blockquote><p>text1\ntext2</p></blockquote> bug
            //
            // extension mark render
            // > —— sth
            // to be => <p class="[name]--quote__--">——sth</p>
            // > xxx:\syyyyy
            // to be => <p class="[name]--quite__xxx">yyyyy</p>
            Array.from(
                dom.querySelectorAll('blockquote p')
            ).forEach(pElt=>{
                pElt.innerHTML=pElt.innerHTML.replace(/\n/g,'<br />');
                if(pElt.innerHTML.substr(0,2) ==='——'){
                    pElt.classList.add(this.$options.name+'--quote__--');
                }else if(/^[\w\-]{1,10}: /.test(pElt.innerHTML)){
                    pElt.classList.add(
                        this.$options.name
                        +'--quite__'
                        +pElt.innerHTML.substr(
                        0,
                        pElt.innerHTML.indexOf(':')
                        )
                    );
                };
            });

            // for
            // > "XXX"
            // > ——from<YYY>
            Array.from(
                dom.querySelectorAll('blockquote p')
            ).forEach(elt=>{
                elt.innerHTML =elt.innerHTML.replace(
                    /<br ?\/?>(\s?——.+$)/g,
                    `<div class="${this.$options.name+'--quote__--'}">$1</div>`
                );
            });

            return dom;
        },
        formatMarkdown(text){
            var lines =text.split('\n');
            for(let i=0 ;i<lines.length-2 ;i++){
                if(lines[i][0] ==='<') continue; // It will auto remove indent space whe Vue render component
                let num1 =lines[i].match(/^[\t ]*/)[0].length;
                let num2 =lines[++i].match(/^[\t ]*/)[0].length;
                if(/^[\t ]*$/.test(lines[i]) && num1!==num2) break;
            }
            var replaceSpace =function(){
                for(let line of lines){
                    if(!/^([\t ]*|<.+)$/.test(line)) return line.match(/^[\t ]*/)[0].length;
                };
            }();
            if(replaceSpace !==0){
                let exp =new RegExp(`^[\t ]{${replaceSpace}}`);
                lines =lines.map(line=>line.replace(exp,''));
            }
            // fix quote mark ">" encode to &gt
            for(let i=0 ;i<lines.length ;i++){
                lines[i] =lines[i].replace(/^\&gt; ?/ ,'> ');

                // quote multiple level
                let newStr = lines[i].replace(/(> )*\&gt; / ,'$1 > ');
                while(newStr !== lines[i]){
                    lines[i] = newStr;
                    newStr = lines[i].replace(/(> )*\&gt; / ,'$1 > ');
                }
            };


            return lines.join('\n');
        },
        parseHTML(aHTMLString){
            var dom =document.implementation.createHTMLDocument('');
            dom.documentElement.innerHTML =aHTMLString;
            return dom.body;
        },
    },
};

</script>

<style>
.markdown-render .markdown-render--origin{
    display: none;
}
</style>