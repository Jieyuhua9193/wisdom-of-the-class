import Vue from 'vue'
import Vuex from 'vuex'

import LayoutState, { newLayoutState } from '@/layout/vuex/store'

import LayoutMutations from '@/layout/vuex/mutations'

Vue.use(Vuex)

export interface AppState {
 layoutState: LayoutState;
}

const store =  new Vuex.Store({
  state: {
   layoutState: newLayoutState(),
  },
  mutations: {
   ...LayoutMutations
  },
  modules: {
  }
})

export default store;