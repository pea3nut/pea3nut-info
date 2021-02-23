<script>
import * as BrowserFunctions from 'pea-scripts/dist/function.browser.js';
import * as Functions from '@/assets/js/function.js';
import * as Config from '@/config/config.js';
import * as RadarInfo from '@/config/radar-config.js';
import {countClassData,useClassData} from '@/assets/js/function.js';
export default {
    components :{
        'short-night-timeline':require('@/components/parts/short-night-timeline.vue'),
        'article-header':require('@/components/parts/article-header.vue'),
        'profile-card':require('@/components/parts/profile-card.vue'),
        'radar-img':require('@/components/parts/radar-img.vue'),
        'text-body':require('@/components/parts/text-body.vue'),
        'block-collapsible':require('@/components/parts/block-collapsible.vue'),
        'block-decal':require('@/components/parts/block-decal.vue'),
        'markdown-render':require('@/components/parts/markdown-render.vue'),
        ...require('@/components/parts/block-justify'),
    },
    data(){return{
        ...Config,
        ...RadarInfo,
    }},
    created(){
        this.$store.commit('setLoadedPageCompName',this.$options.name);
    },
    mounted(){
        this.$watch('mobileMode' ,function _self(value){
            useClassData(countClassData('page-view',value) ,this.$el);
            return _self;
        }.call(this,this.mobileMode));
    },
    methods :{
        ...require('pea-scripts/dist/function.browser.js'),
        ...BrowserFunctions,
        ...Functions,
    },
}
</script>

<style lang="scss">
.page-view{
    &.page-view__desktop{
        padding :35px;
        .profile-card .radar-img{
            margin-right :-30px;
        }
        &>.block-decal{
            margin: 0 30px 30px;
        }
        &>.block-collapsible{
            margin-bottom:30px;
        }
        &>.block-justify{
            margin-bottom:60px;
        }
        &>.short-night-timeline{
            margin-bottom:40px;
        }
    }
    &.page-view__mobile{
        padding:15px;
        .article-header{
            margin-bottom :20px;
        }
        &>.block-decal{
            margin: 0 5px 40px;
        }
        &>.block-collapsible{
            margin-bottom:40px;
        }
        &>.block-justify{
            margin-bottom:20px;
        }
        &>.short-night-timeline{
            margin-bottom:20px;
        }
    }
    @media only screen and (max-width: 330px) {
        padding-left: 2px !important;
        padding-right: 2px !important;
        &>.block-collapsible{
            margin-bottom:40px;
            padding-left:10px;
            padding-right:10px;
        }
    }
}
</style>