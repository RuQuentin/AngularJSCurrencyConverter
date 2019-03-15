'use strict';

export default class AdminController {
    constructor($rootScope, syncDataService, adminService, sharedAdminFactory) {
        'ngInject';


        this.rootScope = $rootScope;
        this.syncDataService = syncDataService;
        this.adminService = adminService;
        // syncDataService.getAllUsersFromFirebase()
        //     .then(() => {
                this.listOfUsers = Object.values($rootScope.listOfUsers).filter(item => {
                    if (item && item.email) {
                        return item
                    }
                });
            // eslint-disable-next-line no-console
                console.log(this.listOfUsers);
        //         // eslint-disable-next-line no-console
        //         console.log(this.listOfUsers);
        //     })



        this.filteredItems = [];      
        this.headers =  ['Id','Name','E-mail','Admin','Password','History',' Profile'];
        this.sort = {       
            sortingOrder : 'id',
            reverse : false
        }
        this.adm = true;
        this.sharedAdminFactory = sharedAdminFactory;
    }

    setSelectedUser(id){
        this.sharedAdminFactory.setUserData(id);
    }

    resetPsw(id) {
        // this.rootScope.listOfUsers[id].password = this.rootScope.listOfUsers[id].login;
        //add login instaed "gggggg"
        this.adminService.resetUserPassword( { uid: id, newPassword: 'qqqqqq' });
    }

    
    changeUserRole(id){
        let userRole = this.rootScope.listOfUsers[id].role;
        userRole = userRole === 'admin' ? 'user': 'admin';
        this.adminService.changeUserRole(id, userRole);
    }

}
