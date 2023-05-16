import { createApp } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useModal } from 'usemodal-vue3';
import App from './App.vue';

library.add(fas, far, fab);
createApp(App)
  .use(useModal)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');