'use strict';
export default class EditProfileController {
  constructor($log, $scope, $rootScope, userProfileService, syncDataService, $state) {
    'ngInject'
    this.$log = $log;
    this.scope = $scope;
    this.currentUserId = $rootScope.currentUserId;
    this.userProfileService = userProfileService;
    this.syncDataService = syncDataService;
    this. $state =  $state;
    this.file = null;
    this.formInfo = userProfileService.createFormInfo();
  }

  submitForm(data) {
    if (this.scope.profile.$valid) {
      this.userProfileService.saveToCurrentUser(data);
      this.syncDataService.saveUserInfoToFirebase(this.currentUserId);

      if (this.file) {
        this.userProfileService.setProfileImage(this.file);
      }

      this.$state.go('profile');
    } 
  }

  onFileChanged(files) {
    if (!files[0]) {
      return;
    }
    const reader = new FileReader();
    this.file = files[0];

    reader.readAsDataURL(this.file);
    reader.onload = function () {
      this.scope.$applyAsync(() => {
        this.formInfo.ava = reader.result;
      });
    }
  }

  $onInit() {
    this.$log.log('Hello from Edit-profile controller!');
  }
}