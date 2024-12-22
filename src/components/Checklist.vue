<template>
  <h1>OSC Checklist</h1>
  <p class="subtitle">Ou comment lancer un stream de A à Z</p>

  <h2>Ordinateur</h2>
  <ChecklistItem idItem="power" text="Allumer la multiprise" :isChecked=true />
  <ChecklistItem idItem="computer_booted" text="Allumer l'ordi" :isChecked=true :pages="pagesForPower" />
  <ChecklistItem idItem="open_session" text="Se connecter à la session OSC" :isChecked=true :pages="pagesForSession" />
  <ChecklistItem idItem="obs_opened" text="Ouvrir OBS" :isChecked=false :pages="pagesForObsOpened" />

  <h2>Caméras</h2>
  <ChecklistItem idItem="camera_placement" text="Placer les caméras" :isChecked=false :pages="pagesForCameraPlacement" />
  <ChecklistItem idItem="camera_on" text="Allumer les caméras Sony" :isChecked=false />
  <ChecklistItem idItem="camera_top" text="Caméra plafond" :isChecked=false />
  <ChecklistItem idItem="camera_other" text="Autres caméras" :isChecked=false />
  
  <h2>Lumière</h2>
  <ChecklistItem idItem="light_placement" text="Placer les lumière" :isChecked=true />
  <ChecklistItem idItem="light_on" text="Allumer les lumières" :isChecked=false />
  
  <h2>OBS</h2>
  <ChecklistItem idItem="obs_title" text="Changer le titre du stream" :isChecked=false />
  <ChecklistItem idItem="obs_category" text="Changer la catégorie du stream" :isChecked=false />
  <ChecklistItem idItem="obs_welcome" text="Changer le text d'accueil" :isChecked=false />
  
  <h2>Lancer le stream</h2>
  <ChecklistItem idItem="timer_start" text="Lancer timer" :isChecked=false />
  <ChecklistItem idItem="music_start" text="Lancer musique" :isChecked=false />
  <ChecklistItem idItem="stream_start" text="Démarer le stream" :isChecked=false />

  <h2>Pendant le stream</h2>
  <ChecklistItem idItem="scene_choice" text="Choix de scène" :isChecked=false />
  <ChecklistItem idItem="camera_change" text="Choix de caméra" :isChecked=false />

  <h2>Arrêter le stream</h2>
  <ChecklistItem idItem="scene_end" text="Scène de fin" :isChecked=false />
  <ChecklistItem idItem="stream_stop" text="Arrêter le stream" :isChecked=false />
  <ChecklistItem idItem="vod_youtube" text="Publier la VOD sur Youtube" :isChecked=false />
</template>

<script>
import ChecklistItem from './ChecklistItem.vue';

export default {
  name: 'CheckList',
  props: {
    msg: String
  },
  components: {
    ChecklistItem
  },
  data() {
    return {
      // Define different pages for each checklist item
      pagesForPower: [
        { text: "<p>Plug in the power strip</p>", image: "https://via.placeholder.com/150" },
        { text: "<p>Ensure all devices are connected</p>" },
      ],
      pagesForComputerBooted: [
        { text: "<p>Press the power button on the computer</p>" },
        { text: "<p>Wait for the boot sequence to complete</p>" },
      ],
      pagesForSession: [
        { text: `
            <p>Open OBS by performing the following steps:</p>
            <ol>
              <li>Locate the shortcut on the desktop.</li>
              <li>Double-click the shortcut.</li>
            </ol>
          `},
      ],
      pagesForObsOpened: [
        { text: "<p>Locate the OBS shortcut</p>" },
        { text: "<p>Double-click to open the software</p>" },
      ],
      pagesForCameraPlacement: [
        { text: "<p>Les emplacement possible sont marqué par des scotch de couleur sur les barres au plafond</p>" },
        { text: "<p>Choisir un emplacement, décrocher les câbles correspondant, les brancher à la caméra</p>" },
      ],
      pagesForCameraOn: [
        { text: "<p>Power on each camera</p>" },
        { text: "<p>Verify the feed in the monitor</p>" },
      ],
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
