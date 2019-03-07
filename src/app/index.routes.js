'use strict';


import profileTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/profile/profile.html';
import editProfileTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/edit-profile/edit-profile.html';

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



  $urlRouterProvider.otherwise('/');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

