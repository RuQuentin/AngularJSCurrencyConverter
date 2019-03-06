'use strict';

import AdminComponent from './admin.component';

const adminPageModule = angular.module('admin-module', [
    'ui.router'
])
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state({
            name: 'admin',
            url: '/admin',
            component: 'admin'
        })
    })
    .component('admin', new AdminComponent());

export default adminPageModule;
