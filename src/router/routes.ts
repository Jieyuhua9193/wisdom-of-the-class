import Layout from '@/layout/index.vue';
import Create from '@/pages/global/views/create.vue';
import EditEmailTpl from '@/pages/global/views/edit-email-tpl.vue'

import User from '@/pages/user/views/index.vue';
import Overview from '@/pages/overview/views/index.vue';
import MyClass from '@/pages/class/views/index.vue';
import Message from '@/pages/message/views/index.vue';
import Active from '@/pages/active/views/index.vue';

import UserRouter from '@/pages/user/router';
import MyClassRouter from '@/pages/class/router';
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
        path: 'class',
        name: 'Class',
        redirect: '/class/users',
        component: MyClass,
        children: MyClassRouter,
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
      },
      {
        path: 'active',
        name: 'Active',
        component: Active,
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
