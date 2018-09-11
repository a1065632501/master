// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Top from './srcc/Top.vue'
import Bottom from './srcc/Bottom.vue'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
new Vue({
  el:'#Top',
  router,
  components: { Top },
  template: '<Top/>'
})
new Vue({
  el:'#Bottom',
  router,
  components: { Bottom },
  template: '<Bottom/>'
})

