'use strict';

export default class AdminController {
    constructor($scope, $rootScope, $filter, syncDataService, adminConstants, sharedAdminFactory) {
        'ngInject';
        this.scope = $scope;
        this.filter = $filter;
        this.rootScope = $rootScope;
        this.syncDataService = syncDataService;
        this.syncDataService.getAllUsersFromFirebase();

        this.listOfUsers = this.rootScope.listOfUsers;

        this.scope.filteredItems = [];
        this.headers = adminConstants.headers;
        this.scope.sort = {       
            sortingOrder : 'id',
            reverse : false
        }
        this.scope.adm = true;
        this.scope.listOfUsers = this.syncDataService.getDealsFromFirebase();

        this.sharedAdminFactory = sharedAdminFactory;
    }

    setSelectedUser(id){
        this.sharedAdminFactory.setUserData(id);
    }

    resetPsw(id) {
        this.rootScope.listOfUsers[id].password = this.rootScope.listOfUsers[id].login;
    }
    
    changeUserRole(id){
        const userRole = this.rootScope.listOfUsers[id].role === 'admin' ? 'user': 'admin';
        this.syncDataService.changeUserRole(id, userRole);
    }

}
