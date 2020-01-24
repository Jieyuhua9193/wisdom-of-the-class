import Vue from 'vue'
import App from './App.vue'
// 依赖
import router from './router'
import store from './store'

import 'flex.css'
import ViewUI from 'iview';
import  'animate.css/animate.css'
import 'iview/dist/styles/iview.css';
import 'assets/style/iview-custom.css'

Vue.use(ViewUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
