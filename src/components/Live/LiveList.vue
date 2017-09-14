<template>
    <div class="content-right">
        <div class="console-child-title">
            <span>直播管理</span>
        </div>
        <div class="content-right-inner">
            <router-link :to="{name:'liveSet'}">直播设置</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>