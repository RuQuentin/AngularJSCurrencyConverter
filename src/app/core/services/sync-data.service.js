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
      
      this.getDealsFromFirebase = () => {
        const ref = firebase.database().ref();
        usersMocksService.currentUserDeals = $firebaseArray(ref.child('listOfDeals').child(usersMocksService.currentUserId));
        return usersMocksService.currentUserDeals;
      };
      
      this.addDealToFirebase = deal => {
        const ref = firebase.database().ref();
        usersMocksService.currentUserDeals = $firebaseArray(ref.child('listOfDeals').child(usersMocksService.currentUserId));
        usersMocksService.currentUserDeals.$add(deal);
        return usersMocksService.currentUserDeals;
      };

      this.getUserInfoFromFirebase = uid => {
        const ref = firebase.database().ref();
        usersMocksService.currentUser = $firebaseObject(ref.child('listOfUsers').child(uid));
      }

      this.saveUserInfoToFirebase = uid => {
        const ref = firebase.database().ref();
        ref.child('listOfUsers').update({
          [uid]: usersMocksService.currentUser
        })
      }

      this.getAllFromFirebase = () => {
        const ref = firebase.database().ref();
        const obj = $firebaseObject(ref);
        usersMocksService.fullBase = {};
        obj.$loaded()
          .then(function() {
            usersMocksService.fullBase.listOfUsers = obj.listOfUsers;
            usersMocksService.fullBase.listOfDeals = obj.listOfDeals;
          })
          .then(console.log(usersMocksService.fullBase));
      }

      this.getAllUsersFromFirebase = () => {
        const ref = firebase.database().ref();
        usersMocksService.listOfUsers = $firebaseObject(ref.child('listOfUsers'));
        usersMocksService.listOfUsers.$loaded()
          .then(console.log(usersMocksService.listOfUsers));
      }

      this.getAllDealsFromFirebase = () => {
        const ref = firebase.database().ref();
        usersMocksService.listOfDeals = $firebaseObject(ref.child('listOfDeals'));
        usersMocksService.listOfDeals.$loaded()
          .then(console.log(usersMocksService.listOfDeals));
      }
    })
}