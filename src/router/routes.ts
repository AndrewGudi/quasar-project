import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: '/',
    children: [
      { path: '/', name: 'top', component: () => import('pages/ShopPage.vue') },
      { path: '/payment', name: 'payment', component: () => import('pages/PaymentPage.vue') },
      { path: '/complete', name: 'ThankYouPage', component: () => import('pages/ThankYouPage.vue') }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
