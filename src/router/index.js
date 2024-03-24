import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'userview',
      component: () => import('../views/userboard/UserView.vue'),
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('../views/userboard/UserIndexView.vue')
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/userboard/UserProductsView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/userboard/UserAboutView.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/userboard/UserCartView.vue')
        },
        {
          path: 'checkout/:id',
          name: 'checkout',
          component: () => import('../views/userboard/UserCheckOutView.vue')
        },
        {
          path: 'productdetail/:id',
          name: 'productdetail',
          component: () => import('../views/userboard/UserProductDetailView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/checkoutDone',
      name: 'checkoutDone',
      component: () => import('../views/userboard/UserCheckOutDone.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/dashboard/AdminView.vue'),
      children: [
        {
          path: 'adminproducts',
          name: 'adminproducts',
          component: () => import('../views/dashboard/AdminProductsView.vue'),
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('../views/dashboard/AdminOrderView.vue'),
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: () => import('../views/dashboard/CouponView.vue'),
        }
      ]
    },
  ]
})

export default router
