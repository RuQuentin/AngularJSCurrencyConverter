'use strict';

import signUpTpl from './sign-up.html';
import signUpController from './sign-up.controller';

export default class SignUpComponent {
    constructor() {
        this.templateUrl = signUpTpl;
        this.controller = signUpController;
        this.controllerAs = 'su';
    }
}