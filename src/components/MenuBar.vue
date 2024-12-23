<template>
  <div class="menu">
    <div class="title">
      <h1>{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
    <RouterLink :to=link class="router no-drag"><font-awesome-icon :icon="['fas', icon]" size="lg" /></RouterLink>
  </div>
</template>

<script>
// import { routeLocationKey } from 'vue-router';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'MenuBar',
  props: {
    title: String,
    subtitle: String,
    link: {
      type: String,
      default: "/"
    },
    icon: {
      type: String,
      default: 'route'
    },
  },
  components: {
  },
  data() {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
