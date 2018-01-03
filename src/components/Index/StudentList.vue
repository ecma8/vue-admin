<template>
    <div class="content-right">
        <div class="console-child-title">
            <span>教师管理</span>
        </div>
        <div class="content-right-inner">
            <div class="form-inline console-form-title">
                <div class="form-group pull-left col-lg-1">
                    <select id="" class="form-control" v-model="selected">
                        <option :value="item.value" :selected="item.value==selected" v-for="(item,index) in optionList">
                            {{item.name}}
                        </option>
                    </select>
                </div>
                <div class="form-group col-lg-2">
                    <input type="text" class="form-control" placeholder="" v-model="username">
                </div>
                <div class="form-group col-lg-1">
                    <input type="button" value="查询" class="btn btn-default" id="123" @click="search">
                </div>
                <div class="form-group pull-right col-lg-1">
                    <router-link :to="{name:'studentAdd'}" class="btn btn-info">添加学生</router-link>
                </div>
                <a href="" class="pull-right col-lg-1 console-color">批量导入</a>
                <a href="" class="pull-right col-lg-1 console-color">批量导出</a>
            </div>
            <table class="console-table">
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>昵称</th>
                    <th>性别</th>
                    <th>授课</th>
                    <th>帐号</th>
                    <th>注册/创建日期</th>
                    <th class="col-lg-2">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <router-link :to="{name:'studentEdit',params: { id: 123 }}">编辑</router-link>
                        <a href="" class="console-color-1">修改密码</a>
                        <a href="" class="console-color-2">删除</a>
                    </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>0
                    <td colspan="8">
                        <page :pages=10 :curr=1 v-on:pageIndex="pageIndex"></page>
                        <span>共6页 每页显示五条</span>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
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
                optionList:[
                    {
                        value:'1',
                        name:'123'
                    },
                    {
                        value:'2',
                        name:'456'
                    },
                    {
                        value:'3',
                        name:'789'
                    },
                    {
                        value:'4',
                        name:'sss'
                    },
                    {
                        value:'5',
                        name:'222'
                    }
                ],
                num:10,
                username:this.$route.query.name,
                selected:this.$route.query.type?this.$route.query.type:1
            }
        },
        watch: {
            '$route' (to, from) {
                console.log(to.query);
                console.log(from.query);
            },
            username(val){
                console.log(val)
            }
        },
        components:{
            page:Page
        },
        created(){
            console.log(this.$route.query.name);
            console.log(this.$route.query.type)
        },
        methods:{
            pageIndex(data){
            },
            search(){
                this.$router.push({ path:'/student',query: {type:this.selected,name: this.username}});
            },
            change(){
                this.$router.push({ path:'/student',query: {type:this.selected,name: this.username}});
            }
        }
    }
</script>