<template>
  <h1>OSC Checklist</h1>
  <!-- <fieldset> -->
    <h2>Ordinateur</h2>
    <ChecklistItem idItem="power" text="Allumer la multiprise" :isChecked=true />
    <ChecklistItem idItem="computer_booted" text="Allumer l'ordi" :isChecked=true infoMsg="Test" />
    <ChecklistItem idItem="obs_opened" text="Ouvrir OBS" :isChecked=false />
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
  }
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
