import Vue from 'vue'

import UserState from '@/views/user/vuex/store'

declare module 'vue/types/vue' {
  interface Vue {
    $v: any
    userState: UserState
  }
}