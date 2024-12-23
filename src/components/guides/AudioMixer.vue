<template>
  <MenuBar title="Guide table de mix" subtitle="Utilisation de la Livetrack L-12" icon="route" link="/guides"></MenuBar>

  <div id="main" class="guide">
    <p>Y a plein de boutons partout et ça à l'air compliqué, mais en réalité il n'y a pas grand chose à toucher pour que ça marche. Voici un petit guide des choses à savoir.</p>
    <img src="../../assets/img/IMG_2289.jpeg" alt="">
    <h2>Mise en route</h2>
    <p>Pour allumer la table de mix il y a un bouton à l'arrière sur le côté droit.</p>
    <img src="../../assets/img/IMG_2287.jpeg" alt="">
    <p>Une fois la table de mixage allumée, elle est prête à être utilisée. Il ne reste plus qu'à brancher les micros (<RouterLink to="/guides/mic"><font-awesome-icon icon="fa-solid fa-file-audio" /> guide ici</RouterLink>) et éventuellement à régler le niveau de son de chaque micro avec les faders.</p>
    <img src="../../assets/img/IMG_2294.jpeg" alt="">
    <h2>Profile de son</h2>
    <p>Si il y a un doute au niveau des placement des faders il est possible de charger un profile. Pour ce faire:</p>
      <ol>
        <li>Appuyer sur le bouton <code>recall</code></li>
        <li>Appuyer sur le bouton 5</li>
        <li>Aligner les faders sur les lumières qui se sont allumées</li>
      </ol>
    <img src="../../assets/img/livetrack_recall.jpeg" alt="">
  </div>
</template>

<script>
import MenuBar from '../MenuBar.vue';
import { RouterLink } from 'vue-router';

export default {
  name: 'AudioMixer',
  components: {
    MenuBar,
    RouterLink
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
