import { createRouter, createWebHistory } from 'vue-router';
import home from '../pages/home.vue';

// Define the routes for the application.
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: home
  }
];

// Create the router instance and pass the `routes` option.
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Export the router instance to be used in the main application.
export default router;