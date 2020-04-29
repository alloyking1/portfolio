<template>
    <div>
        <section class="section section-lg">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="card shadow">
                            <div class="card-body">
                                <form role="form">
                                    <div class="form-group mb-3">
                                        <div class="input-group input-group-alternative">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                            </div>
                                            <input class="form-control" placeholder="Profession" id="profession" v-model="profile.profession" type="text" name="profession">
                                        </div>
                                    </div>
                                    <div class="form-group mb-3">
                                        <div class="input-group input-group-alternative">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                            </div>
                                            <input class="form-control" placeholder="Location" type="text" name="location" v-model="profile.location">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group input-group-alternative">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                            </div>
                                            <!-- <input class="form-control" placeholder="Password" type="password"> -->
                                            <textarea name="description" id="" cols="50" rows="10" placeholder="description" v-model="profile.description"></textarea>
                                        </div>
                                    </div>
                                    <div class="custom-control custom-control-alternative custom-checkbox">
                                        <input class="custom-control-input" id=" customCheckLogin" type="checkbox">
                                        <label class="custom-control-label" for=" customCheckLogin"><span>Remember me</span></label>
                                    </div>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-primary my-4" @click="create">Create Profile</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    </div>
</template>

<script>
import helperClass from '../helpers/helperClass';
import {createProfile} from '../api/users.api';
export default {
    data(){
        return {
            profile:{
                profession:'',
                description:'',
                location:'',
            }
        }
    },

    methods:{
        create(){
            const check = helperClass.validator(this.profile); //validate
            if(check != "e0"){
                createProfile(this.profile).then(res => {
                    console.log(res);
                    this.$router.push('/dashboard');
                })
                .catch(err => {
                    console.log(err)
                })
            }
            
        }
    }
}
</script>