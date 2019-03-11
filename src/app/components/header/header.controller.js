'use strict';

function HeaderController($log, $rootScope) {
    'ngInject';

    this.firstName = $rootScope.currentUser.firstName;
    this.lastName = $rootScope.currentUser.lastName;

    $rootScope.$watch('currentUser', currentUser => {
        this.firstName = currentUser.firstName;
        this.lastName = currentUser.lastName;
    });

    $log.debug('Hello from Header controller!');
}

export default HeaderController;

