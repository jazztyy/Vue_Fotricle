import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/Customer',
    name: 'Customer',
    component: () => import('../views/Customer.vue'),
    children: [
      {
        path: 'OrderList',
        name: 'OrderList',
        component: () => import('../views/Dashboard/Customer/OrderList.vue')
      },
      {
        path: 'UserData',
        name: 'UserData',
        component: () => import('../views/Dashboard/Customer/UserData.vue')
      },
      {
        path: 'MyFollow',
        name: 'MyFollow',
        component: () => import('../views/Dashboard/Customer/MyFollow.vue')
      },
      {
        path: 'MessageBox',
        name: 'MeassgeBox',
        component: () => import('../views/Dashboard/Customer/MessageBox.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
