import types from './mutationTypes';

export default {
  [types.SET_USER](state, value) {
    state.currentUser = value;
  },
  [types.SET_LOADING](state, value) {
    state.loading = value;
  },
};
