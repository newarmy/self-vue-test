import Vue from 'vue';
import app from '../views/app.vue';
import store from '../store/store.js';
import router from '../route/index.js'
import myPlugin from '../plugin/myPlugin.js';
Vue.use(myPlugin);

/***
 * vue中要区分$router 和 $route
 this.$router.push('/user-admin')
 this.$route.params.pathMatch // 'admin'
 *
 * */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(app)
});