<template>
    <div>
    <ul class="bg">
        <li class="tag1"></li>
        <li class="tag2"></li>
    </ul>
    <div class="hd"></div>
        <p v-for="item in arr">{{item.label}}</p>
    </div>
</template>

<script>
    export default {
        name: "background",
        computed: {
            arr() {
                return this.$store.state.arr
            }
        },
        created: function () {
           this.getData();


        },

        methods: {
            getData () {
                this.$store.dispatch('getData');
            }
        }
    }
</script>

<style scoped>
    .bg{
        padding: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .bg li{
        margin:10px;
        width: 240px;
        height: 160px;
    }
    .tag1{
        background: url(../../public/img/tag1.jpg) no-repeat;
    }
    .tag2{
        background: url(../../public/img/tag2.jpg) no-repeat;
    }
    .hd{
        background: url(../../public/img/header.jpg) no-repeat;
        width: 750px;
        height: 396px;
    }
</style>