import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faMagnifyingGlass, faVideo, faPhone, faEllipsisVertical, faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faMagnifyingGlass,faVideo, faPhone, faEllipsisVertical, faPaperclip, faPaperPlane)
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  render: h => h(App),
}).$mount('#app')
