import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        count:0,
        num:10
    },
    mutations:{
        addCount(state,payload){
            console.log('1230',payload)
            state.count = payload
        }
    },
    actions:{
        asyncaAdd(context,payload){
            console.log('context',context,payload)
            setTimeout(()=>{
                context.commit('addCount',payload)
            },1000)
        }
    }
})