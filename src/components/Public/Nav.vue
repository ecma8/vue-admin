<template>
	<nav>
		<div class="console-logo">
			<img src="../../assets/img/logo.png" alt="">
			<span>控制台</span>
		</div>
		<div class="row">
			<ul class="console-nav col-lg-6">
				<li>
					<router-link to="/">
						<img src="../../assets/img/index.svg"  style="width: 34px;height: 31px;">
						<p>首页</p>
					</router-link>
				</li>
				<li>
					<router-link to="/cloud">
						<img src="../../assets/img/cloud.svg"  style="width: 45px;height: 31px;">
						<p>云教室</p>
					</router-link>
				</li>
				<li>
					<router-link to="/live">
						<img src="../../assets/img/live.svg"  style="width: 32px;height: 31px;">
						<p>直播服务</p>
					</router-link>
				</li>
				<li>
					<router-link to="/online">
						<img src="../../assets/img/online.svg"  style="width: 34px;height: 31px;">
						<p>网校平台</p>
					</router-link>
				</li>
			</ul>
			<ul class="console-person col-lg-4">
				<li>
					<img src="../../assets/img/head.svg"  style="width: 17px;height: 18px;">
					<span>小云</span>
					<div class="person-rotate">
						&lt;
					</div>
				</li>
				<li>
					<img src="../../assets/img/money.svg"  style="width:17px;height: 18px;">
					<span>账户</span>
				</li>
				<li ref="abc">
					<img src="../../assets/img/message.svg"  style="width: 18px;height: 18px;">
					<span>消息</span>
				</li>
			</ul>
		</div>
	</nav>
</template>
<script>
	export default {
		mounted(){
	        console.log(window.getComputedStyle(this.$refs.abc).height)

		}
	}
</script>