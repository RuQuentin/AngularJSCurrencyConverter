'use strict';

export default class AdminController {
    constructor($scope, $rootScope, $filter, syncDataService) {
        'ngInject';
        this.scope = $scope;
        this.filter = $filter;
        this.rootScope = $rootScope;
        this.syncDataService = syncDataService;
        this.syncDataService.getAllUsersFromFirebase();

        this.listOfUsers = this.rootScope.listOfUsers;

        this.scope.filteredItems = [];
        this.scope.sort = {       
            sortingOrder : 'id',
            reverse : false
        }
    }

    setSelectedUser(id){
        this.rootScope.selectedUser = id;
    }

    resetPsw(id) {
        this.rootScope.listOfUsers[id].password = this.rootScope.listOfUsers[id].login;
    }
}
