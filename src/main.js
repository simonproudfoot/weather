import Vue from 'vue'
import App from './App.vue'

// Import Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios) // Use in all components 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
