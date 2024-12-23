<template>
  <MenuBar title="Guide micro HF" subtitle="Mise en place des micro Røde" icon="route" link="/guides"></MenuBar>

  <div id="main" class="guide">
    <p>Les micros fonctionnent en pair avec un recepteur. Ils ont tous une étiquette pour pouvoir les reconnaitre. Exemple d'un "kit":</p>
    <ul>
      <li>Micro B1</li>
      <li>Micro B2</li>
      <li>Récepteur BR</li>
      <li>2x micro lavalier (micro fil)</li>
    </ul>
    <img src="../../assets/img/IMG_2293.jpeg" alt="">
    <h2>Mise en place</h2>
    <p>Brancher les lavaliers au micro. Brancher le(s) récepteur(s) au câble correspondant sur la table de mixage.</p>
    <img src="../../assets/img/IMG_2292.jpeg" alt="">
    <p>Appuyer longuement sur le bouton pour allumer les micro (jusqu'à ce que les 2 lumière s'allume) et le récepteur.</p>
    <p class="warning"><font-awesome-icon icon="fa-solid fa-warning" /> Attention: éloigner un maximum les récepteurs les uns des autres pour éviter les interférences.</p>
    <img src="../../assets/img/livetrack_mic.jpeg" alt="">
  </div>
</template>

<script>
import MenuBar from '../MenuBar.vue';
// import { RouterLink } from 'vue-router';

export default {
  name: 'MicGuide',
  components: {
    MenuBar,
    // RouterLink
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
