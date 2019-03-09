'use strict';

function EditProfileController($log, $scope, $rootScope, $state) {
  'ngInject';
  $scope.success = false;

  $scope.formInfo = {
    firstName: $rootScope.currentUserInfo.firstName,
    lastName: $rootScope.currentUserInfo.lastName,
    role: $rootScope.currentUserInfo.role,
    phone: $rootScope.currentUserInfo.phone,
    email: $rootScope.currentUserInfo.email
  };
  
  $scope.submitForm = function(data) {
    if ($scope.profile.$valid) {
      $rootScope.currentUserInfo = data;
      $scope.success = true;
      setTimeout(function(){
        $state.go('profile');
      },1700);
    }
  }

  $log.debug('Hello from EDIT-PROFILE controller!' + $scope.first);
}

export default EditProfileController;