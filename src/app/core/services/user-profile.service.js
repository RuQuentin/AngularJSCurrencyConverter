/* eslint-disable no-console */
'use strict';

export default function (app) {
  app
    .service('userProfileService', function (usersMocksService, syncDataService, $rootScope) {
      'ngInject';

      class User {
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
        $rootScope.currentUser = new User(email);
        $rootScope.currentUserId = uid;
      };

      this.createFormInfo = function () {
        return {
          firstName: $rootScope.currentUser.firstName,
          lastName:  $rootScope.currentUser.lastName,
          role: $rootScope.currentUser.role,
          phone:  $rootScope.currentUser.phone,
          email:  $rootScope.currentUser.email,
          ava: $rootScope.currentUser.ava
        }
      };

      this.saveToCurrentUser = function (data) {
        $rootScope.currentUser.firstName = data.firstName || '',
        $rootScope.currentUser.lastName = data.lastName || '',
        $rootScope.currentUser.role = data.role || 'user',
        $rootScope.currentUser.phone = data.phone || '',
        $rootScope.currentUser.email = data.email || '',
        $rootScope.currentUser.ava = data.ava || ''
      };

      this.setProfileImage = file => {
        syncDataService.uploadProfileImage(file)
          .then(function() {
            syncDataService.getProfileImageRef()
          })
          .then(function(link) {
            $rootScope.currentUserInfo.ava = link;
          });
      }

      this.deleteProfileImage = () => {
        
        usersMocksService.currentUser.ava = usersMocksService.profileImageRefDefault;
      }
    })
}