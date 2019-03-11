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
    .service('authenticationService', function ($firebaseAuth, userProfileService, syncDataService, $location, $rootScope) {
      'ngInject';

      // syncDataService.getProfileImageRef('default.svg').toString() // add to profile

      this.signUpToFirebase = (email, password) => {
        $rootScope.auth = $firebaseAuth(firebase.auth());

        $rootScope.auth.$createUserWithEmailAndPassword(email, password)
          .then(function(firebaseUser) {
            userProfileService.createNewUser(email, firebaseUser.user.uid);

            return syncDataService.saveUserInfoToFirebase(firebaseUser.user.uid);
          })
          .then(function() {
            $location.path('/editProfile')
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
        $rootScope.auth = $firebaseAuth(firebase.auth());

        $rootScope.auth.$signInWithEmailAndPassword(email, password)
          .then(function(data) {
            $rootScope.currentUserId = data.user.uid;
            return syncDataService.getUserInfoFromFirebase(data.user.uid)
          })
          .then(function(user) {
            $rootScope.currentUser = user;
            console.log($rootScope.auth)
          })
          .then(function() {
            $location.path('/home')
          })
          .catch(function(error) {
            console.log('error: ', error)
          })
      };

      this.signOutFromFirebase = () => {
        $rootScope.auth.$signOut()
          .then(function() {
            $location.path('/sign-in')
          })
      }

      // ========= test =========
      // console.log('========================')
      // this.signInToFirebase('denis1@gmail.com', 'qwerty')
      // $timeout(() => this.signOutFromFirebase(), 5000)

    })
}