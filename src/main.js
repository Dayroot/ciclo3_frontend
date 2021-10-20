import { createApp } from 'vue'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faTrashAlt, faPlusSquare, faEdit, faRedo } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'

// library.add(faTrashAlt, faPlusSquare, faEdit, faRedo)

createApp(App)
// .component('fa', FontAwesomeIcon)
.use(router)
.mount('#app')
