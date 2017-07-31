<template>
	<div id="warp">
		<public-nav v-on:child-say="parentFind"></public-nav>
		<router-view :message='data'></router-view>
	</div>
</template>
<script>
import Footer from '../components/Public/Footer.vue'
import Nav from '../components/Public/Nav.vue'
export default {
    components: {
      'public-footer': Footer,
      'public-nav': Nav
    },
	data(){
        return {
            data:''
		}
	},
    methods:{
        parentFind:function(data){
			this.data=data;
		}
    },
    mounted(){
        this.parentFind();
	}
}
</script>
<style>
	@import '../assets/css/index.css';
</style>
