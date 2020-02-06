<template>
    <div>
        <Nav/>
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from './structure/Nav';

export default {
    components:{
        Nav 
    },
    data(){
        return{

        }
    }
}
</script>