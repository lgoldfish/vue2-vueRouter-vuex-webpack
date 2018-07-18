import Vue from 'vue';
import Router from 'vue-router';
import Home from './view/Home.vue';
import About from './view/About.vue';
Vue.use(Router)
export default new Router({
    routes:[
        {path:'/home/:a',component:Home,name:'home'},
        {path:'/about',component:About,name:'about'}
    ]
})
