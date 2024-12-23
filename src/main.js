import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'

// Import FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import FontAwesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific icons
import { fas } from '@fortawesome/free-solid-svg-icons'
import Checklist from './components/Checklist.vue'
import GuidesView from './components/GuidesView.vue'
import AudioMixer from './components/guides/AudioMixer.vue'

// Add icons to the library
library.add(fas)

const routes = [
    { path: '/', component: Checklist },
    { path: '/guides', component: GuidesView },
    { path: '/guides/livetrack', component: AudioMixer },
  ]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')