import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyA8zm900LaezCzfxf5QTlztlQLs7C4kWhA',
    },
}).mount('#app');

