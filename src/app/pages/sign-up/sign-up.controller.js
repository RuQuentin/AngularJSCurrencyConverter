'use strict';

export default class SignUpController {
  constructor(authenticationService) {
    'ngInject';

    this.addUser = () => {
      authenticationService.signUpToFirebase(this.newUser.login, this.newUser.password);
    }
  }  
}