'use strict';

export default class AdminController {
    constructor($rootScope, syncDataService, adminConstants, sharedAdminFactory) {
        'ngInject';
        this.rootScope = $rootScope;
        this.syncDataService = syncDataService;
        this.syncDataService.getAllUsersFromFirebase();
        this.listOfUsers = this.rootScope.listOfUsers;
        this.filteredItems = [];
        this.headers = adminConstants.headers;
        this.sort = {       
            sortingOrder : 'id',
            reverse : false
        }
        this.adm = true;
        this.listOfUsers = this.syncDataService.getDealsFromFirebase();

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
