'use strict';

function EditProfileController($log, $scope, $rootScope) {
  'ngInject';

  $scope.formInfo = {
    firstName: $rootScope.currentUserInfo.firstName,
    lastName: $rootScope.currentUserInfo.lastName,
    role: $rootScope.currentUserInfo.role,
    phone: $rootScope.currentUserInfo.phone,
    email: $rootScope.currentUserInfo.email
  };
  
  $scope.saveProfile = data => {
    $rootScope.currentUserInfo = data;
  };

  $log.debug('Hello from EDIT-PROFILE controller!');
}

export default EditProfileController;