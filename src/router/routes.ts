import Layout from '@/layout/index.vue'

import User from '@/views/user/views/index.vue'

import UserRouter from '@/views/user/router'

const frameIn = [
 {
  path: '/',
  // redirect: { name: 'index' },
  component: Layout,
  children: []
 },
 {
  path: '/user',
  name: 'user',
  redirect: '/user/login',
  meta: {
   auth: true
  },
  component: User,
  children: UserRouter
 }
];

export default [...frameIn]