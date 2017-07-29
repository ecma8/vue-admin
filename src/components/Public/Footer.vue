<template>
	<footer>
		<div class="content-us">
			<ul>
				<a href=""><li>关于我们</li></a>
				<a href=""><li>团队介绍</li></a>
				<a href=""><li>友情链接</li></a>
				<a href=""><li>联系我们</li></a>
				<a href=""><li>赞助我们</li></a>
				<a href=""><li>{{id}}</li></a>
			</ul>
		</div>
		<div class="host">©2016-2017 ecma8.com <a href="">京ICP备00000000号</a></div>
	</footer>
</template>
<script>
	export default{
		data(){
		    return {
		        id:this.number
			}
		} ,
		props: {
            number: {
                type: Number,
                default: 1
            },
        },
		watch: {
//            number (val) {
//				this.id = val;
//				console.log(this.id)
//			}
		},

	}
</script>
<style rel="stylesheet/scss" lang="scss">
@import '../../assets/css/base.scss';
@import '../../assets/css/font-awesome.css';
	footer
		{
		    width: 100%;
		    background: #fff;;
		    margin: 0 auto;
		}
	.share{
	    width: $w1;
	    margin: 0 auto;
	    padding: 40px 0 20px;
	    text-align: center;
	}
	.content-us{
	    width: $w1;
	    padding: 10px 0 30px;
	    line-height: 14px;
	    margin: 0 auto;
	    text-align: center;
	    ul{       
	        li{
	            width: 100px;
	            padding: 0px;
	            text-align: center;
	            display: inline-block;
	            transition: all 1s ease;
	        }
	        a:hover li{
	            color: $col;
	        }
	    }
	}
	.host{
	    width: $w1;
	    margin: 0 auto;
	    height: 50px;
	    line-height: 50px;
	    text-align: center;
	    border-top: 1px solid #ccc;
	    font-size: 12px;
	    a{
	        font-size: 12px;
	    }
	}
</style>
