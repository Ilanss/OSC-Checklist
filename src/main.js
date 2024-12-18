import { createApp } from 'vue'
import App from './App.vue'

// Import FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import FontAwesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific icons
import { fas } from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(fas)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')