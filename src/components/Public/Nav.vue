<template>
	<div class="nav">
		<ul>
			<li v-for='(item,index) in menuList'>
				<router-link :to="{name:item.routerName}">{{item.name}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	import json from '../../menu.json';
    export default {
        data(){
            return {
                menuList:json.menuList,
				data:''
            }
        },
//        methods:{
//			MenuShow:function(data){
//				this.$emit('child-say',data.id);
//    			this.$router.push({ name: data.name })
//			}
//        },
//		watch:{
//            '$route': 'MenuShow'
//		},
//        mounted(){
//        }
    }
</script>