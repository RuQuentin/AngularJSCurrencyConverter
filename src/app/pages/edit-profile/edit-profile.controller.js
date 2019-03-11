'use strict';

function EditProfileController($log, $scope, $rootScope, userProfileService, syncDataService, $state) {
  'ngInject';
  $scope.success = false;
  if($rootScope.currentUser){
    $scope.formInfo = userProfileService.createFormInfo();
  }
 
  syncDataService.getAllUsersFromFirebase();
  
  $scope.submitForm =  function(data){
    if ($scope.profile.$valid) {
      userProfileService.saveToCurrentUser(data);
      syncDataService.saveUserInfoToFirebase($rootScope.currentUserId);
      $scope.success = true;
      setTimeout(function(){
        $state.go('profile');
        syncDataService.getAllUsersFromFirebase();
      }, 1500);
    }
  }

  $scope.onFileChanged = function(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    userProfileService.setProfileImage(file)
  }

  $log.debug('Hello from EDIT-PROFILE controller!');
}

export default EditProfileController;