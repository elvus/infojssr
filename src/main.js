import { createApp } from 'vue'
import Routes from './router/index'
import VueCookies from 'vue3-cookies'

//https://codesandbox.io/s/vue-router-53326?file=/src/App.vue
const app = createApp(Routes)
app.use(VueCookies)
app.mount('#app')
