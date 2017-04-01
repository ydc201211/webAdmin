import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import VueLazyload from 'vue-lazyload';
import VueVideoPlayer from 'vue-video-player';
// import 'element-ui/lib/theme-default/index.css';    // 默认主题
import '../static/css/theme-green/index.css';       // 浅绿色主题

Vue.use(ElementUI);
Vue.use(VueLazyload);
Vue.use(VueVideoPlayer);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
