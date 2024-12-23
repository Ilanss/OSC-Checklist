<template>
<!--   <div class="menu">
    <div class="title">
      <h1>OSC Guides</h1>
      <p class="subtitle">Petits guides et tuto pour vous aider</p>
    </div>
    <RouterLink to="/" class="router no-drag"><font-awesome-icon icon="fa-solid fa-list" size="lg" /></RouterLink>
  </div>
 -->
  <MenuBar title="OSC Guides" subtitle="Petits guides et tuto pour vous aider" icon="list" link="/"></MenuBar>

  <div id="main">
    <RouterLink to="/guides/livetrack" class="no-drag">Table de mixage</RouterLink>
  </div>
</template>

<script>
import MenuBar from './MenuBar.vue';


export default {
  name: 'GuidesView',
  props: {
  },
  components: {
    MenuBar
  },
  data() {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
