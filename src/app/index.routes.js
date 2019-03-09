'use strict';


import profileTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/profile/profile.html';
import editProfileTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/edit-profile/edit-profile.html';
import transactionsListTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/transactions-list/transactions-list.html';

function routeConfig($urlRouterProvider, $stateProvider, resolverProvider) {
  'ngInject';


    $stateProvider
        .state('profile', {
          url: '/profile',
          templateUrl: profileTemplate,
          controller: 'profileController',
          resolve: {
            asyncPreloading: resolverProvider.profilePagePrealoading
          }
        })
        .state('editProfile', {
          url: '/editProfile',
          templateUrl: editProfileTemplate,
          controller: 'editProfileController',
          resolve: {
            asyncPreloading: resolverProvider.editProfilePagePrealoading
          }
        })
        .state('transactionsList', {
          url: '/transactionsList',
          templateUrl: transactionsListTemplate,
          controller: 'transactionsListController',
          resolve: {
            asyncPreloading: resolverProvider.transactionsListPagePreloading
          }
        })



  $urlRouterProvider.otherwise('/');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

