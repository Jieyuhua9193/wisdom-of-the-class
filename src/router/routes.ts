import Layout from '@/layout/index.vue';
import Create from '@/pages/global/views/create.vue';
import EditEmailTpl from '@/pages/global/views/edit-email-tpl.vue'

import User from '@/pages/user/views/index.vue';
import Overview from '@/pages/overview/views/index.vue';
import Student from '@/pages/student/views/index.vue';
import Message from '@/pages/message/views/index.vue';

import UserRouter from '@/pages/user/router';
import StudentRouter from '@/pages/student/router';
import EmailRouter from '@/pages/message/router';

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
      },
      {
        path: 'message',
        name: 'Message',
        redirect: 'message/email',
        component: Message,
        children: EmailRouter,
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
  },
  {
    path: '/edit-email-tpl',
    name: 'edit-email-tpl',
    meta: {
      auth: true
    },
    component: EditEmailTpl
  }
];

export default [...frameIn]
