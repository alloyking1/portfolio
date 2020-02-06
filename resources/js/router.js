import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    // mode: 'history',
    routes:[
        {path:'/',  name:'Landing', component: () =>import('./components/Landing')},
        {path:'/register',  name:'CreateAccount', component: () =>import('./components/CreateAccount')},
        {path:'/login',  name:'LoginAccount', component: () =>import('./components/LoginAccount')},
        {path:'/dashboard',  name:'Dashboard', component: () =>import('./components/Dashboard')},
        
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)){
        if(localStorage.getItem('jwt') === null){
            // next({
            //     path:'/login',
            //     params:{nextUrl: to.fullPath}
            // });
            alert('not logged in');
        }else{
            next();
        }
        next();
    }
    // next();
})


export default router;

    // router.beforeEach((to, from, next) => {
    //     if(to.matched.some(record => record.meta.requiresAuth)) {
    //     if (localStorage.getItem('jwt') == null) {
    //         next({
    //         path: '/login',
    //         params: { nextUrl: to.fullPath }
    //         })
    //     } else {
    //         let user = JSON.parse(localStorage.getItem('user'))
    //         if(to.matched.some(record => record.meta.is_admin)) {
    //         if(user.is_admin == 1){
    //             next()
    //         }
    //         else{
    //             next({ name: 'userboard'})
    //         }
    //         }
    //         else if(to.matched.some(record => record.meta.is_user)) {
    //         if(user.is_admin == 0){
    //             next()
    //         }
    //         else{
    //             next({ name: 'admin'})
    //         }
    //         }
    //         next()
    //     }
    //     } else {
    //     next() 
    //     }
    // })


