<template>
  <div class="menu">
    <div class="title">
      <h1>OSC Checklist</h1>
      <p class="subtitle">Ou comment lancer un stream de A à Z</p>
    </div>
    <RouterLink to="/guides" class="router no-drag"><font-awesome-icon icon="fa-solid fa-route" size="lg" /></RouterLink>
  </div>

  <div id="main">
    <h2>1. Ordinateur</h2>
    <ChecklistItem idItem="power" text="Allumer l'alimentation générale" :isChecked=true :pages="pagesForPower" />
    <ChecklistItem idItem="computer_booted" text="Allumer l'ordi" :isChecked=true :pages="pagesForComputerBooted" />
    <ChecklistItem idItem="open_session" text="Se connecter à la session OSC" :isChecked=true :pages="pagesForSession" />
    <ChecklistItem idItem="obs_opened" text="Ouvrir OBS" :isChecked=false />
    <ChecklistItem idItem="spotify_opened" text="Ouvrir Spotify" :isChecked=false :pages="pagesForSpotifyOpened" />

    <h2>2. Caméras</h2>
    <ChecklistItem idItem="camera_placement" text="Placer les caméras" :isChecked=false :pages="pagesForCameraPlacement" />
    <ChecklistItem idItem="camera_on" text="Allumer les caméras Sony" :isChecked=false :pages="pagesForCameraOn" />
    <ChecklistItem idItem="camera_top" text="Caméra plafond" :isChecked=false :pages="pagesForCameraTop" />
    <ChecklistItem idItem="camera_other" text="Autres caméras" :isChecked=false :pages="pagesForCameraOther" />
    
    <h2>3. Lumière</h2>
    <ChecklistItem idItem="light_placement" text="Placer les lumière" :isChecked=true :pages="pagesForLightPlacement" />
    <ChecklistItem idItem="light_on" text="Allumer les lumières" :isChecked=false :pages="pagesForLightOn" />
    
    <h2>4. OBS</h2>
    <ChecklistItem idItem="obs_title" text="Changer le titre du stream" :isChecked=false :pages="pagesForObsTitle" />
    <ChecklistItem idItem="obs_category" text="Changer la catégorie du stream" :isChecked=false :pages="pagesForObsCategory" />
    <ChecklistItem idItem="obs_welcome" text="Changer le text d'accueil" :isChecked=false :pages="pagesForObsWelcome" />
    
    <h2>5. Lancer le stream</h2>
    <ChecklistItem idItem="timer_start" text="Lancer le compte à rebours" :isChecked=false :pages="pagesForTimerStart" />
    <ChecklistItem idItem="music_start" text="Lancer la musique" :isChecked=false :pages="pagesForMusicStart" />
    <ChecklistItem idItem="stream_start" text="Démarrer le stream" :isChecked=false :pages="pagesForStreamStart" />

    <h2>6. Pendant le stream</h2>
    <ChecklistItem idItem="scene_choice" text="Choix de scène" :isChecked=false :pages="pagesForSceneChoice" />
    <ChecklistItem idItem="camera_change" text="Choix de caméra" :isChecked=false :pages="pagesForCameraChange" />

    <h2>7. Arrêter le stream</h2>
    <ChecklistItem idItem="scene_end" text="Scène de fin" :isChecked=false :pages="pagesForSceneEnd" />
    <ChecklistItem idItem="stream_stop" text="Arrêter le stream" :isChecked=false :pages="pagesForStreamStop" />
    <ChecklistItem idItem="vod_youtube" text="Publier la VOD sur Youtube" :isChecked=false :pages="pagesForVodYoutube" />
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import ChecklistItem from './ChecklistItem.vue';

export default {
  name: 'CheckList',
  props: {
    msg: String
  },
  components: {
    ChecklistItem,
    RouterLink
  },
  data() {
    return {
      // Define different pages for each checklist item
      pagesForPower: [
        { text: "<p>La multiprise se trouve derrière l'ordinateur</p>", image: require('@/assets/img/powerstrip.jpeg') },
        { text: "<p>Pour accéder au bouton: <br>enlever momentanément la prise de la table de mixage</p>" },
      ],
      pagesForComputerBooted: [
        { text: "<p>Le bouton se trouve en haut au milieu de la façade avant</p>" },
      ],
      pagesForSession: [
        { text: `<p>Mot de passe de la session: OSC1337</p>`},
      ],
      pagesForSpotifyOpened: [
        { text: `<p>N'utiliser <b>que</b> Spotify pour la musique. Le son sera coupé sur la VOD</p>`},
      ],
      pagesForCameraPlacement: [
        { text: "<p>Les emplacement possible sont marqué par des scotch de couleur sur les barres au plafond</p>", image: require('@/assets/img/IMG_2299.jpeg') },
        { text: "<p>Choisir un emplacement, décrocher les câbles correspondant</p>", image: require('@/assets/img/IMG_2300.jpeg') },
        { text: "<p>Brancher les câbles</p>", image: require('@/assets/img/IMG_2309.jpeg') },
      ],
      pagesForCameraOn: [
        { text: "<p>Allumer les caméras en ouvrant l'écran</p>", image: require('@/assets/img/IMG_2303.jpeg') },
        { text: "<p>Appuyer sur <code>enter</code> plusieurs fois si l'affichage montre le choix date/heure.</p>", image: require('@/assets/img/IMG_2305.jpeg') },
      ],
      pagesForCameraTop: [
        { text: "<p>Allumer la caméra</p>", image: require('@/assets/img/camera_top_power.jpeg') },
        { text: "<p>Placer la caméra grâce au bras magique</p>" },
        { text: "<p>Ouvrir le cache et déverouiller l'objectif</p>", image: require('@/assets/img/camera_top_lens.jpeg') },
      ],
      pagesForCameraOther: [
        { text: "<p>Un câble mini HDMI avec un raccord pré-installé est disponible sous la table de régie au besoin.</p>", image: require('@/assets/img/cable_mini_hdmi.jpeg') },
      ],
      pagesForStreamStart: [
        { text: "<p>Un câble mini HDMI avec un raccord pré-installé est disponible sous la table de régie au besoin.</p>", image: require('@/assets/img/streamdeck_tools.png') },
      ],
      pagesForSceneChoice: [
        { text: "<p>Utiliser le Streamdeck pour changer de scène.</p>", image: require('@/assets/img/streamdeck_home.png') },
      ],
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
