import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/route.ts';

// Create the Vue application instance.
const app = createApp(App);

// Use the router instance in the application and mount it to the DOM.
app.use(router);
app.mount('#app');
