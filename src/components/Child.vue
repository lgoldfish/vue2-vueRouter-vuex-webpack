<template>
    <div>
        <h1>我是child组件</h1>
        <p>{{fromParent}}</p>
        <button @click = "sendToParent" > 点击我</button>
    </div>
</template>
<script>
export default {
    props:['fromParent'],
    data(){
        return {
            count :0
        }
    },
    mounted(){
        this.$nextTick(function () {
        this.$on('childMethod', function () {
          console.log('监听成功')
        })
      })
    },
    methods:{
        sendToParent(){
            this.count ++ 
            this.$emit('fromChildData',this.count)
        },
        fromParentClick(){
            console.log('fromParentClick')
        }
    }
}
</script>

