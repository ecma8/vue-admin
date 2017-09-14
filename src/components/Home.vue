<template>
	<div id="warp">
		<public-nav></public-nav>
		<router-view></router-view>
	</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex';
import Footer from '../components/Public/Footer.vue'
import Nav from '../components/Public/Nav.vue'

export default {
    components: {
        'public-footer': Footer,
        'public-nav': Nav,
    },
	data(){
        return {

		}
	},
    computed:{
        ...mapGetters(['count','isLoading']),
    },
    methods:{
        ...mapActions(['show','hide']),
		get(){
            this.$http.get('/index.php?c=Index&a=phone',{params:{x: 1,y:2}}).then(response => {
                console.log(response);
                this.hide();
            }, response => {

            })
		}
    },
	mounted(){
//	    this.get();
//	    this.show();
	}
}
</script>
<style>
	@import '../assets/css/bootstrap.css';
	@import '../assets/css/public.css';
</style>
