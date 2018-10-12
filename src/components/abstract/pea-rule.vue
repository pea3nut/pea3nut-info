<script>
import {countClassData,useClassData} from '@/assets/js/function.js';
import Store from '@/config/store.js';
import {peaFocus} from '@/assets/js/pea-focus';

export default {
    computed:{
        peaRuleClassData(){
            if(!this.$options.name)return {};
            else return countClassData(this.$options.name ,this.mobileMode);
        },
        mobileMode(){
            return Store.state.mobileMode;
        },
    },
    mounted(){
        this.$watch('peaRuleClassData' ,function _self(value){
            useClassData(value ,this.$el);
            return _self;
        }.call(this,this.peaRuleClassData));
    },
    directives:{
        peaFocus,
    },
};
</script>