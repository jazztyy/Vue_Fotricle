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
        name: 'MessageBox',
        component: () => import('../views/Dashboard/Customer/MessageBox.vue')
      }
    ]
  },
  {
    path: '/Brand',
    name: 'Brand',
    component: () => import('../views/Brand.vue'),
    children: [
      {
        path: 'Edit',
        name: 'Edit',
        component: () => import('../views/Reception/Brand/BrandEdit.vue'),
        children: [
          {
            path: 'Menu',
            name: 'Menu',
            component: () => import('../views/Dashboard/Brand/EditMenu.vue')
          },
          {
            path: 'Data',
            name: 'Data',
            component: () => import('../views/Dashboard/Brand/EditData.vue')
          },
          {
            path: 'Calender',
            name: 'Calender',
            component: () => import('../views/Dashboard/Brand/EditCalender.vue')
          },
          {
            path: 'DataStatistics',
            name: 'DataStatistics',
            component: () => import('../views/Dashboard/Brand/DataStatistics.vue')
          },
          {
            path: 'Feedback',
            name: 'Feedback',
            component: () => import('../views/Dashboard/Brand/Feedback.vue')
          }
        ]
      },
      {
        path: 'Order',
        name: 'Order',
        component: () => import('../views/Reception/Brand/BrandOrder.vue'),
        children: [
          {
            path: 'List',
            name: 'List',
            component: () => import('../views/Reception/Brand/BrandOrderList.vue')
          },
          {
            path: 'Online',
            name: 'Online',
            component: () => import('../views/Reception/Brand/BrandOrderOnline.vue')
          },
          {
            path: 'Site',
            name: 'Site',
            component: () => import('../views/Reception/Brand/BrandOrderSite.vue')
          }
        ]
      },
      {
        path: 'Reception',
        name: 'Reception',
        component: () => import('../views/Reception/Brand/BrandReception.vue')
      }
    ]
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/BrandDetail',
    name: 'BrandDetail',
    component: () => import('../views/BrandDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
