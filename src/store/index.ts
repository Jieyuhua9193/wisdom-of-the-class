import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import LayoutState, { newLayoutState } from '@/layout/vuex/store';
import UserState, { newUserState } from "@/pages/user/vuex/store";
import CommonState, { newCommonState } from "@/common/vuex/store";
import { UserAccountState, newUserAccountState } from "@/pages/user/vuex/store";
import GlobalState, { newGlobalState } from "@/pages/global/vuex/store";

import LayoutMutations from '@/layout/vuex/mutations';
import CommonMutations from '@/common/vuex/mutations';
import UserMutations from '@/pages/user/vuex/mutations';
import GlobalMutations from '@/pages/global/vuex/mutations';

Vue.use(Vuex);

export interface AppState {
  layoutState: LayoutState;
  userState: UserState;
  userAccountState: UserAccountState;
  globalState: GlobalState;
  commonState: CommonState;
}

const store = new Vuex.Store({
  state: {
    layoutState: newLayoutState(),
    userState: newUserState,
    userAccountState: newUserAccountState,
    globalState: newGlobalState,
    commonState: newCommonState
  },
  mutations: {
    ...LayoutMutations,
    ...UserMutations,
    ...GlobalMutations,
    ...CommonMutations
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
