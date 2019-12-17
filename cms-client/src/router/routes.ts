import Layout from '@/layout/index.vue'

import User from '@/views/user/views/index.vue'

import userRouter from '@/views/user/router'

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
  redirect: {name: 'login'},
  meta: {
   auth: true
  },
  component: User,
  children: [
   ...userRouter
  ]
 }
];

export default [...frameIn]