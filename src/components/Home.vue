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
<style rel="stylesheet/scss" lang="scss">
	@import '../assets/css/public.css';
	@import '../assets/css/base.scss';
	@import '../assets/css/header.scss';
	@import '../assets/css/public_class.scss';
</style>
