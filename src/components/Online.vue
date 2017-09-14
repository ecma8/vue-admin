<template>
    <div class='content'>
        <ul class='content-left-nav'>
            <li v-for='item in json'>
                <h5>
                    <span>{{item.title}}</span>
                </h5>
                <dl>
                    <dd v-for='items in item.list'>
                        <router-link :to="{name:items.router}">{{items.name}}</router-link>
                    </dd>
                </dl>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    import json from '../menu.json';
    export default {
        components: {
        },
        data(){
            return {
                id:0,
                json:json.menuList[3].list
            }
        },
        methods:{
        },
        mounted(){
            var that=this;
            this.$watch('message', function(newVal, oldVal){
                that.id=newVal;
            });
        },
        props:['message']
    }
</script>
<style scoped="scoped">
    .router-link-active{
        background: #fff;
        color: #4C99FF;
    }
</style>