import Vue from 'vue'
import Vuex from 'vuex';Vue.use(Vuex);

export default new Vuex.Store({
    state :{
        loadedPageCompName: '',
        mobileMode :false,
    },
    mutations :{
        setLoadedPageCompName(state ,compName){
            state.loadedPageCompName =compName;
        },
        setMobileMode(state ,mobileMode){
            state.mobileMode =mobileMode;
        },
    },
});