'use strict';


import profileTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/profile/profile.html';
import editProfileTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/edit-profile/edit-profile.html';
import transactionsListTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/transactions-list/transactions-list.html';
import signInTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/sign-in/sign-in.html';
import  adminTpl from '!!file-loader?name=templates/[name].[ext]!./pages/admin/admin.html';

function routeConfig($urlRouterProvider, $stateProvider) {
  'ngInject';


    $stateProvider
        .state('profile', {
          url: '/profile',
          templateUrl: profileTemplate,
          resolve: {
            asyncPreloading: resolver => resolver.profilePagePrealoading
          }
        })
        .state('editProfile', {
          url: '/editProfile',
          templateUrl: editProfileTemplate,
          controller: 'editProfileController',
          controllerAs: 'edProf',
          resolve: {
            asyncPreloading: resolver => resolver.editProfilePagePrealoading
          }
        })
        .state('transactionsList', {
          url: '/transactionsList',
          templateUrl: transactionsListTemplate,
          controller: 'transactionsListController',
          resolve: {
            asyncPreloading: resolver => resolver.transactionsListPagePreloading
          }
        })
        .state('sign-in', {
          url: '/sign-in',
          templateUrl: signInTemplate,
          controller: 'SignInController',
          controllerAs: 'signInCtrl',
          resolve: {
            asyncPreloading: resolver => resolver.signInPagePreloading
          }
        })
        .state('admin', {
          url: '/admin',
          templateUrl: adminTpl,
          controller: 'AdminController',
          controllerAs: 'admCont',
          resolve: {
            getUsersFromFirebase: resolver => resolver.getUsersFromFirebase,
            asyncPreloading: resolver => resolver.adminPagePreloading,
          }
        })

  $urlRouterProvider.otherwise('/');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

