<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.self="closeModal">
        <div class="modal-container">
          <!-- Header -->
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <slot :current-page="currentPage">
              <!-- Fallback content for current page -->
              <div v-if="currentPage < pages.length">
                <div v-html="pages[currentPage].text"></div>
                <!-- <p>{{ pages[currentPage].text }}</p> -->
                <img
                  v-if="pages[currentPage].image"
                  :src="pages[currentPage].image"
                  alt="Page Content Image"
                />
              </div>
            </slot>
          </div>

          <!-- Footer -->
          <div class="modal-footer">
            <slot name="footer" :current-page="currentPage" :total-pages="pages.length">
              <button class="modal-default-button" @click="closeModal">
                Close
              </button>
              <button
                class="modal-next-button"
                v-if="currentPage < pages.length - 1"
                @click="goToNextPage"
              >
                Next
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
  
<script>
export default {
  name: "ModalItem",
  props: {
    pages: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 0, // Track the current page
    };
  },
  methods: {
    goToNextPage() {
      if (this.currentPage < this.pages.length - 1) {
        this.currentPage++;
      }
    },
    closeModal() {
      this.$emit("close");
      this.currentPage = 0; // Reset to the first page
    },
  },
};
</script>

  <style scoped>
  .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  -webkit-app-region: no-drag;
  pointer-events: auto; /* Ensure these areas behave as usual */
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  min-height: 350px;
  margin: 0px auto;
  padding: 40px 30px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  text-align: center;

  /* Flexbox layout for header, body, and footer */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures footer stays at the bottom */
}
.modal-body {
  /* margin: 20px 0; */
  flex-grow: 1;
}

.modal-footer {
  margin-top: 1rem;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media (prefers-color-scheme: light) {
  .modal-container {
    background-color: #fff;
  }
}

@media (prefers-color-scheme: dark) {
  .modal-container {
    background-color: #222;
  }
}

  </style>
  