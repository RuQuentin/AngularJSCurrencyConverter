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
    .service('authenticationService', function ($firebaseAuth, userProfileService, syncDataService) {
      'ngInject';

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
    })
}