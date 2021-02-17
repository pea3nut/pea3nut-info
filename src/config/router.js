import Vue from 'vue';
import Router from 'vue-router';Vue.use(Router);


import Action from '@/config/action.js';




export default new Router({
    mode: 'history',
    routes :[{
        path :'/',
        ...Action.rootRoute,
    },{
        path :'/test' ,
        component :require('@/components/pages/page-test.vue'),
    },{
        path :'/normal' ,
        component :require('@/components/pages/page-normal.vue'),
    },{
        path :'/sss' ,
        component :require('@/components/pages/page-acg.vue'),
        alias: '/acg'
    },{
        path :'/job' ,
        component :require('@/components/pages/page-job.vue'),
    },{
        path :'/about' ,
        component :require('@/components/pages/page-about.vue'),
    },{
        path :'*' ,
        component :require('@/components/pages/page-404.vue'),
    }]
})
