'use strict';

import editProfileController from './edit-profile.controller.js';
import './edit-profile.scss';

const editProfileModule = angular.module('edit-profile-module', []);
editProfileModule.controller('editProfileController', editProfileController);

export default editProfileModule;
