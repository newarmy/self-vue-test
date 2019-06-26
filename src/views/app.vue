<template>
    <div>
        <ul class="nav">
            <router-link v-for="(item, index) in list" :to="item.path" tag="li">{{item.label}}</router-link>
        </ul>
        <transition name="bounce">
        <router-view></router-view>
        <router-view name="a"></router-view>
        <router-view name="b"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "app",
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
                        value: '1',
                        path: '/'
                    },
                    {
                        label: '列表',
                        value: '2',
                        path: '/tab'
                    },
                    {
                        label: 'vue插件',
                        path: '/plugin'
                    },
                    {
                        label: '动态路由匹配1',
                        path: '/dynamicPath/0'
                    },
                    {
                        label: '动态路由匹配2',
                        path: '/dynamicPath/1'
                    },
                    {
                        label: '命名视图',
                        path: '/namedView'
                    },
                    {
                        label: '测试404',
                        path: '/test404'
                    },
                    {
                        label: '路由组件传参',
                        path: '/routeToParams'
                    },
                    {
                        label: '数据获取',
                        path: '/getData'
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
    cursor: pointer;
}
  .router-link-exact-active{
      color: red;
  }
</style>