'use strict';

import firebase from 'firebase';
import "angularfire";


// ==== connecting to firebase ====
import configFirebase from '~/env.js'
firebase.initializeApp(configFirebase);
// ================================


export default function (app) {
  app
    .service('syncDataService', function ($firebaseArray, usersMocksService) {
      'ngInject';
      
      this.syncDealsWithFirebase = deal => {
        const ref = firebase.database().ref();
        usersMocksService.userDatabase = $firebaseArray(ref.child('listOfDeals').child(usersMocksService.currentUserId));
        usersMocksService.userDatabase.$add(deal);
        // eslint-disable-next-line no-console
        console.log(usersMocksService.userDatabase);
      };
    })

}