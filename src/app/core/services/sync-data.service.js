'use strict';

import firebase from 'firebase';

const configFirebase = {
  apiKey: 'AIzaSyBn1zDplUrVMJnXmmc2qQDmn3JcKhrjkd4',
  authDomain: 'currencyconverter-bbce9.firebaseapp.com',
  databaseURL: 'https://currencyconverter-bbce9.firebaseio.com',
  projectId: 'currencyconverter-bbce9',
  storageBucket: 'currencyconverter-bbce9.appspot.com',
  messagingSenderId: '885797039896',
};

firebase.initializeApp(configFirebase);


export default function (app) {
  app
    .service('syncDataService', function ($firebaseArray, userDatabase) {
      'ngInject';
      
      // eslint-disable-next-line no-console
      console.log(firebase);
      this.syncWithFirebase = user => {
        const ref = firebase.database().ref();
        userDatabase = $firebaseArray(ref);
        userDatabase.$add(user);
        // eslint-disable-next-line no-console
        console.log(userDatabase);
      };
    })

}