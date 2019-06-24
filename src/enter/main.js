import Vue from 'vue';
import app from '../views/app.vue';
import store from '../store/store.js';
import myPlugin from '../plugin/myPlugin.js';
Vue.use(myPlugin);
new Vue({
    el: '#app',
    store,
    render: h => h(app)
});