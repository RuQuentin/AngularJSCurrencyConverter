'use strict';

export default class AdminController {
    constructor($scope, $filter, usersMocksService) {
        'ngInject';
        $scope.usersMocksService = usersMocksService;
        $scope.listOfUsers = usersMocksService.listOfUsers;
        $scope.sort = {       
            sortingOrder : 'id',
            reverse : false
        }

$scope.filteredItems = [];

let searchMatch = function (haystack, needle) {
    if (!needle) {
        return true;
    }
    return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
};

$scope.search = function () {
    $scope.filteredItems = $filter('filter')($scope.listOfUsers, function (item) {
        for(let attr in item) {
            if (searchMatch(item[attr], $scope.query))
                return true;
        }
        return false;
    });

    if ($scope.sort.sortingOrder !== '') {
        $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
    }
};

$scope.search();
$scope.testConsole = item => {
    // eslint-disable-next-line no-console
    console.log(item);
}
       
    }

}

