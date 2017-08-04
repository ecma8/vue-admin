<template>
    <div>
        <div @click="to">query参数获取</div>
        <!--<router-link :to="{path:'/console',query:{name:123}}">123</router-link>-->
        {{$route.query.name }}
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                num:10
            }
        },
        methods:{
            to(){
                this.$router.push({ path:'/student',query: {name:123, type: 'object'}});
            }
        }
    }
</script>