/* eslint-disable no-console */
'use strict';

export default function (app) {
  app
    .service('userProfileService', function (usersMocksService) {
      'ngInject';

      class newUser {
        constructor(email) {
          this.firstName = null;
          this.lastName = null;
          this.phone = null;
          this.email = email;
          this.role = 'user';
          this.ava = null;
        }
      }

      this.createNewUser = (email, uid) => {
        usersMocksService.currentUser = new newUser(email);
        usersMocksService.currentUserId = uid;
      };

      this.createFormInfo = function (rootScope) {
        return {
          firstName: rootScope.currentUserInfo.firstName,
          lastName: rootScope.currentUserInfo.lastName,
          role: rootScope.currentUserInfo.role,
          phone: rootScope.currentUserInfo.phone,
          email: rootScope.currentUserInfo.email,
          ava: rootScope.currentUserInfo.ava
        }
      };
    })
}