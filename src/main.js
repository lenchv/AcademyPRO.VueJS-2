import Vue from 'vue';
import App from './App.vue';
import dbService from './services/dbService';

dbService.init();

new Vue({
  el: '#app',
  render: h => h(App)
});
