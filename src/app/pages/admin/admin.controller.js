'use strict';

export default class AdminController {
    constructor($scope, $rootScope, $filter, syncDataService, sharedAdminFactory) {
        'ngInject';
        this.scope = $scope;
        this.filter = $filter;
        this.rootScope = $rootScope;
        this.syncDataService = syncDataService;
        this.syncDataService.getAllUsersFromFirebase();

        this.listOfUsers = this.rootScope.listOfUsers;

        this.scope.filteredItems = [];
        this.headers = ['NAME','PASSWORD','E-MAIL','STATUS'];
        this.scope.sort = {       
            sortingOrder : 'id',
            reverse : false
        }

        this.sharedAdminFactory = sharedAdminFactory;
    }

    setSelectedUser(id){
        this.sharedAdminFactory.setUserData(id);
    }

    resetPsw(id) {
        this.rootScope.listOfUsers[id].password = this.rootScope.listOfUsers[id].login;
    }
    
    changeUserRole(id){
        // let userRole = this.rootScope.listOfUsers[id].role;
        const userRole = this.rootScope.listOfUsers[id].role === 'admin' ? 'user': 'admin';
        this.syncDataService.changeUserRole(id, userRole);
    }

}
