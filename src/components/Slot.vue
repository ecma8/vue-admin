<template>
    <div>
        <child>
            <h1 slot="header">这里可能是一个页面标题</h1>
            <p>主要内容的一个段落。</p>
            <p>另一个主要段落。</p>
            <p slot="footer">这里有一些联系信息</p>
        </child>
        <rend :v="nnum">
            <div slot="slot2">hahahhah</div>
            <div slot="slot1">ggggggggggggg</div>
        </rend>
        <h level="3">123123123123</h>
        <children>
            <p slot="two">asdsadsad</p>
            <p slot="one">asdsadsad</p>
            <h1 slot="one">asdsadsad</h1>
        </children>
    </div>
</template>
<script>
    export  default {
        data(){
            return{
                nnum:1
            }
        },
        components:{
            child:{
            template:`  <div class="container">
                            <header>
                                <slot name="header"></slot>
                            </header>
                            <main>
                                <slot></slot>
                            </main>
                            <footer>
                                <slot name="footer"></slot>
                            </footer>
                        </div>`
            },
            children:{
                template: `<div>
                    <h1>内容被分发且重新组合</h1>
                        <slot>默认分发处</slot>
                        <slot name="two"></slot>
                        <slot name="one"></slot>
                    </div>`
            },
            rend:{
                render:function(createElement){
                    if(this.v==12){
                        return createElement('div',
                            this.ar.map(function(item){
                                return createElement('li',
                                    {
                                        domProps:{
                                            innerHTML:item
                                        }
                                    }
                                )
                            })
                        )
                    }else{
                        return createElement('div',[this.$slots.slot1,this.$slots.slot2])
                    }
                },
                props:{
                    v:{
                        type:Number,
                        default:0
                    },
                    n:{
                        default:'hello'
                    },
                    ar:{
                        type:Array,
                        default:function(){ return [1,23,4,5,6,55,65]}
                    }

                }
            },
            h:{
                render:function(createElement) {
                    return createElement(
                        'h' + this.level,   // tag name 标签名称
                        this.$slots.default // 子组件中的阵列
                    )
                },
                props: {
                    level: {
                        required: true
                    }
                }
            }
        },
        mounted(){
        }
    }
</script>
