<template>
    <div>
        <main>
            <section class="section section-shaped section-lg">
            <div class="shape shape-style-1 bg-gradient-default">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg-md">
                <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="card bg-secondary shadow border-0">
                    <div class="card-header bg-white pb-5">
                        <div class="text-muted text-center mb-3"><small>Sign in with</small></div>
                        <div class="btn-wrapper text-center">
                        <a href="#" class="btn btn-neutral btn-icon">
                            <span class="btn-inner--icon">
                            <!-- <img alt="image" src="../assets/img/icons/common/github.svg"> -->
                            </span>
                            <span class="btn-inner--text">Github</span>
                        </a>
                        <a href="#" class="btn btn-neutral btn-icon">
                            <span class="btn-inner--icon">
                            <!-- <img alt="image" src="../assets/img/icons/common/google.svg"> -->
                            </span>
                            <span class="btn-inner--text">Google</span>
                        </a>
                        </div>
                    </div>
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                        </div>
                        <form>
                        <div class="form-group mb-3">
                            <div class="input-group input-group-alternative">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                            </div>
                            <input class="form-control" name="email" v-model="loginDetails.email" placeholder="Email" type="email">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group input-group-alternative">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                            </div>
                            <input class="form-control" v-model="loginDetails.password" name="password" placeholder="Password" type="password">
                            </div>
                        </div>
                        <div class="custom-control custom-control-alternative custom-checkbox">
                            <input class="custom-control-input" id="customCheckLogin" type="checkbox">
                            <label class="custom-control-label" for="customCheckLogin">
                            <span>Remember me</span>
                            </label>
                        </div>
                        <div class="text-center">
                            <button type="button" @click="validate" class="btn btn-primary my-4">Sign in</button>
                        </div>
                        </form>
                    </div>
                    </div>
                    <div class="row mt-3">
                    <div class="col-6">
                        <a href="#" class="text-light"><small>Forgot password?</small></a>
                    </div>
                    <div class="col-6 text-right">
                        <router-link to="/register"><small>Create new account</small></router-link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </main>
    </div>
</template>

<script>
import {login} from '../api/login.api';
import {loginUser} from '../api/users.api';

export default {
    data(){
        return{
            loginDetails:{
                email:'',
                password:''
            }
        }
    },

    methods:{
        validate(){
             for (var key in this.loginDetails) {   
                if(this.loginDetails[key] === ""){
                    console.log(key+' '+'fiel is required');
                    return false;
                }
            }
            this.loginAction();
        },

        loginAction(){
            login(this.loginDetails).then(res =>{
                console.log(res.data.token)

                // localStorage.setItem('user',JSON.stringify(res.data.user))
                localStorage.setItem('jwt',res.data.token);
                // if (localStorage.getItem('jwt') != null){
                //     this.$emit('loggedIn')
                //     if(this.$route.params.nextUrl != null){
                //         this.$router.push(this.$route.params.nextUrl)
                //     }
                //     else {
                //         if(is_admin== 1){
                //             this.$router.push('admin')
                //         }
                //         else {
                //             this.$router.push('dashboard')
                //         }
                //     }
                // }

                if(localStorage.getItem('jwt')){
                    this.$router.push('/dashboard');
                }
            })
            .catch(err => {
                console.log(err);
            });
        },

        getUser(){
            loginUser().then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script>