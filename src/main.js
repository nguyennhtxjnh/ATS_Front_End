import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
// import moment from 'moment';
import Notificaton from 'vue-notification';
import CKEditor from '@ckeditor/ckeditor5-vue';
import GSignInButton from 'vue-google-signin-button'
import './api_client.js';
import './platform.js';

Vue.use(Vuetify, {
  iconfont: 'mdi'
});
Vue.config.productionTip = false;
Vue.prototype.moment = moment;
Vue.use(Notificaton);
Vue.use(CKEditor);
Vue.use(GSignInButton);


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
