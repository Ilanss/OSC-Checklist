<template>
  <MenuBar title="OSC Checklist" subtitle="Ou comment lancer un stream de A à Z" icon="route" link="/guides"></MenuBar>

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
    
    <h2>4. Micros</h2>
    <ChecklistItem idItem="mic_quipe" text="Equiper les micro" :isChecked=false :pages="pagesForMicEquip" />
    <ChecklistItem idItem="receiver_power" text="Brancher les récepteur" :isChecked=false :pages="pagesForReceiverPower" />
    <ChecklistItem idItem="mix_power" text="Allumer la table de mix" :isChecked=false :pages="pagesForMixPower" />
    <ChecklistItem idItem="mic_power" text="Allumer les micros" :isChecked=false :pages="pagesForMicPower" />
    
    <h2>5. OBS</h2>
    <ChecklistItem idItem="obs_title" text="Changer le titre du stream" :isChecked=false :pages="pagesForObsTitle" />
    <ChecklistItem idItem="obs_category" text="Changer la catégorie du stream" :isChecked=false :pages="pagesForObsCategory" />
    <ChecklistItem idItem="obs_welcome" text="Changer le text d'accueil" :isChecked=false :pages="pagesForObsWelcome" />
    
    <h2>6. Lancer le stream</h2>
    <ChecklistItem idItem="timer_start" text="Lancer le compte à rebours" :isChecked=false :pages="pagesForTimerStart" />
    <ChecklistItem idItem="music_start" text="Lancer la musique" :isChecked=false :pages="pagesForMusicStart" />
    <ChecklistItem idItem="stream_start" text="Démarrer le stream" :isChecked=false :pages="pagesForStreamStart" />

    <h2>7. Pendant le stream</h2>
    <ChecklistItem idItem="scene_choice" text="Choix de scène" :isChecked=false :pages="pagesForSceneChoice" />
    <ChecklistItem idItem="camera_change" text="Choix de caméra" :isChecked=false :pages="pagesForCameraChange" />

    <h2>8. Arrêter le stream</h2>
    <ChecklistItem idItem="scene_end" text="Scène de fin" :isChecked=false :pages="pagesForSceneEnd" />
    <ChecklistItem idItem="stream_stop" text="Arrêter le stream" :isChecked=false :pages="pagesForStreamStop" />
    <!-- <ChecklistItem idItem="vod_youtube" text="Publier la VOD sur Youtube" :isChecked=false :pages="pagesForVodYoutube" /> -->
  </div>
</template>

<script>
import ChecklistItem from './ChecklistItem.vue';
import MenuBar from './MenuBar.vue';

export default {
  name: 'CheckList',
  props: {
    msg: String
  },
  components: {
    ChecklistItem,
    MenuBar
  },
  data() {
    return {
      // Define different pages for each checklist item
      pagesForPower: [
        { text: "<p>Le bouton se trouve sur l'ordinateur</p>", image: require('@/assets/img/powerstrip.jpeg') },
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
      pagesForMicEquip: [
        { text: "<p>Faire passer le micro sous le T-Shirt.<br>Attacher à environ 15cm sous la bouche.</p>" },
      ],
      pagesForReceiverPower: [
        { text: "<p>Brancher le câble jack avec la lettre qui correspond.</p>", image:require('@/assets/img/receiver_power.jpeg') },
        { text: "<p>Appuyer longuement sur le bouton jusqu'à ce que l'écran s'allume.</p>" }
      ],
      pagesForMixPower: [
        { text: "<p>Si la table ne s'allume pas avec l'alimentation générale: le bouton se trouve à l'arrière sur le côté droit.</p>", image:require('@/assets/img/IMG_2287.jpeg')},
      ],
      pagesForMicPower: [
        { text: "<p>Appuyer longuement sur le bouton jusqu'à ce que les 2 lumières s'allument</p>" },
      ],
      pagesForStreamStart: [
        { text: "<p>Soit avec le bouton <code>Start live</code> sur le Streamdeck ou avec le bouton <code>Démarrer le stream</code> sur OBS</p>", image: require('@/assets/img/streamdeck_tools.png') },
      ],
      pagesForSceneChoice: [
        { text: "<p>Utiliser le Streamdeck pour changer de scène.</p>", image: require('@/assets/img/streamdeck_scene.png'), link: "/guides/streamdeck" },
      ],
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
