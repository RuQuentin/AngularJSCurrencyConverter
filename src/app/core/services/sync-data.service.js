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
    .service('syncDataService', function ($firebaseArray, $firebaseObject, $firebaseStorage, usersMocksService, $rootScope) {
      'ngInject';

      // const currentUserId = usersMocksService.currentUserId;
      // firebase.auth()[7sikAxSigSZGC6v6FezOSeaNEPw2].$loaded()
      //   .then(data => console.log(data))
      
      this.getDealsFromFirebase = () => {
        const ref = firebase.database().ref();
        $rootScope.currentUserDeals = $firebaseArray(ref.child('listOfDeals').child($rootScope.currentUserId));
        return $rootScope.currentUserDeals;
      };
      
      this.addDealToFirebase = deal => {
        const ref = firebase.database().ref();
        $rootScope.currentUserDeals = $firebaseArray(ref.child('listOfDeals').child($rootScope.currentUserId));
        $rootScope.currentUserDeals.$add(deal);
        return $rootScope.currentUserDeals;
      };

      this.getUserInfoFromFirebase = uid => {
        const ref = firebase.database().ref();
        const user = $firebaseObject(ref.child('listOfUsers').child(uid));
        return user;
      }

      this.saveUserInfoToFirebase = uid => {
        const ref = firebase.database().ref();
        return ref.child('listOfUsers').update({
          [uid]: $rootScope.currentUser
        })
      }

      this.getAllFromFirebase = () => {
        const ref = firebase.database().ref();
        const obj = $firebaseObject(ref);
        $rootScope.fullBase = {};
        obj.$loaded()
          .then(function() {
            $rootScope.fullBase.listOfUsers = obj.listOfUsers;
            $rootScope.fullBase.listOfDeals = obj.listOfDeals;
          })
          .then(console.log($rootScope.fullBase));
      }

      this.getAllUsersFromFirebase = () => {
        const ref = firebase.database().ref();
        $rootScope.listOfUsers = $firebaseObject(ref.child('listOfUsers'));
        $rootScope.listOfUsers.$loaded()
          .then(console.log($rootScope.listOfUsers));
      }

      this.getAllDealsFromFirebase = () => {
        const ref = firebase.database().ref();
        $rootScope.listOfDeals = $firebaseObject(ref.child('listOfDeals'));
        $rootScope.listOfDeals.$loaded()
          .then(console.log($rootScope.listOfDeals));
      }

      this.getProfileImageRef = () => {
        const ref = firebase.storage().ref()
          .child('currency-converter/profile-pictures')
          .child($rootScope.currentUserId)
        const imageRef = $firebaseStorage(ref);
        const urlPromise = imageRef.$getDownloadURL();
        console.log(urlPromise)
        return urlPromise;
      }

      this.uploadProfileImage = file => {
        const ref = firebase.storage().ref()
          .child('currency-converter/profile-pictures')
          .child($rootScope.currentUserId);
        const imageRef = $firebaseStorage(ref);
        return imageRef.$put(file);
      }
    })
}