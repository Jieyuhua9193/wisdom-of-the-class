import Layout from '@/layout/index.vue';
import Create from '@/pages/global/views/create.vue';

import User from '@/pages/user/views/index.vue';
import Overview from '@/pages/overview/views/index.vue';
import Student from '@/pages/student/views/index.vue';

import UserRouter from '@/pages/user/router';
import StudentRouter from '@/pages/student/router';

const frameIn = [
  {
    path: '/',
    redirect: '/user/login',
    component: Layout,
    children: [
      {
        path: '/overview',
        name: 'overview',
        meta: {
          auth: true
        },
        component: Overview
      },
      {
        path: 'student',
        name: 'Student',
        redirect: '/student/list',
        component: Student,
        children: StudentRouter,
        meta: {
          auth: true
        }
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
  },
  {
    path: '/create',
    name: 'role-create',
    meta: {
      auth: true
    },
    component: Create
  }
];

export default [...frameIn]
