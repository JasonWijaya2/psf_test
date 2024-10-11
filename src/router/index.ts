import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Booking from '../views/Booking.vue'
import BookingForm from '../views/BookingForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking,
  },
  {
    path: '/booking-form',
    name: 'BookingForm',
    component: BookingForm,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
