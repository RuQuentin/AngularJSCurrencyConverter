'use strict';

function EditProfileController($log, $scope, $rootScope, userProfileService, $state) {
  'ngInject';
  $scope.success = false;
  $scope.formInfo = userProfileService.createFormInfo($rootScope);
  
  $scope.submitForm =  function(data){
    if ($scope.profile.$valid) {
      $rootScope.currentUserInfo = data;
      $scope.success = true;
      setTimeout(function(){
        $state.go('profile');
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
        // eslint-disable-next-line no-console
    console.log( $scope.formInfo.ava );
    // в процессе реализации
    // this.http.post('my-backend.com/file-upload', file);

  }

  $log.debug('Hello from EDIT-PROFILE controller!');
}

export default EditProfileController;