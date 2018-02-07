<template>
    <div>
        <div>
            <input type="button" value="添加" @click="add()">
        </div>
        <ul>
            <li v-for="(item,index) in itemList">
                <select name="" id="" v-model="item.id">
                    <option :value="key" v-for="(value,key) in optionList">
                        {{value}}
                    </option>
                </select>
                <input v-if="index==itemList.length-1" type="button" value="添加" @click="del(index)">
                <input v-else type="button" value="删除" @click="del(index)">
            </li>
        </ul>
        <ul>
            <li v-for="(item,index) in orderTitle" :class="{'li-color':item.type==orderId}" @click="swichNav(item.type)">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                optionList:{
                    'manager': "业务管理员",
                    'admin': "超级管理员",
                    'user': "业务人员",
                    '010': "服务员"
                },
                itemList:[
                    {
                        id:'admin'
                    }
                ],
                orderId:'',
                orderTitle:[
                    {
                        type:'',
                        name:'全部订单'
                    },
                    {
                        type:'1',
                        name:'待付款'
                    },
                    {
                        type:'2,3',
                        name:'已付款'
                    },
                    {
                        type:'99',
                        name:'已取消'
                    }
                ]
            }
        },
        methods:{
            add(){
                this.itemList.unshift({
                    id:'manager'
                })
            },
            del(data){
                console.log(this.itemList);
                this.itemList.splice(data,1)
            },
            swichNav(id){
                this.orderId=id
            }
        },
        mounted(){

        }
    }
</script>
<style lang="scss">
    .li-color{
        background: #00aaff;
        color: #fff;
    }
    ul{
        overflow: hidden;
        li{
            float: left;

        }
    }
</style>