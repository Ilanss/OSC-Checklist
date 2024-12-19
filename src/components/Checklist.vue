<template>
  <h1>OSC Checklist</h1>
  <p class="subtitle">Ou comment lancer un stream de A à Z</p>
  <!-- <fieldset> -->
    <h2>Ordinateur</h2>
    <ChecklistItem idItem="power" text="Allumer la multiprise" :isChecked=true />
    <ChecklistItem idItem="computer_booted" text="Allumer l'ordi" :isChecked=true :pages="pagesForPower" />
    <ChecklistItem idItem="obs_opened" text="Ouvrir OBS" :isChecked=false :pages="pagesForObsOpened" />
    <!-- <hr> -->
    <h2>Caméras</h2>
    <ChecklistItem idItem="camera_placement" text="Placer les caméras" :isChecked=false />
    <ChecklistItem idItem="camera_on" text="Allumer les caméras" :isChecked=false />
    <!-- <hr> -->
  <!-- </fieldset> -->
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
        { text: "Plug in the power strip", image: "https://via.placeholder.com/150" },
        { text: "Ensure all devices are connected" },
      ],
      pagesForComputerBooted: [
        { text: "Press the power button on the computer" },
        { text: "Wait for the boot sequence to complete" },
      ],
      pagesForObsOpened: [
        { text: "Locate the OBS shortcut" },
        { text: "Double-click to open the software" },
      ],
      pagesForCameraPlacement: [
        { text: "Position cameras on tripods" },
        { text: "Adjust angles to cover the scene" },
      ],
      pagesForCameraOn: [
        { text: "Power on each camera" },
        { text: "Verify the feed in the monitor" },
      ],
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  fieldset {
    border: 1px solid grey;
  }
  
  hr {
    border: 1px solid grey;
    width: 50%;
  }
</style>
