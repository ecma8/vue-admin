<template>
    <div class="row">
        <div class="console-child-title">
            <span>教师管理</span>
        </div>
        <div class="form-inline console-form-title">
            <div class="form-group pull-left">
                <select name="" id="" class="form-control">
                    <option value="">姓名</option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
            <div class="form-group col-lg-1">
                <select name="" id="" class="form-control">
                    <option value="">姓名</option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
            <div class="form-group  col-lg-1">
                <input type="button" value="查询" class="btn btn-info">
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
                    <th class="col-lg-1">授课</th>
                    <th class="col-lg-2">帐号</th>
                    <th class="col-lg-2">创建日期</th>
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
                        <router-link :to="{ name: 'teacherEdit', params: { id: item.id }}" class="console-color">编辑</router-link>
                        <a @click="alterTeacher(item.name,item.password)" class="console-color">修改密码</a>
                        <a @click="delTeacher(index,item.id)" class="console-color">删除</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <input type="button" @click="add" value="增加">
        <input type="button" @click="del" value="增加">
        <div>现在数字为 {{count}}</div>
        <div class="page">
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex';

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
                ]
            }
        },
        computed:mapGetters([
            'count'
        ]),
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
        }
    }
</script>