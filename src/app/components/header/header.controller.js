'use strict';

function HeaderController($log, $rootScope) {
    'ngInject';

    this.firstName = $rootScope.currentUserInfo.firstName;
    this.lastName = $rootScope.currentUserInfo.lastName;

    $rootScope.$watch('currentUserInfo', currentUserInfo => {
        this.firstName = currentUserInfo.firstName;
        this.lastName = currentUserInfo.lastName;
    });

    $log.debug('Hello from Header controller!');
}

export default HeaderController;

