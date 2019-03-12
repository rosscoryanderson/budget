import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
//const fb = require('./firebaseConfig.js')

Vue.config.productionTip = false

require('./assets/styles.css')

Vue.use(VueFire)
firebase.initializeApp({
  apiKey: "AIzaSyDkEAqzySVqDElvLZnKt50fj-GJnxmnzqU",
  authDomain: "budgetyolife.firebaseapp.com",
  databaseURL: "https://budgetyolife.firebaseio.com",
  projectId: "budgetyolife",
  storageBucket: "budgetyolife.appspot.com",
  messagingSenderId: "81969621322"
})

export const db = firebase.firestore();

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
