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
                                    <h4>{{profile.Profession}}</h4>
                                    <hr>
                                    <p>{{profile.description}}</p>
                                    <hr>
                                    <p>{{profile.location}}</p>
                                    
                                    <button type="button" class="btn btn-outline-info">Edit</button>
                                    <button type="button" class="btn btn-outline-danger">Delete</button>
                                </div>
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
import {fetchUser} from '../api/users.api';
export default {
    data(){
        return {
            user:''
        }
    },

    methods:{
        fetchUser(){
            fetchUser().then(res => {
                this.user = res.data.user;
                console.log(res.data.user.user_profile);
                this.$store.commit('SET_USERS', this.user);
                // this.$store.dispatch("SET_USER", res.user);
            })
            .catch(err => {
                console.log(err);
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