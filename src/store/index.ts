import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import LayoutState, { newLayoutState } from '@/layout/vuex/store';

import LayoutMutations from '@/layout/vuex/mutations';

Vue.use(Vuex);

export interface AppState {
  layoutState: LayoutState;
}

const store = new Vuex.Store({
  state: {
    layoutState: newLayoutState(),
  },
  mutations: {
    ...LayoutMutations
  },
  plugins: [createPersistedState({
    storage: window.localStorage,
    reducer(state) {
      return {
        // 需要持久化的vuex
      }
    }
  })]
});

export default store;