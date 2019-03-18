'use strict';

function AdminModalController(sharedAdminFactory, $scope, syncDataService) {
    'ngInject';

    const self = this;
    this.headers = ['Amount From', 'Amount To', 'Commission', 'Currency From', 'Currency To', 'Date', 'Rate'];

    this.sort = {
        sortingOrder: 'date',
        reverse: false
    }
    
    $scope.$watch(() => sharedAdminFactory.userData, () => {
        const userID = sharedAdminFactory.getUserData();

        if (!userID) {
            self.data = null;
            return;
        }

        self.data = syncDataService.getCheckedUserDealsFromFirebase(userID);
    });
}

export default AdminModalController;
