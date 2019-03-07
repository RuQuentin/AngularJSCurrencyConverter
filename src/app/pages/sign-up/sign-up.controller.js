'use strict';

export default class SignUpController {
  constructor(syncDataService) {
    'ngInject';

    this.addUser = () => {
      syncDataService.syncWithFirebase(this.newUser);
    }
  }  
}