'use strict';

export default class SignInController {
    constructor($scope, authenticationService) {
        'ngInject';
        this.scope = $scope;
        this.scope.warning = "";
        this.authenticationService = authenticationService;
      }
      
      $onInit () {
        this.scope.signIn = () => {
        this.scope.warning = "";
        const { email, password } = this.scope.user;
    
        this.authenticationService.signInToFirebase(email, password)
        .then(response => {
          if (response) {
            this.scope.warning = response.message;
          }
        });
      }
    }
}