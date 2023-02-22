import { createApp } from 'vue'
import App from './App.vue'
import store from './store'


// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

createApp(App).use(store).mount('#app')
