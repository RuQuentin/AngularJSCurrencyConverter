'use strict';

import profileController from './profile.controller.js';
import './profile.scss';

const profileModule = angular.module('profile-module', []);
profileModule.controller('profileController', profileController);

export default profileModule;