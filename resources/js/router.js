import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import LanderComponent from './components/Landing'

// let router = new VueRouter({
//     mode: 'history',
//     routes: [
//       { path: '/', component: HomePage, name: 'home' },
//       { path: '/listing/:listing', component: ListingPage, name: 'listing' },
//       { path: '/saved', component: SavedPage, name: 'saved' },
//       { path: '/login', component: LoginPage, name: 'login' }
//     ],
//     scrollBehavior (to, from, savedPosition) {
//       return { x: 0, y: 0 }
//     }
// });

let router = new VueRouter({
    mode: 'history',
    routes:[
        {path:'/', component:LanderComponent, name:'Landing'},
    ]
});

export default router