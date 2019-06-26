<template>
    <div>
        <div style="padding:10px;">
            <router-link :to="'/dynamicPath/'+index+'/letter?index='+index">字符</router-link>
            <router-link :to="'/dynamicPath/'+index+'/num?index='+index">数字</router-link>
        </div>
        <router-view></router-view>
        <h3 v-on:click="goto">编程式的导航push</h3>
        <h3 v-on:click="goback">编程式的导航back</h3>
        <h3 v-on:click="nameRoute">命名路由</h3>
    </div>
</template>

<script>
    export default {
        name: "dynamic-path",
        data: function () {
            return {
                index: 0,

            }
        },
        methods: {
          goto() {
              this.$router.push({
                  path: '/dynamicPath/0/letter',
                  query: {index: 1}
              })
          },
            goback() {
              this.$router.go(-1);
            },
            nameRoute() {
              this.$router.push({
                  name: 'dynamic',
                  params: {
                      id: 1
                  }
              });
            }
        },
        created() {
            this.index = Number(this.$route.params.id);
        },
        // watch: {
        //     //复用组件时，想对路由参数的变化作出响应的话，方法1
        //     // 你可以简单地 watch (监测变化) $route 对象：
        //     "$route"(to, from) {
        //         this.index = to.params.id;
        //     }
        // },
       // 组件内的守卫
        beforeRouteEnter(to, from, next) {
            console.log('----------beforeRouteEnter--------------');
            console.log(to.path)
            console.log('----------beforeRouteEnter--------------');

            if(to.matched.some(item => item.meta.test === "default")) {
                alert("enter default");
            } else if(to.matched.some(item => item.meta.test === "second")) {
                alert('enter second');
            }
            next()
        },
        //复用组件时，想对路由参数的变化作出响应的话，方法2
        // 使用 2.2 中引入的 beforeRouteUpdate 导航守卫：
        beforeRouteUpdate (to, from, next) {
            /*
            * // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
            * */
            console.log('----------beforeRouteUpdate--------------');
            console.log(to.path)
            console.log('----------beforeRouteUpdate--------------');

            if(to.matched.some(item => item.meta.test === "default")) {
                alert("update default");
            } else if(to.matched.some(item => item.meta.test === "second")) {
                alert('update second');
            }
            this.index = to.params.id;
            //一定要调用next（），
            next();
        },
        //这个离开守卫通常用来禁止用户在还未保存修改前突然离开。
        // 该导航可以通过 next(false) 来取消。
        beforeRouteLeave(to, from, next) {
            console.log('----------beforeRouteLeave--------------');
            console.log(to.path)
            console.log('----------beforeRouteLeave--------------');

            const answer = window.confirm('想离开这个组件吗')
            if (answer) {
                next()
            } else {
                next(false)
            }
        }
    }
</script>

<style scoped>
h3{
    cursor: pointer;}
</style>