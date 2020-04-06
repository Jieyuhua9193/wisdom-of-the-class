import Vue from 'vue'

import UserState from '@/pages/user/vuex/store'

declare module 'vue/types/vue' {
  interface Vue {
    userState: UserState,
    $v: any,
    editor: any
    _: any
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    validations?: object
  }
}
