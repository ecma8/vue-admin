<template>
    <div>
        <!--<input type="button" @click="add" value="增加">-->
        <!--<input type="button" @click="del" value="增加">-->
        <input type="button" @click="show1()" value="show">
        <input type="button" @click="hide1()" value="hide">
        <input type="text" v-model="aaa" @keydown.enter="alert()" value="hide">
        <div>现在数字为 {{count}}</div>
        {{isLoading}}
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex';
    import Page from './public/Page.vue'
    export default{
        data(){
            return {
                aaa:'123'
            }
        },
        watch: {

        },

        computed:{
            ...mapGetters(['count','isLoading']),
        },
        components:{

        },
        methods:{
            ...mapActions(['show','hide']),
            show1(){
                this.show();
            },
            hide1(){
                this.hide();
            },
            alert(){
                alert(this.aaa)
            }
        },
        mounted(){
            //this.hide1();
        }
    }
</script>