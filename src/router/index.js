import Vue from 'vue';
import Router from 'vue-router';
import auth from '@/api/auth';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/pages/Login'),
    },
    {
      path: '*',
      redirect: 'login',
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.currentUser()) {
    next({ path: '/login' });
  } else if (to.name === 'login' && auth.currentUser()) {
    next({ path: '/' });
  } else {
    next();
  }
  next();
});

export default router;
