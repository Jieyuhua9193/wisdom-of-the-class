import Vue from 'vue'

import UserState from '@/pages/user/vuex/store'

declare module 'vue/types/vue' {
  interface Vue {
    userState: UserState
  }
}
