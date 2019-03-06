'use strict';


import profileTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/profile/profile.html';

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



  $urlRouterProvider.otherwise('/');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

