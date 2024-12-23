<template>
  <MenuBar title="Guide Streamdeck" subtitle="Streamer facilement sous devoir toucher à OBS" icon="route" link="/guides"></MenuBar>

  <div id="main" class="guide">
    <p>Une fois OBS ouvert tout peut être (être même devrait) controllé via le Streamdeck. De plus le Streamdeck à un câble suffisament long pour être amené jusqu'aux tables.</p>
    <h2>Controle des scènes</h2>
    <p>Les trois boutons du haut (<code>Start</code>, <code>Pause</code>, <code>End</code>) permettent de passer sur les scènes "d'attente". Les boutons en dessous permettent eux de choisir une mise en page de caméra. <br>Le dernier bouton permet d'afficher une "webcam" en surimpression de n'importe quelle mise en page.</p>
    <img src="../../assets/img/streamdeck_scene.png" alt="">
    <p>Chacun de ses boutons permettent de choisir les caméras des différents emplacements de le mise en page du bouton situé juste en dessus.</p>
    <img src="../../assets/img/streamdeck_camera.png" alt="">
    <p>Chaque ligne correspond à un emplacement qui est nommé par le premier bouton (décoratif). La caméra la plus à gauche est en dessus de la caméra qui est à sa droite et ainsi de suite.</p>
    <p>Les options lié à la webcam permettent également de choisir l'emplacement de cette dernière.</p>
    <img src="../../assets/img/streamdeck_webcam.png" alt="">
    <h2>Outils</h2>
    <p>Les boutons du bas permettent d'activer ou désactiver des sources sons.</p>
    <p>il est possible de démarrer/arrêter le stream vie le bouton dédié dans le dossier "Outils".</p>
    <img src="../../assets/img/streamdeck_button_tools.png" alt="">
    <img src="../../assets/img/streamdeck_tools.png" alt="">
    <h2>Musique</h2>
    <p>Dans le dossier musique il est possible de controler Spotify ainsi que de choisir ou s'affiche l'encars de la musique sur le live (ou de le cacher). Il y a aussi des raccourcis pour baisser le son de la musique au besoin.</p>
    <img src="../../assets/img/streamdeck_music.png" alt="">
    <h2>Compte à rebours</h2>
    <p>Plusieurs durée de compte à rebours sont disponible dans le dossier des timer. Il s'affichera automatiquement dans les scènes <code>Start</code> et <code>End</code></p>
    <img src="../../assets/img/streamdeck_timer.png" alt="">
    <!-- <img src="../../assets/img/streamdeck_home.png" alt=""> -->
  </div>
</template>

<script>
import MenuBar from '../MenuBar.vue';
// import { RouterLink } from 'vue-router';

export default {
  name: 'StreamdeckGuide',
  components: {
    MenuBar,
    // RouterLink
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
