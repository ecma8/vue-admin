<template>
<div class="main">
	<ul>
      <li class="active ">
        <a href="javascript:void(0);" data-order_state="" @click="swichNav('')">全部订单</a>
      </li>
      <li>
        <a href="javascript:void(0);" data-order_state="1" @click="swichNav('1')">待付款</a>
      </li>
      <li>
        <a href="javascript:void(0);" data-order_state="2,3" @click="swichNav('2,3')">已付款</a>
      </li>
      <li>
        <a href="javascript:void(0);" data-order_state="99"  @click="swichNav('99')">已取消</a>
      </li>
    </ul>
</div>
</template>

<script>
import myarea from 'vue-myarea'
import Footer from './Footer'
export default {
  name: 'OrderList',
  data () {
    return {

    }
  },
  mounted(){
    //this.id = this.$route.query.id;
    //this.users = this.$store.state.Users;
    this.getOrderList('');
  },
  created(){
	 //console.log(this.wx)
  },
  methods:{
  	haha:function(d){
  		//console.log(d);
  	},
    swichNav:function (id) {
		this.getOrderList(id)
    },
    getOrderList:function(id){
      let _this=this;
      let url='http://www.localhost.com/svn/watchShop/Api/Order/getOrderList';
      let form=new FormData();
      form.append('order_state',id);
      _this.axios.post(url,form)
        .then(function(response){
          var data = response.data;
          console.log(data);
          if(data.error==0){
            _this.taskmark=data.data.taskMark;
            _this.taskinfo=data.data.taskInfo;
            _this.marklists=data.data.taskMark.list;
          }
        })
        .catch(function(error){
          console.log(error);
        });
    }

  },
  components:{
  	myarea,
  	Footer
  }
}
</script>
<style>
	.watch-list{
		margin-top: 0;
		margin-bottom: 15px;
	}
</style>
