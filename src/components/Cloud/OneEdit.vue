<template>
    <div class="content-right">
        <div class="console-child-title">
            <span>教师管理</span>
        </div>
        <div class="content-right-inner">

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
                num:10,
                data:this.$route.query.name,
                select:''

            }
        },
        watch: {
            '$route' (to, from) {
                console.log(to.query);
                console.log(from.query);
            },
            data(val){
                console.log(val)
            }
        },
        components:{
            page:Page
        },
        methods:{
            pageIndex(data){
            },
            search(){
                this.$router.push({ path:'/student',query: {type:this.select,name: this.data}});
//                this.num+=10;
//                this.page.pages=Math.floor(this.num/10)
            },
            change(){

                this.$router.push({ path:'/student',query: {type:this.select,name: this.data}});
            }
        }
    }
</script>