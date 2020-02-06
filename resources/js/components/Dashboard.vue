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
                    <!-- <div class="col-md-2"></div>
                    <div class="col-md-10">
                        <div class="card shadow">
                            <div class="card-body">
                                <h4>Welcome {{this.user.name}}</h4>
                    
                                <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
            
                                <router-link class="btn btn-icon btn-3 btn-primary" type="button" to="/create/profile">
                                    <span class="btn-inner--icon"><i class="ni ni-bag-17"></i></span>

                                    <span class="btn-inner--text">Create Prfile</span>

                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2"></div> -->
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
            user:{}
        }
    },

    methods:{
        fetchUser(){
            fetchUser().then(res => {
                this.user = res.data.user;
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