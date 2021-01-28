import Vue from 'vue';
import App from './App.vue';
import './assets/scss/main.scss';

Vue.config.productionTip = false;

new Vue({
  // eslint-disable-next-line arrow-parens
  render: h => h(App),
}).$mount('#app');
