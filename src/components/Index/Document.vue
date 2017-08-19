<template>
    <div class="content-right">
        <div class="console-child-title">
            <span>教师管理</span>
        </div>
        <div class="content-right-inner">
            <div class="form-inline console-form-title">
                <div class="form-group pull-left col-lg-1">
                    <select id="" class="form-control">
                        <option value="1">姓名</option>
                        <option value="2">类型</option>
                        <option value="3">昵称</option>
                        <option value="4">帐号</option>
                        <option value="5">创建日期</option>
                    </select>
                </div>
                <div class="form-group col-lg-2">
                    <input type="text" class="form-control" placeholder="">
                </div>
                <div class="form-group col-lg-1">
                    <input type="button" value="查询" class="btn btn-default" id="123">
                </div>
                <div class="form-group pull-right col-lg-1">

                    <a href="" class="btn btn-info">添加老师</a>
                </div>
            </div>
            <table class="console-table">
                <thead>
                <tr>
                    <th>类型</th>
                    <th>文档名称</th>
                    <th>创建人</th>
                    <th>大小</th>
                    <th>创建日期</th>
                    <th class="col-lg-2">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                        <a href="" class="console-color-1">重命名</a>
                        <a href="" class="console-color-1">下载</a>
                        <a href="" class="console-color-2">删除</a>
                    </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td colspan="8">
                        <page :pages=10 :curr=1 v-on:pageIndex="pageIndex"></page>
                        <span>共6页 每页显示五条</span>
                    </td>
                </tr>
                </tfoot>
            </table>
            <p class="console-message">
                温馨提示：<br>

                1、删除后教师和学生将无法查看和下载；

            </p>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import Page from '../public/Page.vue'
    export default {
        methods:{
            pageIndex(data){
                console.log(data)
            }
        },
        components:{
            page:Page
        }
    }
</script>