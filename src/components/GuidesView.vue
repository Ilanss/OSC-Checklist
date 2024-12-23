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

  <div id="main" class="guides">
    <RouterLink to="/guides/livetrack" class="no-drag"><font-awesome-icon icon="fa-solid fa-file-audio" size="lg" /> Table de mixage</RouterLink>
    <RouterLink to="/guides/mic" class="no-drag"><font-awesome-icon icon="fa-solid fa-file-audio" size="lg" /> Micro</RouterLink>
    <RouterLink to="/guides/streamdeck" class="no-drag"><font-awesome-icon icon="fa-solid fa-file" size="lg" /> Streamdeck</RouterLink>
    <!-- <RouterLink to="/guides/livetrack" class="no-drag"><font-awesome-icon icon="fa-solid fa-file-video" size="lg" /> Caméra Sony</RouterLink>
    <RouterLink to="/guides/livetrack" class="no-drag"><font-awesome-icon icon="fa-solid fa-file-video" size="lg" /> Caméra plafond</RouterLink> -->
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
.guides {
  display: grid;
  grid-gap: 1rem;
}

.guides a {
  text-decoration: none;
}

svg {
  padding-right: .5rem;
}

</style>
