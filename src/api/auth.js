import GoTrue from 'gotrue-js';

const auth = new GoTrue({
  APIUrl: `${process.env.VUE_APP_API_URL}/.netlify/identity`,
  setCookie: true,
});

export default auth;
