import { createApp } from 'vue'
import '~/assets/global.scss'
import 'uno.css'
import App from '~/App.vue'
import router from '~/hooks/vue-router/auto-router'

const app = createApp(App)
app.use(router as any)
app.mount('#app')
