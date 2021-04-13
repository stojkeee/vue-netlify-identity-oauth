<template>
  <div class="content">
    <div class="login">
      <button>aaa</button>
      {{ process.env.TEST_VAR }}
      <h3>Log In</h3>
      <Button v-for="(provider, i) in providers"
              :key="provider + i"
              :provider="provider" />
    </div>
  </div>
</template>

<script>
import Button from '../components/Button';

export default {
  components: {
    Button,
  },
  name: 'Login',
  data() {
    return {
      providers: [
        { name: 'Google', color: '#4285f4' }, //
        { name: 'GitHub', color: '#333333' },
        { name: 'GitLab', color: '#e24329' },
        { name: 'BitBucket', color: '#205081' },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss"
       scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login {
  min-width: 360px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 24px;
  text-align: center;
}
</style>
