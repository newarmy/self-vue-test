import VueRouter from 'vue-router'
import Vue from "vue"
import tab from '../component/tab.vue'
import background from '../component/background.vue'
import plugin from '../component/plugin.vue'
import dynamicPath from '../component/dynamicPath.vue'
import noFound from '../component/noFound.vue'
import child1 from '../component/child/child1.vue'
import child2 from '../component/child/child2.vue'
import First from '../component/child/first.vue'
import Second from '../component/child/second.vue'
import Third from '../component/child/third.vue'
import RouteParams from  '../component/routeToParams.vue'
import RouteChild from '../component/child/routeParamChild.vue'
import getData from  '../component/child/getData.vue'
import after from '../component/child/after.vue'
import before from '../component/child/before.vue'
Vue.use(VueRouter);

function dynamicPropsFn (route) {
    const now = new Date()
    return {
        name: (now.getFullYear() + parseInt(route.params.years)) + '!'
    }
}


/***
 * 匹配优先级
 有时候，同一个路径可以匹配多个路由，
 此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。
 *
 * **/
const routes = [
    {
        path: '/',
        component: background
    },
    {
        path: '/tab',
        component: tab
    },
    {
        path: '/plugin',
        component: plugin
    },
    {
        path: '/namedView',
        /**
         * 一个视图使用一个组件渲染，因此对于同个路由，
         * 多个视图就需要多个组件。确保正确使用 components 配置 (带上 s)：
         * */
        components: {
            default: First,
            a: Second,
            b: Third
        }
    },
    {
        path: '/getData',
        component: getData,

        children: [
            {
                path:'routeAfter',
                component: after,
                meta: {
                    test: 'default',
                }
            },
            {
                path:'routeBefore',
                component: before,
                meta: {
                    test: 'second',
                }
            }
        ]
    },
    {
        path: '/dynamicPath/:id',
        name: 'dynamic',
        component: dynamicPath,
        //路由独享的守卫
        beforeEnter: (to, from, next) => {
            console.log('----------beforeEnter--------------');
            console.log(to.path)
            console.log('----------beforeEnter--------------');
            next();
        },
        children: [
            {
                //默认加载的子组件
                path:'',
                component: child1,
                meta: {
                    test: 'default',
                }
            },
            {
                path:'letter',
                component: child1,
                meta: {
                    test: 'default',
                }
            },
            {
                path:'num',
                component: child2,
                meta: {
                    test: 'second',
                }
            }
        ]
    },
    //
    {
        path: '/routeToParams',
        component: RouteParams
    },
    {
        path: '/noParam',
        component: RouteChild
    }, // No props, no nothing
    //布尔模式
    // 如果 props 被设置为 true，route.params 将会被设置为组件属性。
    {
        path: '/hello/:name',
        component: RouteChild,
        props: true
    }, // Pass route.params to props
    //对象模式
    {
        path: '/static',
        component: RouteChild,
        props: { name: 'world' }
     }, // static values

    //函数模式
    {
        path: '/dynamic/:years',
        component: RouteChild,
        props: dynamicPropsFn
    }, // custom logic for mapping between route and props
    {
        path: '/attrs',
        component: RouteChild,
        props: { name: 'attrs' }
     },

    //404
    {
        path: '*',
        component: noFound
    }
];

const router = new VueRouter({
    routes
});
/**
 * to: Route: 即将要进入的目标 路由对象

 from: Route: 当前导航正要离开的路由

 next: Function: 一定要调用该方法来 resolve 这个钩子。
 执行效果依赖 next 方法的调用参数。

 next(): 进行管道中的下一个钩子。如果全部钩子执行完了，
 则导航的状态就是 confirmed (确认的)。

 next(false): 中断当前的导航。如果浏览器的 URL 改变了
 (可能是用户手动或者浏览器后退按钮)，
 那么 URL 地址会重置到 from 路由对应的地址。

 next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，
 然后进行一个新的导航。你可以向 next 传递任意位置对象，
 且允许设置诸如 replace: true、name: 'home'
 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。

 next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，
 则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
 *
 * **/
//全局前置守卫
router.beforeEach((to, from, next) => {
    console.log('----------beforeEach--------------');
    console.log(to.path)
    console.log('----------beforeEach--------------');
    next();
});
//全局后置钩子
router.afterEach((to, from) => {
    console.log('----------afterEach--------------');
    console.log(to.path)
    console.log('----------afterEach--------------');
});
export  default  router;


