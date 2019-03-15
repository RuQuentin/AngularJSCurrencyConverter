'use strict';

export default class ProfileController {
  constructor($log) {
    'ngInject';
    this.$log = $log;
  }

  $onInit() {
    this.$log.log('Hello from PROFILE controller!');
  }
}