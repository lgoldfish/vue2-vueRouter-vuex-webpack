<template>
    <div>
        home 页面
        <ul>
            <li v-for="(item ,i) in list" :key="i"> {{item}}</li>
            <input type="text" v-model="input">
            <p>{{input}}</p>
            <div v-if="input == 1">111111</div>
            <div v-else-if="input == 2"> 2222</div>
            <div v-else="input == 3"> 333</div>
            <input type="checkbox" :checked = 'checked'>
            <button  @click = "handleClick('qwqe')"> button </button>
        </ul>
        <Child ref="child" :fromParent="input" @fromChildData = "fromChildData"> </Child>
        <h1>from child :{{fromChild}}</h1>
    </div>
</template>
<script>
import Child from '../components/Child.vue'
export default {
    components:{Child},
    data(){
        return {
            list:[1,2,3,4,5,6],
            input:'1212',
            checked:true,
            fromChild:''
        }
    },
    mounted(){
        console.log(this.$route)
        setTimeout(()=>{
            this.checked = false
        },2000)
    },
    methods:{
        handleClick(a){
            console.log('点击我',a)
            this.$refs.child.fromParentClick()
        },
        fromChildData(data) {
            console.log('from child',data)
            this.fromChild = data
        }
    }
}
</script>
