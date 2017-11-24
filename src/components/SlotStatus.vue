<template>
    <alert :type="'error'">
        123
    </alert>
</template>
<script>
    export default {
        components:{
            alert:{
                template:`<div :class="alertClass">
                                <slot>Default</slot>
                          </div>`,
                props:['type'],
                computed:{
                    alertClass(){
                        return {
                            'alert-success':this.type==='success',
                            'alert-warning':this.type==='warning',
                            'alert-error':this.type==='error'
                        }
                    }
                }
            },
        }
    }
</script>
<style>
    .alert-success{
        color: #00aaff;
        font-size: 60px;
    }
    .alert-warning{
        color: #f0ad4e;
        font-size: 60px;
    }
    .alert-error{
        color: #f00;
        font-size: 60px;
    }
</style>