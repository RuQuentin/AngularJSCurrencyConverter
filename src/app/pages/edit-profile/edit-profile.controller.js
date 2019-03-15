'use strict';
export default class EditProfileController {
  constructor($log, $scope, $rootScope, userProfileService, syncDataService, $state) {
    'ngInject'
    this.$log = $log;
    this.scope = $scope;
    this.rootScope = $rootScope;
    this.currentUserId = $rootScope.currentUserId;
    this.userProfileService = userProfileService;
    this.syncDataService = syncDataService;
    this.$state = $state;
    this.profile = null;
    this.formInfo = userProfileService.createFormInfo();
    this.scope.$watch('file', this.onChanged.bind(this));
  }

  submitForm(data) {
    this.userProfileService.saveToCurrentUser(data);

    if (this.scope.file) {
      this.userProfileService.setProfileImage(this.scope.file);
    }

    this.syncDataService.saveUserInfoToFirebase(this.currentUserId);
    this.rootScope.success = true;
    this.$state.go('profile');
  }

  onChanged() {
    if (!this.scope.file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.scope.file);
    reader.onload = () => {
      this.scope.$applyAsync(() => {
        this.formInfo.ava = reader.result;
      });
    }
  }
}