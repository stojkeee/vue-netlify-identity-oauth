import auth from '@/api/auth';
import types from './mutationTypes';

export default {
  attemptGoogleLogin() {
    window.location.href = auth.loginExternalUrl('google');
  },

  async initAuth({ dispatch, commit }, params) {
    commit(types.SET_LOADING, true);
    const user = await auth.currentUser();
    if (params) {
      dispatch('createExternalUser', params);
    } else if (user) {
      dispatch('validate', user);
    } else if (!user) {
      commit(types.SET_LOADING, false);
    }
  },

  async validate({ dispatch, commit }, user) {
    const siteUrl = `https://${document.location.host}/.netlify/identity`;
    if (siteUrl === user.url) {
      const newToken = await user.jwt(user.token.refresh_token);
      try {
        const newUser = await auth.createUser({
          access_token: newToken,
          expires_in: user.token.expires_in,
          refresh_token: user.token.refresh_token,
          token_type: 'bearer',
        });
        commit(types.SET_USER, newUser);
      } catch (e) {
        dispatch('attemptLogout');
        throw (e);
      }
    }
    commit(types.SET_LOADING, false);
  },

  async createExternalUser({ dispatch, commit }, params) {
    if (params) {
      try {
        commit(types.SET_USER, await auth.createUser(params, true));
      } catch (e) {
        dispatch('attemptLogout');
        throw (e);
      }
    }
    commit(types.SET_LOADING, false);
  },

  attemptLogout() {
    localStorage.clear();
    window.location.reload();
    document.location.href = '/';
  },
};
