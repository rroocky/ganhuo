import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//完整导入vant-ui
import Vant from 'vant';
import 'vant/lib/index.css';

// markdown 插件
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'


Vue.use(Vant);
Vue.use(mavonEditor)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
