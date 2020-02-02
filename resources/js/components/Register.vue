<template>
    <div>
        <form action="/register" onsubmit="return false">
            <input type="email" name="email" v->
            <input type="password" name="password">
            <input type="password" name="password_confirmed">
            <button>submit</button>
        </form>
    </div>
</template>

<script>

// import { getAllUsers, getUser } from '@/api/users.api';

export default {
    data(){
        return{
            userDetails:{
                email:'',
                password:'',
                password_confirmed:''
            }
        }
    },

    methods:{
        validate = function(){

        }
    }
}
</script>