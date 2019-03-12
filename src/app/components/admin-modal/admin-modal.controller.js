'use strict';

function AdminModalController(sharedAdminFactory, $scope) {
    'ngInject';

    const self = this;
    
    $scope.$watch(() => sharedAdminFactory.userData, () => {
        self.data = sharedAdminFactory.getUserData();
    });
}

export default AdminModalController;
