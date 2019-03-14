'use strict';

export default class SignUpController {
  constructor($scope, authenticationService) {
    'ngInject';

    this.addUser = () => {
      $scope.warning = "";
      authenticationService.signUpToFirebase(this.newUser)
      .then(function(response) {
        if (response) {
          $scope.warning = response.message;
        }
      })
    }
  }  
}