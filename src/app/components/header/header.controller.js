'use strict';

function HeaderController($log, $rootScope) {
    'ngInject';
    if ($rootScope.currentUser) {
        this.firstName = $rootScope.currentUser.firstName;
        this.lastName = $rootScope.currentUser.lastName;
    }


    $rootScope.$watch('currentUser', currentUser => {
        if (currentUser) {
            this.firstName = currentUser.firstName;
            this.lastName = currentUser.lastName;
        }
    });

    $log.debug('Hello from Header controller!');
}

export default HeaderController;

