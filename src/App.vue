<template>
    <div id='app'>
        <router-view></router-view>
        <loading v-if="isLoading"></loading>
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    import Loading from './components/Public/Loading.vue'
    export default{
        data(){
            return {

            }
        },
        computed: {
            ...mapGetters(['isLoading'])
        },
        components:{
            loading:Loading
        }
    }
</script>
