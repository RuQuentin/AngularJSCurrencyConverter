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
    .service('authenticationService', function ($firebaseAuth, userProfileService) {
      'ngInject';

      this.signUpToFirebase = (email, password) => {
        const auth = $firebaseAuth(firebase.auth());
        auth.$createUserWithEmailAndPassword(email, password)
          .then(function(firebaseUser) {
            console.log('firebaseUser: ', firebaseUser);
            userProfileService.createNewUser(email);
          })
          .catch(function(error) {
            console.log('error: ', error)
          })
        console.log(email)
        console.log(password)
      };
    })
}