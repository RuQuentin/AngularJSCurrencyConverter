'use strict';

export default class SignUpController {
  constructor(authenticationService) {
    'ngInject';
    // #fix add user's name and last name to firebase
    this.addUser = () => {
      authenticationService.signUpToFirebase(this.newUser);
    }
  }  
}