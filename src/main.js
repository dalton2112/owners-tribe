import { createApp } from 'vue';
import '@fontsource-variable/archivo/standard.css';
import '@fontsource-variable/fraunces/standard-italic.css';
import './styles/main.css';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
