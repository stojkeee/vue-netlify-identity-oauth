import types from './mutationTypes';

export default {
  [types.SET_USER](state, value) {
    state.currentUser = value;
  },
  [types.SET_LOADING](state, value) {
    state.loading = value;
  },
  [types.SET_PROVIDER](state, value) {
    state.provider = value;
  },
};
