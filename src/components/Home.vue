<template>
	<div id="warp">
		<public-nav></public-nav>
		<router-view></router-view>
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
    }
}
</script>
<style>
	@import '../assets/css/index.css';
</style>
