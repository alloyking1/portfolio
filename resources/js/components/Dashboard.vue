<template>
    <div>
        <main>

            <section class="section section-lg">
                <div class="container padding">
                    <div class="row row-grid align-items-center">
                        <h4>Welcome {{this.user.name}}</h4>
                        
                        <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>

                        <router-link class="btn btn-icon btn-3 btn-primary" type="button" to="/create/profile">
                            <span class="btn-inner--icon"><i class="ni ni-bag-17"></i></span>
                            <span class="btn-inner--text">Create Prfile</span>
                        </router-link>
                    </div>

                    <div v-for="profile in user.user_profile">
                        <div class="row mt-4">
                            <div class="col-md-4 mt-4">
                                <div class="card shadow">
                                    <div class="card-body">
                                        
                                        <span class="badge badge-pill badge-primary">Profession</span>
                                        <h4>{{profile.Profession}}</h4>
                                        <hr>
                                        <span class="badge badge-pill badge-info">Description</span>
                                        <p>{{profile.description}}</p>
                                        <hr>
                                        <p>{{profile.location}}</p>
                                        
                                        <button class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal" @click="fetEditProfile(profile.id)">Edit</button>
                                        <button type="button" class="btn btn-outline-danger" @click="deleteProfile(profile.id)">Delete</button>
                                    </div>
                                </div>
                            </div>
            
                        </div>
                    </div>

                </div>
            </section>

            <section>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- ..form starts here -->
                        <form>
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

                                </form>
                        </form>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            
        </main>
    </div>
</template>

<script>
import {fetchUser, deleteProfile, getEditProfile} from '../api/users.api';
export default {
    data(){
        return {
            user:'',
            profileId:'',

            profile:{
                profession:'',
                description:'',
                location:'',
            }
        }
    },

    methods:{
        fetchUser(){
            fetchUser().then(res => {
                this.user = res.data.user;
                // this.$store.commit('SET_USERS', this.user);
                // this.$store.dispatch("SET_USER", res.user);
            })
            .catch(err => {
                console.log(err);
            })
        },

        deleteProfile(profileId){
            if(confirm('Are you sure you want to delete this?')){
                deleteProfile(profileId).then(res => {
                    this.fetchUser(); //fetch updated profiles
                })
                .catch(err => {
                    console.log(err);
                })
            }
        },

        fetEditProfile(profileId){
            getEditProfile(profileId)
            .then(res => {
                console.log(res.data)
            })
        }
    },

    mounted(){
        this.fetchUser();
    }

}
</script>
<style scoped>
    .padding{
        padding-top: 15%;
        padding-bottom: 20%;
    }
</style>