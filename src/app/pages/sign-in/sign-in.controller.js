'use strict';


class SignInController {
    constructor($scope, authenticationService, toastr) {
        'ngInject';
        this.scope = $scope;
        this.scope.warning = "";
        this.authenticationService = authenticationService;
        this.toastr = toastr;
      }
      
      $onInit () {
        this.scope.signIn = () => {
        this.scope.warning = "";
        const { email, password } = this.scope.user;
    
        this.authenticationService.signInToFirebase(email, password)
        .then(response => {
          if (response) {
            this.scope.warning = response.message;
            this.toastr.success('Hello World')
          }
        });
      }
    }
}
export default SignInController;