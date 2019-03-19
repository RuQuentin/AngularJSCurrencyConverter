'use strict';

export default class AdminModalController {
    constructor(sharedAdminFactory, $scope, syncDataService) {
        'ngInject';

        this.sharedAdminFactory = sharedAdminFactory;
        this.scope = $scope;
        this.syncDataService = syncDataService;
        this.headers = ['Amount From', 'Amount To', 'Commission', 'Currency From', 'Currency To', 'Date', 'Rate'];
        
        this.sort = {
            sortingOrder: 'date',
            reverse: false
        }

        this.init();
    }

    init() {
        this.scope.$watch(() => this.sharedAdminFactory.userData, () => {
            const userID = this.sharedAdminFactory.getUserData();
            
            if (!userID) {
                this.data = null;
                return;
            }
            
            this.data = this.syncDataService.getCheckedUserDealsFromFirebase(userID);         
        });
    }
}
