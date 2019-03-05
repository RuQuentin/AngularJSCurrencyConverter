'use strict';



function routeConfig($urlRouterProvider, $stateProvider) {
  'ngInject';


    $stateProvider
        .state('example', {
          // ..
        });


  $urlRouterProvider.otherwise('/');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

