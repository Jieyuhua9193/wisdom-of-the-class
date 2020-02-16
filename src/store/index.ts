import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import LayoutState, {newLayoutState} from '@/layout/vuex/store';
import UserState, {newUserState} from "@/pages/user/vuex/store";
import {UserAccountState, newUserAccountState} from "@/pages/user/vuex/store";
import GlobalState, {newGlobalState} from "@/pages/global/vuex/store";

import LayoutMutations from '@/layout/vuex/mutations';
import UserMutations from '@/pages/user/vuex/mutations';
import GlobalMutations from '@/pages/global/vuex/mutations';

Vue.use(Vuex);

export interface AppState {
  layoutState: LayoutState;
  userState: UserState;
  userAccountState: UserAccountState;
  globalState: GlobalState;
}

const store = new Vuex.Store({
  state: {
    layoutState: newLayoutState(),
    userState: newUserState,
    userAccountState: newUserAccountState,
    globalState: newGlobalState
  },
  mutations: {
    ...LayoutMutations,
    ...UserMutations,
    ...GlobalMutations
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
