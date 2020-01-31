import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import LanderComponent from './components/Landing';
import LanderComponent from './components/Register';

let router = new VueRouter({
    mode: 'history',
    routes:[
        {path:'/', component:LanderComponent, name:'Landing'},
        {path:'/signup', component:RegisterComponent, name:'Register'},
    ]
});

export default router;