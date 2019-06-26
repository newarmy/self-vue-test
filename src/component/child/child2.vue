<template>
    <ul>
        <li v-for="item in arr[index]" style="color:red">{{item}}</li>
    </ul>
</template>

<script>
    export default {
        name: "child2",
        data: function () {
            return {
                arr: [
                    ['1', '2', '3'],
                    ['4', '5', '6']
                ],
                index: 0
            }
        },
        created() {
            console.log('-----child2-------');
            console.dir(this.$route);
            this.index = Number(this.$route.query.index) || 0;
        },
        watch: {
            //复用组件时，想对路由参数的变化作出响应的话，方法1
            // 你可以简单地 watch (监测变化) $route 对象：
            "$route"(to, from) {
                this.index = to.query.index || 0;
            }
        },

    }
</script>

<style scoped>

</style>