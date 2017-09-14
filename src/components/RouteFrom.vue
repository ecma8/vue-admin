<template>
    <ul>
        <li v-for="item in json">
            <h5>
                {{item.title}}

            </h5>
            <p v-text="item.keywords.length"></p>
            <dl>
                <dd v-for="items in item.keywords">
                    {{items}}
                </dd>
            </dl>
        </li>
    </ul>
</template>
<script>
    export default {
        data(){
            return{
                json:[]
            }
        },
        methods:{
            getJson(){
                this.$http.get('http://localhost:8080/xxx.json').then(response => {
                    this.json=response.data.data;
                    console.log(this.json)
                }, response => {
                    console.log(response)
                });
            }
        },
        mounted(){
            this.getJson()
        }
    }
</script>