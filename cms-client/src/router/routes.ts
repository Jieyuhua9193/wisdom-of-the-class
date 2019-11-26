import Layout from '@/layout/index.vue'

const frameIn = [
 { path: '/',
   // redirect: { name: 'index' },
   component: Layout ,
   children: []
 }
]

const frameOut: any = []

const errorPage: any = []

export default [
 ...frameIn,
 ...frameOut,
 ...errorPage
]