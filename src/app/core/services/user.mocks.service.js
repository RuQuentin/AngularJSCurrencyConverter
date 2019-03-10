'use strict';

// import syncDataService from "./sync-data.service";

export default function (app) {
  app
    .service('usersMocksService', function ($rootScope) {
      'ngInject';

        this.currentUser = {
          firstName: 'Vasya',
          lastName: 'Poopkin',
          phone: '380672386289',
          email: 'vasya@gmail.com',
          role: 'user',
          ava: "https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg"
        };

        this.currentUserDeals = [
          { date: '10.10.2010', currencyFrom: 'EUR', currencyTo: 'USD', commission: 0, rate: 1.11, amountFrom: 200, amountTo: 222 },
          { date: '11.11.2011', currencyFrom: 'UAH', currencyTo: 'USD', commission: 0, rate: 27.1, amountFrom: 271, amountTo: 10 },
          { date: '12.12.2012', currencyFrom: 'EUR', currencyTo: 'USD', commission: 0, rate: 1.11, amountFrom: 100, amountTo: 111 }
        ];

        this.currentUserId = '7sikAxSigSZGC6v6FezOSeaNEPw2';

        this.listOfUsers = [
          { "id": 0, "name":"Alex", "login":"alex@gmail.com", "status":"user", "password":"a123" }, 
          { "id": 1, "name":"Bill", "login":"bill@gmail.com", "status":"user", "password":"b123" }, 
          { "id": 2, "name":"Nob",  "login":"nob@gmail.com",  "status":"user", "password":"n123" }, 
        ];
    
        this.userRole = 'user',
        this.adminRole = 'admin',
      
        
        this.userDeal = {
          date: '10.10.2010', currencyFrom: 'EUR', currencyTo: 'USD', commission: 0, rate: 1.11, amountFrom: 500, amountTo: 800
        };

        this.initMocks = () => {
          $rootScope.currentUser = this.currentUser;
          $rootScope.currentUserDeals = this.currentUserDeals;
          $rootScope.currentUserId = this.currentUserId;
          $rootScope.userRole = this.userRole;
          $rootScope.adminRole = this.adminRole;
          $rootScope.listOfUsers = this.listOfUsers;
          $rootScope.userDeal = this.userDeal;
        }

        this.profileImageRefDefault = 'https://firebasestorage.googleapis.com/v0/b/currencyconverter-bbce9.appspot.com/o/currency-converter%2Fprofile-pictures%2Fdefault.svg?alt=media&token=6207dae6-632f-4767-9405-3fb3586394b3';
    });
}
