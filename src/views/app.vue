<template>
    <div>
    <ul class="nav">
        <li v-for="item in list">{{item.label}}</li>
    </ul>
    <bg></bg>
        <tab></tab>
        <life></life>
        <div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
    </div>
</template>

<script>
    import bg from '../component/background.vue'
    import tab from '../component/tab.vue'
    import life from '../component/life.vue'
    export default {
        name: "app",
        components: {
            bg,
            tab,
            life
        },
        created () {
          console.log('main  created');
        },
        mounted () {
            console.log('main  mounted');
        },
        data: function () {
            return {
                list: [
                    {
                        label: '首页',
                        value: '1'
                    },
                    {
                        label: '列表',
                        value: '2'
                    },
                    {
                        label: '关于我们',
                        value: '3'
                    }
                ]
            }
        }
    }
</script>

<style>
  ul, li {
      padding:0;
      margin: 0;
      list-style: none;
  }
.nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height:100px;
    line-height: 100px;
}
.nav li {
    padding:0 30px;
}
</style>