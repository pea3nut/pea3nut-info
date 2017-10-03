<template>
    <div id="main" :class="loadedPageCompName+'--root'"><!-- #main.[page component name] -->
        <div id="main-head"></div>
        <div id="main-body">
            <container-with-tabs
                :tabs="[{
                    name :'page-normal',
                    text :'日常版',
                    to   :'/normal'
                },{
                    name :'page-job',
                    text :'求职简历',
                    to   :'/job'
                },{
                    name :'page-acg',
                    text :'二次元',
                    to   :'/acg'
                },{
                    name :'page-about',
                    text :'关于',
                    to   :'/about'
                }]"
                :active="loadedPageCompName"
                class="container-with-tabs"
            >
                <router-view></router-view>
            </container-with-tabs>
            <scroll-to-top></scroll-to-top>
        </div>
        <div id="main-foot">
            <main-foot class="main-foot-copyright"></main-foot>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex';
import Router from './config/router.js';
import MainModules from '@/components/main-modules'
import {debounce} from 'libPea3nutOrg/src/js/function.both.js';
import {getElementPosition} from 'libPea3nutOrg/src/js/function.browser.js';

export default {
    name :'app',
    router :Router,
    data(){return{
        mobileCritical :768,
    }},
    computed :{
        ...Vuex.mapState([
            'loadedPageCompName',
        ]),
    },
    components :{
        ...MainModules,
        'scroll-to-top':require('@/components/parts/scroll-to-top.vue'),
        'container-with-tabs':require('@/components/parts/container-with-tabs.vue'),
    },
    created(){
        window.addEventListener('resize' ,debounce({
            fn(){
                this.$store.commit('setMobileMode',window.innerWidth <= this.mobileCritical);
            },
            idle :300,
            context :this,
            run :true,
        }));
    },
    mounted(){
        {// scroll to pea-focus
            let hash = location.hash.substr(1);
            if(
                hash
                && (document.getElementById(hash) === null)
                && (document.getElementsByName(hash).length === 0)
            ){
                var elt = Array.from(
                    document.querySelectorAll(`[data-pea-focus]`)
                ).find(elt => elt.dataset.peaFocus === hash);
                if(!elt) return;
                elt.dispatchEvent(new Event('focus'));
                window.scrollTo(0 ,getElementPosition(elt).y - 70);
            }
        }
    },
}
</script>

<style lang="scss" scoped="scoped">
@import "~libPea3nutOrg/src/scss/variable.scss";
#main{
    #main-body{
        position: relative;
        max-width:960px;
        width:90%;
        margin:0 auto;
        margin-top:5rem;
        min-height: 100vh;
        z-index: 900;
        @media print{
            width:100%;
            margin-top:0;
        }
    }
    #main-foot{
        .main-foot-copyright{
            margin-top:250px;
        }
        width:100%;
    }
    @media only screen and (max-width: 768px) {
        #main-body{
            margin-top:2rem !important;
        }
    }
    @media only screen and (max-width: 330px) {
        #main-body{
            width:95%;
        }
    }
}
</style>