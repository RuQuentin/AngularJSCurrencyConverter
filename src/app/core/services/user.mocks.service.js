'use strict';

// import syncDataService from "./sync-data.service";

export default function (app) {
  app
    .service('usersMocksService', function ($rootScope) {
      'ngInject';

        this.currentUserId = '7sikAxSigSZGC6v6FezOSeaNEPw2';

        this.userRole = 'user',
        this.adminRole = 'admin',

        this.initMocks = () => {
          $rootScope.currentUserId = this.currentUserId;
          $rootScope.userRole = this.userRole;
          $rootScope.adminRole = this.adminRole;
        }

        this.profileImageRefDefault = 'https://firebasestorage.googleapis.com/v0/b/currencyconverter-bbce9.appspot.com/o/currency-converter%2Fprofile-pictures%2Fdefault.svg?alt=media&token=6207dae6-632f-4767-9405-3fb3586394b3';
    });
}
