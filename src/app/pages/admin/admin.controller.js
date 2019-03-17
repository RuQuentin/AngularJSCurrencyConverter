'use strict';

export default class AdminController {
    constructor($rootScope, syncDataService, adminService, sharedAdminFactory) {
        'ngInject';

        this.rootScope = $rootScope;
        this.syncDataService = syncDataService;
        this.adminService = adminService;
        this.filteredItems = [];
        this.headers = ['Id', 'Name', 'Last Name', 'E-mail', 'Phone', 'Admin', 'Password', 'History'];
        this.sort = {
            sortingOrder: 'id',
            reverse: false
        }
        this.adm = true;
        this.listOfUsers = this.adminService.usersData.map(({ userId, firstName, lastName, email, phone }) => ({
            userId,
            firstName,
            lastName,
            email,
            phone
          }));
        this.sharedAdminFactory = sharedAdminFactory;
    }

    setSelectedUser(id) {
        this.sharedAdminFactory.setUserData(id);
    }

    resetPsw(id) {
        // this.rootScope.listOfUsers[id].password = this.rootScope.listOfUsers[id].login;
        //add login instaed "gggggg"
        this.adminService.resetUserPassword({ uid: id, newPassword: 'qqqqqq' });
    }


    changeUserRole(id) {
        let userRole = this.rootScope.listOfUsers[id].role;
        userRole = userRole === 'admin' ? 'user' : 'admin';
        this.adminService.changeUserRole(id, userRole);
    }

}
