'use strict';

export default function (app) {
    app.provider('resolver', resolverProvider);

    function resolverProvider () {
        this.profilePagePrealoading = profilePagePrealoading;
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

}
