'use strict';

export default class ProfileController {
  constructor($log, toastr, $rootScope) {
    'ngInject';
    this.$log = $log;
    this.toastr = toastr;
    this.rootScope = $rootScope;
  }

  $onInit() {
    if(this.rootScope.success){
    this.toastr.success("Successfully saved.");
    this.rootScope.success = false;
    }
  }
}