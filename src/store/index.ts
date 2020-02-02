import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import LayoutState, { newLayoutState } from '@/layout/vuex/store';
import UserState, { newUserState } from "@/views/user/vuex/store";
import { UserAccountState, newUserAccountState } from "@/views/user/vuex/store";

import LayoutMutations from '@/layout/vuex/mutations';
import UserMutations from '@/views/user/vuex/mutations';

Vue.use(Vuex);

export interface AppState {
  layoutState: LayoutState;
  userState: UserState;
  userAccountState: UserAccountState;
}

const store = new Vuex.Store({
  state: {
    layoutState: newLayoutState(),
    userState: newUserState,
    userAccountState: newUserAccountState,
  },
  mutations: {
    ...LayoutMutations,
    ...UserMutations
  },
  plugins: [createPersistedState({
    storage: window.localStorage,
    reducer(state: AppState) {
      return {
        // 需要持久化的vuex
        userState: state.userState
      }
    }
  })]
});

export default store;