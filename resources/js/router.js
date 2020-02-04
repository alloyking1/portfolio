import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    // mode: 'history',
    routes:[
        {path:'/',  name:'Landing', component: () =>import('./components/Landing')},
        {path:'/register',  name:'CreateAccount', component: () =>import('./components/CreateAccount')},
        
    ]
});

export default router;