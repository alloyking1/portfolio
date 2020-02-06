import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


/*
*   store/modules/users.module.js
*/

const state = {
    users: {}
};

const getters = {
    getUser(){
        return state.users;
    }

};

const mutations = {
    SET_USERS(state, data) {
        state.users = data;
    }
};

const actions = {
    // async fetchUsers({ commit }) {
    //     try {
    //         const response = await loginUser();
    //         commit('SET_USERS', response.data);
    //     } catch (error) {
    //         // handle the error here
    //     }    
    // }

    SET_USER(context, user) {
        context.commit("SET_USER", user);
    },
};


export default new Vuex.Store( {
    state,
    getters,
    mutations,
    actions
})