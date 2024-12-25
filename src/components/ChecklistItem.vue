<template>
  <input :id="idItem" class="inp-cbx" type="checkbox" v-model="checked"  />
  <label class="cbx" :for="idItem">
    <span>
      <svg width="12px" height="9px" viewBox="0 0 12 9">
        <polyline points="1 5 4 8 11 1"></polyline>
      </svg>
    </span>
    <span>{{ text }}</span>
    <a v-if="pages.length" href="#" @click="showModal = true">

      <font-awesome-icon icon="fa-solid fa-info-circle" />
    </a>
  </label>
 <Modal v-if="showModal" @close="showModal = false" :pages="pages">
    <template #header>
      <h3>{{ text }}</h3>
    </template>
  </Modal>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: 'ChecklistItem',
  components: {
    Modal,
  },
  props: {
    idItem: String,
    text: String,
    isChecked: {
      type: Boolean,
      default: false
    },
    pages: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      checked: this.isChecked, // Sync local reactive state with the prop
      showModal: false,
      scrollY: 0,
    };
  },
  watch: {
    isChecked(newVal) {
      this.checked = newVal; // Update local state if prop changes
    },
    showModal(newValue) {
      if (newValue) {
        this.scrollY = window.scrollY; // Save the current scroll position
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollY}px`;
      } else {
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, this.scrollY); // Restore the scroll position
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inp-cbx {
  display: none;
}

label {
  /* -webkit-app-region: no-drag; */
  width: fit-content;
  padding-right: 10px;
}

.cbx {
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  display: block;
  margin-bottom: 15px;
}

.cbx span {
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}

.cbx span:first-child {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transform: scale(1);
  vertical-align: middle;
  border: 1px solid #B9B8C3;
  transition: all 0.2s ease;
}

.cbx span:first-child svg {
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 6px;
  fill: none;
  stroke: white;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}

.cbx span:first-child:before {
  content: "";
  width: 100%;
  height: 100%;
  background: #506EEC;
  display: block;
  transform: scale(0);
  opacity: 1;
  border-radius: 50%;
  transition-delay: 0.2s;
}

.cbx span:nth-child(2) {
  margin-left: 8px;
}

.cbx a {
  margin-left: 8px;
  color: #ffffff;
  vertical-align: -2px;
}

.cbx span:last-of-type:after {
  content: "";
  position: absolute;
  top: 8px;
  left: 0;
  height: 1px;
  width: 100%;
  background: #B9B8C3;
  transform-origin: 0 0;
  transform: scaleX(0);
}

.cbx:hover span:first-child {
  border-color: #3c53c7;
}

.inp-cbx:checked + .cbx span:first-child {
  border-color: #3c53c7;
  background: #3c53c7;
  animation: check 0.6s ease;
}

.inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}

.inp-cbx:checked + .cbx span:first-child:before {
  transform: scale(2.2);
  opacity: 0;
  transition: all 0.6s ease;
}

.inp-cbx:checked + .cbx span:last-of-type {
  color: #B9B8C3;
  transition: all 0.3s ease;
}

.inp-cbx:checked + .cbx span:last-of-type:after {
  transform: scaleX(1);
  transition: all 0.3s ease;
}

.inp-cbx:checked + .cbx a {
  opacity: .5;
}

img {
  width: 100%;
}

@keyframes check {
  50% {
    transform: scale(1.2);
  }
}
</style>
