import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import AOS from "aos";
import "aos/dist/aos.css";
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';


const app = createApp(App);

app.use(router);
app.use(AOS.init());
app.use(BalmUI);
app.use(BalmUIPlus);


app.mount('#app');