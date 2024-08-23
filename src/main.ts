import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCoXfnKgmtubd3x_vV_7GBEE6nqFcjYGkE",
  authDomain: "proyecto-auth-f895e.firebaseapp.com",
  projectId: "proyecto-auth-f895e",
  storageBucket: "proyecto-auth-f895e.appspot.com",
  messagingSenderId: "320460723240",
  appId: "1:320460723240:web:cd2b83a0fcd1238fbf111d",
  measurementId: "G-VQ3RSW7G63",
};

initializeApp(firebaseConfig);
createApp(App).use(router).mount("#app");
