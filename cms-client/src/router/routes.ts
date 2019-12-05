import Layout from '@/layout/index.vue'

import userRouter from '@/views/user/router'

const frameIn = [
 { path: '/',
   // redirect: { name: 'index' },
   component: Layout ,
   children: []
 },
 ...userRouter
]

export default [...frameIn]