<template>
    <div id="main" :class="loadedPageCompName+'--root'"><!-- #main.[page component name] -->
        <div id="main-head"></div>
        <div id="main-body">
            <container-with-tabs
                :tabs="[{
                    name :'page-normal',
                    text :'三次元',
                    to   :'/normal'
                },{
                    name :'page-acg',
                    text :'二次元',
                    to   :'/sss'
                },{
                    name :'page-job',
                    text :'职业技能',
                    to   :'/job'
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
import {debounce} from 'pea-scripts/dist/function.browser.js';
import {enable as enablePeaFocus} from "@/assets/js/pea-focus";

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
            runSync :true,
        }));
    },
    mounted(){
        enablePeaFocus();
    },
}
</script>

<style lang="scss" scoped="scoped">
@import "~pea-styles/scss/variable.scss";
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