/* eslint-disable no-console */
'use strict';

export default function (app) {
  app
    .service('userProfileService', function (usersMocksService, syncDataService, $rootScope) {
      'ngInject';

      class newUser {
        constructor(email) {
          this.firstName = null;
          this.lastName = null;
          this.phone = null;
          this.email = email;
          this.role = 'user';
          this.ava = [
            'path',
            usersMocksService.profileImageRefDefault
          ];
        }
      }

      this.createNewUser = (email, uid) => {
        $rootScope.currentUser = new newUser(email);
        $rootScope.currentUserId = uid;
      };

      this.createFormInfo = function (rootScope) {
        return {
          firstName: rootScope.currentUser.firstName,
          lastName: rootScope.currentUser.lastName,
          role: rootScope.currentUser.role,
          phone: rootScope.currentUser.phone,
          email: rootScope.currentUser.email,
          ava: rootScope.currentUser.ava
        }
      };

      // this.convertProfileImageName = (name) => {
      //   const extantion = 
      //   return `${usersMocksService.currentUserId}.${extention}`
      // }

      this.setProfileImage = (blob, name) => {
        syncDataService.uploadProfileImageRef(blob, name);
        usersMocksService.currentUser.ava = syncDataService.getProfileImageRef(name);
      }

      this.deleteProfileImage = () => {
        
        usersMocksService.currentUser.ava = usersMocksService.profileImageRefDefault;
      }
    })
}