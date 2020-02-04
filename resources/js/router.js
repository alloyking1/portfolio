import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import LanderComponent from './components/Landing';
import CreateAccount from './components/CreateAccount';

let router = new VueRouter({
    mode: 'history',
    routes:[
        {path:'/',  name:'Landing', component:LanderComponent},
        {path:'/register',  name:'CreateAccount', component:CreateAccount},
        
    ]
});

export default router;