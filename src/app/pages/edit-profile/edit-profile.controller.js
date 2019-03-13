'use strict';

function EditProfileController($log, $scope, $rootScope, $timeout, userProfileService, syncDataService, $state) {
  'ngInject';
  $scope.success = false;
  const reader = new FileReader();
  let file = null;

  if ($rootScope.currentUser) {
    $scope.formInfo = userProfileService.createFormInfo();
  }

  $scope.submitForm = function (data) {
    if ($scope.profile.$valid) {
      userProfileService.saveToCurrentUser(data);
      syncDataService.saveUserInfoToFirebase($rootScope.currentUserId);
      
      if (file) {
        userProfileService.setProfileImage(file);
      }

      $scope.success = true;
      $timeout(function () {
        $state.go('profile');
      }, 1500);
    }
  }

  $scope.onFileChanged = function (files) {
    if (!files[0]) {
      return;
    }

    file = files[0];
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      $scope.$applyAsync(() => {
        $scope.formInfo.ava = reader.result;
      }) 
    }
  }

  $log.debug('Hello from EDIT-PROFILE controller!');
}

export default EditProfileController;