<template>
<div>
 <div>about 页面</div>
    <p>来自vuex 中的数据</p>
    <p>{{this.$store.state.count}}</p>
    <button @click="changeStore">改变store</button>
    <button @click="asyncChangeStore">异步改变store</button>
</div>
   
</template>
<script>
export default {
    data(){
        return {
            count:3
        }
    },
    mounted(){

    },
    methods:{
        changeStore(){
            this.count ++ 
            this.$store.commit('addCount',this.count)
        },
        asyncChangeStore(){
            this.count ++ 
            this.$store.dispatch('asyncaAdd',this.count)
        }
    }
}
</script>

