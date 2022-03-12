import Vue from 'vue'
import App from './App.vue'
import './input.css'
import router from "./router";
import VueSimpleAlert from "vue-simple-alert"; //source https://vuejsexamples.com/simple-alert-for-vue-js/
// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";
Vue.use(VueSimpleAlert);

Vue.config.productionTip = false

Vue.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: appState => {
        router.push(
            appState && appState.targetUrl ?
            appState.targetUrl :
            window.location.pathname
        );
    }
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')