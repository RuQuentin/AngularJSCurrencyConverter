'use strict';

export default function (app) {
    app.provider('resolver', resolverProvider);

    function resolverProvider () {
        this.profilePagePrealoading = profilePagePrealoading;
        this.editProfilePagePrealoading = editProfilePagePrealoading;
        this.transactionsListPagePreloading = transactionsListPagePreloading;
        this.signInPagePreloading = signInPagePreloading;
        this.adminPagePreloading = adminPagePreloading;
        this.getUsersFromFirebase = getUsersFromFirebase;
        this.$get = function() { return this; };
    }

    function profilePagePrealoading ($q, $ocLazyLoad) {
        "ngInject";

        const deferred = $q.defer();
        require.ensure([], require => {
            const profileModule = require('../../pages/profile/profile.module');
            $ocLazyLoad.load({
                name: profileModule.default.name,
            });
            deferred.resolve(profileModule.default.controller);
        });
        return deferred.promise;
    }

    function editProfilePagePrealoading ($q, $ocLazyLoad) {
        "ngInject";

        const deferred = $q.defer();
        require.ensure([], require => {
            const editProfileModule = require('../../pages/edit-profile/edit-profile.module');
            $ocLazyLoad.load({
                name: editProfileModule.default.name,
            });
            deferred.resolve(editProfileModule.default.controller);
        });
        return deferred.promise;
    }
    
    function transactionsListPagePreloading ($q, $ocLazyLoad) {
        "ngInject";

        const deferred = $q.defer();
        require.ensure([], require => {
            const transactionsListModule = require('../../pages/transactions-list/transactions-list.module');
            $ocLazyLoad.load({
                name: transactionsListModule.default.name,
            });
            deferred.resolve(transactionsListModule.default.controller);
        });
        return deferred.promise;
    }

    function signInPagePreloading ($q, $ocLazyLoad) {
        "ngInject";

        const deferred = $q.defer();
        require.ensure([], require => {
            const signInModule = require('../../pages/sign-in/sign-in.module');
            $ocLazyLoad.load({
                name: signInModule.default.name,
            });
            deferred.resolve(signInModule.default.controller);
        });
        return deferred.promise;
    }

    function adminPagePreloading ($q, $ocLazyLoad) {
        "ngInject";

        const deferred = $q.defer();
        require.ensure([], require => {
            const adminPageModule = require('../../pages/admin/admin.module');
            $ocLazyLoad.load({
                name: adminPageModule.default.name,
            });
            deferred.resolve(adminPageModule.default.controller);
        });
        return deferred.promise;
    }

    function getUsersFromFirebase (syncDataService) {
        "ngInject";

        return syncDataService.getAllUsersFromFirebase()

    }
}
