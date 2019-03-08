'use strict';

export default class AdminController {
    constructor($scope, $rootScope, $filter, usersMocksService) {
        'ngInject';
        this.scope = $scope;
        this.filter = $filter;
        this.rootScope = $rootScope;

        this.scope.usersMocksService = usersMocksService;
        this.scope.listOfUsers = usersMocksService.listOfUsers;
        this.scope.filteredItems = [];
        this.scope.sort = {       
            sortingOrder : 'id',
            reverse : false
        }

        this.search();
    }

    searchMatch (haystack, needle) {
        if (!needle) {
            return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    }

    search () {
        this.scope.filteredItems = this.filter('filter')(this.scope.listOfUsers, item => {
            for(let attr in item) {
                if (this.searchMatch(item[attr], this.scope.query))
                    return true;
            }
            return false;
        });

        if (this.scope.sort.sortingOrder !== '') {
            this.scope.filteredItems = this.filter('orderBy')(this.scope.filteredItems, this.scope.sort.sortingOrder, this.scope.sort.reverse);
        }
    }

    setSelectedUser(id){
        // this.rootScope.currentUserDeals = APIservice.getData(id);
        // eslint-disable-next-line no-console
        this.rootScope.selectedUser = id;
    }

    resetPsw(id) {
        this.rootScope.listOfUsers[id].password = this.rootScope.listOfUsers[id].login;
    }
}
