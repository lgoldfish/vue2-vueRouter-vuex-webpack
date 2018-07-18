<template>
    <div>
        <h1>this is App page</h1>
        <router-link  class="router-link" :to="{name:'home',params:{a:1},query:{b:2}}">home</router-link>
        <router-link class="router-link" to="/about">about</router-link>
        <br>
        <router-view></router-view>
    </div>

</template>
<script>
export default {
    
}
</script>
<style scoped>
 .router-link {
    margin:30px;
}
</style>


