import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus,faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCartPlus)
library.add(faRupeeSign)
Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(BootstrapVue);
new Vue({
  render: h => h(App),
}).$mount('#app')
