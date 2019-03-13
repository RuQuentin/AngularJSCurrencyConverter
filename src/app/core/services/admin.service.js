/* eslint-disable no-console */
'use strict';

import firebase from 'firebase';

export default function (app) {
  app
    .service('adminService', function ($rootScope) {
      'ngInject';

      this.changeUserRole = (uid, role) => {
        $rootScope.listOfUsers.uid.role = role;

        const ref = firebase.database().ref()
          .child('listOfUsers')
          .child(uid);
        return ref.update({
          [role]: role
        })
      }

      // function resetUserPassword accept only one argument -
      // an object { uid: userId, newPassword: newPassword }
      this.resetUserPassword = firebase.functions().httpsCallable('resetPassword');
    })
}