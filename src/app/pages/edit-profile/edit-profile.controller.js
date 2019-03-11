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

      // eslint-disable-next-line no-console
    console.log(file);

    userProfileService.setProfileImage(file)
    // в процессе реализации
    // 1) загрузить файл в файрбейс, типа так syncDataService.saveUserInfoToFirebase($rootScope.currentUserId);
    // 2) получить его src syncDataService.getURL()
    // 3) присвоить src в formInfo.ava = syncDataService.getURL();
  }

  $log.debug('Hello from EDIT-PROFILE controller!');
}

export default EditProfileController;