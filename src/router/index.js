import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main/Home'
import Books from '@/components/books/BooksApp'
import Emails from '@/components/emails/EmailApp'
// import Maps from '@/components/maps/MapsApp'
import About from '@/components/main/About'
import Contact from '@/components/main/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/emails',
      name: 'Emails',
      component: Emails
    },
    // {
    //   path: '/maps',
    //   name: 'Maps',
    //   component: Maps
    // },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
