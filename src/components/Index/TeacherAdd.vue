<template>
    <div class="form-horizontal">
        <div class="form-group">
            <label class="col-lg-1 control-label">教师头像:</label>
            <div class="col-lg-2">
                <div class="upload-head">
                    <img :src="headImg" alt="" class="img-circle" style="width: 100px;height: 100px;background: #ccc">
                    <input type="file" @change="upload">
                </div>
                <input type="hidden" v-model="form.head" >
            </div>
            <p class="col-lg-5 console-line-3 console-message">
                这是错误信息
            </p>
        </div>
        <div class="form-group">
            <label class="col-lg-1 control-label">*教师姓名:</label>
            <div class="col-lg-4" :class="{'has-error':!status.name}">
                <input type="text"  class="form-control" placeholder="" v-model="form.name" @input="check({name:'name',value:form.name, pattern:/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]){2,12}$/})" maxlength="12" minlength="2">
            </div>
            <p class="col-lg-5 console-line-2 console-message">
                2-12位的汉字或英文
            </p>
        </div>
        <div class="form-group">
            <label class="col-lg-1 control-label">教师昵称:</label>
            <div class="col-lg-4" :class="{'has-error':!status.nickName}">
                <input type="text" class="form-control" placeholder="" v-model="form.nickName" @input="check({name:'nickName', value:form.nickName,pattern:/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]){2,12}$/})" maxlength="12" minlength="2">
            </div>
            <p class="col-lg-5 console-line-2 console-message">
                2-12位的汉字或英文，不填写默认为姓名
            </p>
        </div>
        <div class="form-group">
            <label class="col-lg-1 control-label">*登录帐号:</label>
            <div class="col-lg-4" :class="{'has-error':!status.accounts}">
                <input type="text" class="form-control" placeholder=""  v-model="form.accounts" @input="check({name:'accounts', value:form.accounts,pattern:/^\w{6,20}$/})" maxlength="20" minlength="6">
            </div>
            <p class="col-lg-5 console-line-2 console-message">
                6-20位的字母或数字的组合，推荐使用手机号或邮箱
            </p>
        </div>
        <div class="form-group">
            <label class="col-lg-1 control-label">*登录密码:</label>
            <div class="col-lg-4" :class="{'has-error':!status.password}">
                <input type="text" class="form-control" placeholder="" v-model="form.password" @input="check({name:'password', value:form.password,pattern:/^\w{6,20}$/})" maxlength="20" minlength="6">
            </div>
            <p class="col-lg-5 console-line-2 console-message">
                6-20位的字母或数字的组合，默认：123456
            </p>
        </div>
        <div class="form-group">
            <label class="col-lg-1 control-label">个性签名:</label>
            <div class="col-lg-4">
                <input type="text" class="form-control" placeholder="">
            </div>
        </div>
        <div class="form-group">
            <label class="col-lg-1 control-label">毕业院校:</label>
            <div class="col-lg-4">
                <input type="text" class="form-control" placeholder="">
            </div>
        </div>
        <div class="form-group">
            <label class="col-lg-1 control-label">教龄:</label>
            <div class="col-lg-1" :class="{'has-error':!status.year}">
                <input type="text" class="form-control" placeholder="" v-model="form.year" @input="check({name:'year', value:form.year,pattern:/^\d{1,2}$/})" maxlength="2" minlength="1">
            </div>
            <p class="col-lg-5 console-line-2">
                年
            </p>
        </div>
        <div class="form-group">
            <label class="col-lg-1 control-label">*选择性别:</label>
            <div class="col-lg-4">
                <label class="radio-inline">
                    <input type="radio" name="sex" v-model="form.sex" value="0"> 男
                </label>
                <label class="radio-inline">
                    <input type="radio" name="sex" v-model="form.sex" value="1"> 女
                </label>
            </div>
        </div>
        <div class="form-group">
            <label class="col-lg-1 control-label">*是否授课:</label>
            <div class="col-lg-4">
                <label class="radio-inline">
                    <input type="radio" name="status" v-model="form.status" value="1"> 是
                </label>
                <label class="radio-inline">
                    <input type="radio" name="status" v-model="form.status" value="0"> 否
                </label>
            </div>
        </div>
        <div class="form-group">
            <label class="col-lg-1 control-label">教师介绍:</label>
            <div class="col-lg-4">
                <textarea name="" v-model="form.desc" class="form-control" cols="30" rows="10" maxlength="5000"></textarea>
            </div>
            <p class="col-lg-5 console-line-2">
                {{form.desc.length}}/5000个字符
            </p>
        </div>
        <div class="form-group">
            <label class="col-lg-1 control-label"></label>
            <div class="col-lg-4">
                <input type="submit" value="提交" class="btn btn-info" @click="submit()">
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                //表单值记录
                headImg:'',
                form:{
                    head:'',
                    name:'',
                    nickName:'',
                    year:'',
                    sex:0,
                    status:1,
                    desc:0,
                    accounts:'',
                    password:'123456'
                },
                submitStatus:false,
                //状态记录
                status:{
                    name:false,
                    nickName:false,
                    accounts:false,
                    password:true,
                    year:false
                }
            }
        },
        watch:{
            'form.name'(val){
                this.form.nickName=val
            }
        },
        methods:{
            check(data){
                if(data.pattern.test(data.value)){

                    this.status[data.name]=true;
                    return true;
                }
                else{
                    this.status[data.name]=false;
                    return false
                }
            },
            upload(e){
                console.log(e);
                let file = e.target.files[0];
                let form = new FormData();
                form.append('file',file,file.name);
                let config = {
                    headers:{'Content-Type':'multipart/form-data'}
                };  //添加请求头
                this.$http.post('http://127.0.0.1:8081/uploading',form,config)
                .then(response=>{
                    console.log(response.data);
                    let img=response.data.file[0].path.replace(/\\/g,"/");
                    this.form.head=img;
                    this.headImg=IMG_ROOT+img
                })
            },
            submit(){
                for(let i in this.status){
                    if(this.status[i]===false){
                        this.submitStatus=false;
                        break;
                    }else{
                        this.submitStatus=true;
                        continue;
                    }
                }
                if(this.submitStatus)
                {
                    alert(1)
                }
            }
        }
    }
</script>