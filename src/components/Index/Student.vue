<template>
    <div class="row">
        <div class="console-child-title">
            <span>学生管理</span>
        </div>
        <div class="form-inline console-form-title">
            <div class="form-group pull-left">
                <select name="" id="" class="form-control">
                    <option value="">姓名</option>
                    <option value="">类型</option>
                    <option value="">昵称</option>
                    <option value="">帐号</option>
                    <option value="">创建日期</option>
                </select>
            </div>
            <div class="form-group col-lg-2">
                <input type="text" class="form-control">
            </div>
            <div class="form-group  col-lg-1">
                <input type="button" value="查询" class="btn btn-info" @click='search'>
            </div>
            <div class="form-group pull-right col-lg-1">
                <router-link :to="{ name:'teacherAdd'}" class="btn btn-info">添加老师</router-link>
            </div>
            <a href="" class="pull-right col-lg-1 console-color">批量导入</a>
            <a href="" class="pull-right col-lg-1 console-color">批量导出</a>
        </div>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th class="col-lg-2">姓名</th>
                <th class="col-lg-2">昵称</th>
                <th class="col-lg-1">性别</th>
                <th class="col-lg-1">正式学员</th>
                <th class="col-lg-2">帐号</th>
                <th class="col-lg-2">注册/创建日期</th>
                <th class="col-lg-2">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in list">
                <td v-text="item.name"></td>
                <td v-text="item.nickName"></td>
                <td v-text="item.sex"></td>
                <td v-text="item.status"></td>
                <td v-text="item.accounts"></td>
                <td v-text="item.create_time"></td>
                <td>
                    <router-link :to="{ name: 'studentEdit', params: { id: item.id }}" class="console-color">编辑</router-link>
                    <a @click="alterTeacher(item.name,item.password)" class="console-color">修改密码</a>
                    <a @click="delTeacher(index,item.id)" class="console-color">删除</a>
                </td>
            </tr>
            </tbody>
        </table>
        <input type="button" @click="add" value="增加">
        <input type="button" @click="del" value="增加">
        <div>现在数字为 {{count}}</div>
        <page :pages=page.pages :curr=1 v-on:pageIndex="pageIndex"></page>
        {{page.pages}}
        <router-view></router-view>
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex';
    import Page from '../public/Page.vue'
    export default{
        data(){
            return {
                list:[
                    {
                        name:'张志军',
                        id:'123',
                        nickName:'昵称',
                        sex:'男',
                        status:'否',
                        accounts:'3710000',
                        password:'123',
                        create_time:'2017.06.05 19:23'
                    },
                    {
                        name:'张志军',
                        id:'123',
                        nickName:'昵称',
                        sex:'男',
                        status:'否',
                        accounts:'37102130',
                        password:'456',
                        create_time:'2017.06.05 19:23'
                    }
                ],
                page:{
                    all:111,
                    curr:10,
                    pages:3
                },
                num:10
            }
        },
        watch: {
        },
        computed:{
            ...mapGetters(['count']),
        },
        components:{
            page:Page
        },
        methods:{
            ...mapActions(['add','del']),
            delTeacher(index,id){
                if(confirm('确定要删除么')){
                    this.list.splice(index,1);
                }
            },
            alterTeacher(name,password){
                let alter=prompt('正在修改'+name+'的密码',password);
                if(alter){
                    if(/^\w{6,20}$/.test(alter)){
                        alert('修改成功')
                    }else{
                        alert('修改失败')
                    }
                }
            },
            requestData () {
                // 在这里使用ajax或者fetch将对应页传过去获取数据即可
            },
            pageIndex(data){
            },
            search(){
                this.num+=10;
                console.log(this.num);
                this.page.pages=Math.floor(this.num/10)
            }
        }
    }
</script>