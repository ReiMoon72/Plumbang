import { createRouter, createWebHistory } from "vue-router";
import Navbar from "../views/Navbar.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Boooking from "../views/Boooking.vue";
import Contact from "../views/Contact.vue";
import Services from "../views/Services.vue";
import How from "../views/How.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
     path: "/",
     name: 'Home',
     component: Home
  }, 
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar
  }, 
  {
    path: '/about',
    name: 'About',
    component: About
  }, 
  {
    path: '/booking',
    name: 'Booking',
    component: Boooking
  },
  {
    path: '/contact',
    name: 'Contact', 
    component: Contact
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/how',
    name: 'How',
    component: How
  }
],
});

export default router;
