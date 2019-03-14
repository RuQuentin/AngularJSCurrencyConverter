'use strict';

import SignInController from './sign-in.controller.js';
import './sign-in.scss';

const signInModule = angular.module('signInModule', ['toastr']);
signInModule.controller('SignInController', SignInController);

export default signInModule;