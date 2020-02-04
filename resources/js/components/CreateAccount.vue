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
                            <div class="text-muted text-center mb-3"><small>Sign up with</small></div>
                            <div class="text-center">
                            <a href="#" class="btn btn-neutral btn-icon mr-4">
                                <span class="btn-inner--icon">
                                <!-- <img src="../assets/img/icons/common/github.svg" alt="image"> -->
                                </span>
                                <span class="btn-inner--text">Github</span>
                            </a>
                            <a href="#" class="btn btn-neutral btn-icon">
                                <span class="btn-inner--icon">
                                <!-- <img src="../assets/img/icons/common/google.svg" alt="image"> -->
                                </span>
                                <span class="btn-inner--text">Google</span>
                            </a>
                            </div>
                        </div>
                        <div class="card-body px-lg-5 py-lg-5">
                            <div class="text-center text-muted mb-4">
                            <small>Or sign up with credentials</small>
                            </div>
                            <form>
                            <div class="form-group">
                                <div class="input-group input-group-alternative mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="ni ni-hat-3"></i></span>
                                </div>
                                <input class="form-control" v-model="userDetails.name" id="name" name="name" placeholder="Name" type="text">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-alternative mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                </div>
                                <input class="form-control" v-model="userDetails.email" id="email" name="email" placeholder="Email" type="email">
                                </div>
                            </div>
                            <!-- <div class="form-group">
                                <div class="input-group input-group-alternative">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                </div>
                                <input class="form-control" v-model="userDetails.password" id="password" name="password" placeholder="Password" type="password">
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="input-group input-group-alternative">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                </div>
                                <input class="form-control" v-model="userDetails.password-confirmed" id="password-confirmed" name="password-confirmed" placeholder="Password Confirmed" type="password">
                                </div>
                            </div> -->


                            <div class="text-muted font-italic"><small>password strength: <span class="text-success font-weight-700">strong</span></small></div>
                            <div class="row my-4">
                                <div class="col-12">
                                <div class="custom-control custom-control-alternative custom-checkbox">
                                    <input class="custom-control-input" id="customCheckRegister" type="checkbox">
                                    <label class="custom-control-label" for="customCheckRegister"><span>I agree with the <a href="#">Privacy Policy</a></span></label>
                                </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="button" @click="validate" class="btn btn-primary mt-4">Create account</button>
                            </div>
                            </form>
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

// import { getAllUsers, getUser } from '@/api/users.api';

export default {
    data(){
        return{
            userDetails:{
                name:'',
                email:'',
                // password:'',
                // password_confirmed:''
            }
        }
    },

    methods:{
        validate(){

            for (var key in this.userDetails) {   
                if(this.userDetails[key] === ""){
                    console.log(key+' '+'fiel is required');
                    return false;
                }
            }

            this.register();
        },

        register(){
            console.log('this also works');
        }
    }
}
</script>