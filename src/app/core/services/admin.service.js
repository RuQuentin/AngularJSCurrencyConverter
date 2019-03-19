'use strict';
import firebase from 'firebase';

export default function (app) {
  app
    .service('adminService', function ($rootScope) {
      'ngInject';

      this.changeUserRole = (uid, newRole) => {
        $rootScope.listOfUsers[uid].role = newRole;

        const ref = firebase.database().ref()
          .child('listOfUsers')
          .child(uid);
        return ref.update({
          role: newRole
        })
      }

      this.resetUserPassword = firebase.functions().httpsCallable('resetPassword');
      this.usersData = Object.values($rootScope.listOfUsers).filter(item => {
        if (item && item.email) {
          return item
        }
      });
    })
}