import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


// import the api endpoints
import {fetchUser } from "./api/users.api";

/*
*   store/modules/users.module.js
*/

const state = {
    users: []
}

const getters = {
    loginUser(state) {
        return state.users;
    }
}

const actions = {
    async fetchUsers({ commit }) {
        try {
            const response = await loginUser();
            commit('SET_USERS', response.data);
        } catch (error) {
            // handle the error here
        }    
    }
}

const mutations = {
    SET_USERS(state, data) {
        state.users = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}