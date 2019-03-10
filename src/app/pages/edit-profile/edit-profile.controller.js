'use strict';

function EditProfileController($log, $scope, $rootScope, userProfileService, syncDataService, $state) {
  'ngInject';
  $scope.success = false;
  $scope.formInfo = userProfileService.createFormInfo($rootScope);
  // syncDataService.getUserInfoFromFirebase('6Nu69dWHexMwcebH3CtqUtcV1eC2');
  syncDataService.getAllUsersFromFirebase();
  
  $scope.submitForm =  function(data){
    if ($scope.profile.$valid) {
      $rootScope.currentUser = data;
      syncDataService.saveUserInfoToFirebase($rootScope.currentUser);
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

    // в процессе реализации
    // 1) загрузить файл в файрбейс, типа так $http('my-backend.com/file-upload', file);
    // 2) получить его src
    // 3) присвоить src в formInfo.ava
  }

  $log.debug('Hello from EDIT-PROFILE controller!');
}

export default EditProfileController;