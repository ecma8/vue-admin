<template>
    <div>
        <!--<input type="button" @click="add" value="增加">-->
        <!--<input type="button" @click="del" value="增加">-->
        <input type="button" @click="show1()" value="show">
        <input type="button" @click="hide1()" value="hide">
        <input type="text" v-model="aaa" @keydown.enter="alert()" value="hide">
        <div>现在数字为 {{count}}</div>
        {{isLoading}}
        <ul>
            <li v-for="(item,index) in 10" @click="abc($event,index)">
                {{item}}
            </li>
        </ul>
        <button @click="num++">点击显示影藏</button>
        <vifxxx v-if="num%2===0?true:false"></vifxxx>
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex';
    import Page from './public/Page.vue'
    export default{
        data(){
            return {
                aaa:'123',
                num:0
            }
        },
        watch: {

        },

        computed:{
            ...mapGetters(['count','isLoading']),
        },
        components:{
            vifxxx:{
                template:`<p>这是个什么玩意</p>`
            }
        },
        methods:{
            // ...mapActions(['show','hide']),
            numadd(){
                this.num++;
                console.log(this.num)
            },
            show1(){
                this.$store.commit('show');
//                this.show();
            },
            hide1(e){
                this.$store.commit('hide');

//                this.hide();
            },
            alert(){
                alert(this.aaa)
            },
            abc(event,a){
                console.log(event);
                alert(a)
            }
        },
        mounted(){
            this.$http.post('http://open.ecma8.com/index.php?c=index&a=phone')
            .then(response=>{
                console.log(response)
            })
        }
    }
</script>