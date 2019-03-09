'use strict';

import './sign-up.scss'
import SignUpComponent from './sign-up.component';
import signUpTpl from './sign-up.html';
import signUpController from './sign-up.controller';

const signUpModule = angular.module('signUpModule', ['ui.router'])

      .config(($stateProvider, $urlRouterProvider) => {
          'ngInject';

          $urlRouterProvider.otherwise('/');

          $stateProvider
              .state('sign-up', {
                  url: '/sign-up',
                  templateUrl: signUpTpl,
                  controller: signUpController,
                  controllerAs: 'su',
                //   component: 'signUp',
              });
      })
      .component('signUp', new SignUpComponent());

export default signUpModule;