/* eslint-disable no-console */
'use strict';

import firebase from 'firebase';
import 'angularfire';


// // ==== connecting to firebase ====
import configFirebase from '~/env.js'
firebase.initializeApp(configFirebase);
// // ================================


export default function (app) {
  app
    .service('authenticationService', function ($firebaseAuth, userProfileService, syncDataService, $location) {
      'ngInject';

      syncDataService.getProfileImageRef('default.svg').toString() // add to profile


      this.signUpToFirebase = (email, password) => {
        const auth = $firebaseAuth(firebase.auth());
        auth.$createUserWithEmailAndPassword(email, password)
          .then(function(firebaseUser) {
            userProfileService.createNewUser(email, firebaseUser.user.uid);
            syncDataService.saveUserInfoToFirebase(firebaseUser.user.uid);
          })
          .catch(function(error) {
            console.log('error: ', error)
          })
      };

      // this.getUserFromLocalStorage = () => {
      //   const user = '';
      //   if (user === "") {
      //     localStorage.getItem(user)
      //     console.log(user);
      //   }
      // }

      this.signInToFirebase = (email, password) => {
        const auth = $firebaseAuth(firebase.auth());
        auth.$signInWithEmailAndPassword(email, password)
          .then(function() {
            $location.path('/#!/home')
          })
          .catch(function(error) {
            console.log('error: ', error)
          })
      };
    })
}