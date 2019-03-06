// 'use strict';

import AdminController from './admin.controller';
import adminTpl from './admin.html';

export default class AdminComponent {
    constructor() {
        this.controller = AdminController;
        this.templateUrl = adminTpl;
    }
}
