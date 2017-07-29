<style>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
    .loading{
        width: 100%;
        height: 100%;
        background: #fff;
        position: fixed;
        left:0;
        top:0;
    }
    .ivu-spin-show-text{
        position: absolute;
        left: 0;
        right:0;
        top:0;
        bottom:0;
        margin: auto;
        height: 42px;
    }
</style>
<template>
    <div class="loading">
        <Spin>
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>Loading</div>
        </Spin>
    </div>
</template>
<script>
    // 部分样式代码冗长，未作展示
    export default {
        
    }
</script>