import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import router from './router';

Vue.use(Vuex)
//var db = firebase.firestore();

export default new Vuex.Store({
  state: {
    user: 'not set',
    data: []
    // {
    //   source: 'Salary',
    //   direction: 'inflow',
    //   frequency: 'Monthly',
    //   value: 3800,
    //   type: '',
    // },
    // {
    //   source: 'Car Repayments',
    //   direction: 'inflow',
    //   frequency: 'Weekly',
    //   value: 50,
    //   type: '',
    // },
    // {
    //   source: 'House Mortgage',
    //   direction: 'outflow',
    //   frequency: 'Monthly',
    //   value: 1362,
    //   type: 'Housing',
    // },
    // {
    //   source: 'Car Repayment',
    //   direction: 'outflow',
    //   frequency: 'Weekly',
    //   value: 50,
    //   type: 'Transport',
    // },
    // {
    //   source: 'Netflix',
    //   direction: 'outflow',
    //   frequency: 'Monthly',
    //   value: 15,
    //   type: 'Subscriptions',
    // },
    // {
    //   source: 'Strata',
    //   direction: 'outflow',
    //   frequency: 'Monthly',
    //   value: 650,
    //   type: 'Housing',
    // },
  },
  mutations: {
    readCashFlow: (state, payload) => {
      console.log(payload)
    },
    addCashFlow: (state, payload) => {
      state.data.push(payload);
    },
    setUserName: (state, payload) => {
      state.user = payload.uid;
      router.push('/budget')
    }
  },
  actions: {
    readCashFlow: ({ commit }, payload) => {
      firebase.firestore().collection("budgets").doc(payload).get()
        .then(function () {
          commit('readCashFlow')
        }).catch(function (error) {
          // Handle Errors here.
          console.log('Could not read data')
          // ...
        });
    },
    addCashFlow: ({ commit }, payload) => {
      firebase.firestore().collection("budgets").doc(payload.user).set(payload.data)
        .then(function () {
          commit('addCashFlow', payload.data)
          console.log("Expense successfully written!");
        })
        .catch(function (error) {
          console.error("Error adding expense: ", error);
        });
    },
    addIncome: ({ commit }, payload) => {
      commit('addCashFlow', payload)
    },
    logUserIn: ({ commit }, payload) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.username, payload.password)
        .then(function() {
          var user = firebase.auth().currentUser;
          commit('setUserName', user)
        })
        .catch(function (error) {
          // Handle Errors here.
          console.log('error occured')
          // ...
        });
    },
    createUser: ({ commit }, payload) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.username, payload.password)
        .then(function() {
          var user = firebase.auth().currentUser;
          commit('setUserName', user)
        })
        .catch(function (error) {
          // Handle Errors here.
          console.log('Could not create user')
          // ...
        });
    },
  }
})
