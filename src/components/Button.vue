<template>
  <button :class="`icon ${provider.name.toLowerCase()}`"
          :style="`background: ${provider.color}`">
    {{ provider.name }}
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: ['provider'],
};
</script>
<style lang="scss" scoped>
button {
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  margin: 14px 0 0;
  padding: 12px;
  outline: 0;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
}

.icon::before {
  content: "";
  position: absolute;
  display: inline-block;
  vertical-align: middle;
  width: 32px;
  height: 40px;
  top: 4px;
  left: 16px;
  background-repeat: no-repeat;
  background-position: left center;
}

.google::before {
  background-image: url(../assets/img/google.svg);
}

.github::before {
  background-image: url(../assets/img/github.svg);
}

.gitlab::before {
  background-image: url(../assets/img/gitlab.svg);
}

.bitbucket::before {
  background-image: url(../assets/img/bitbucket.svg);
}
</style>
