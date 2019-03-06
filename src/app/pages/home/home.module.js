'use strict';

import HomeComponent from './home.component';
import HomeController from './home.controller';
import './home.scss';
import homeTpl from './home.html';

const homePageModule = angular.module('home-module', [
  'ui.router'
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/home',
        controller: HomeController,
        templateUrl: homeTpl,
        resolve: {
          data: homeService => {
            return homeService.getData();
          }
        }
      });
  })
  .component('home', new HomeComponent());

export default homePageModule;
