/* eslint-disable no-console */
'use strict';

import firebase from 'firebase';
import 'angularfire';


// ==== connecting to firebase ====
// import configFirebase from '~/env.js'
// firebase.initializeApp(configFirebase);
// ================================


export default function (app) {
  app
    .service('syncDataService', function ($firebaseArray, $firebaseObject, usersMocksService) {
      'ngInject';
      
      this.syncDealsWithFirebase = deal => {
        const ref = firebase.database().ref();
        usersMocksService.userDatabase = $firebaseArray(ref.child('listOfDeals').child(usersMocksService.currentUserId));
        usersMocksService.userDatabase.$add(deal);
      };

      this.getUserInfoFromFirebase = uid => {
        const ref = firebase.database().ref();
        usersMocksService.currentUser = $firebaseObject(ref.child('listOfUsers').child(uid));
        console.log('currentUser:', usersMocksService.currentUser)
      }

      this.saveUserInfoToFirebase = uid => {
        const ref = firebase.database().ref();
        ref.child('listOfUsers').update({
          [uid]: usersMocksService.currentUser
        })
      }
    })
}