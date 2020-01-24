import Layout from '@/layout/index.vue';

import User from '@/views/user/views/index.vue';
import Overview from '@/views/overview/views/index.vue';

import UserRouter from '@/views/user/router';

const frameIn = [
  {
    path: '/',
    redirect: '/user/login',
    component: Layout,
    children: [
      {
        path: 'overview',
        name: 'overview',
        meta: {
          auth: true
        },
        component: Overview
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    redirect: '/user/login',
    meta: {
      auth: false
    },
    component: User,
    children: UserRouter
  }
];

export default [...frameIn]