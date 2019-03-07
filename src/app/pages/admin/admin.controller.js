'use strict';

export default class AdminController {
    constructor($scope, $filter) {
        'ngInject';
        $scope.sort = {       
            sortingOrder : 'id',
            reverse : false
        };
    this.itemId = 0;

$scope.gap = 3;
$scope.filteredItems = [];
$scope.groupedItems = [];
$scope.itemsPerPage = 5;
$scope.pagedItems = [];
$scope.currentPage = 1;
$scope.items = [
    {"id":1,"name":"Alex","description":"alex@gmail.com","field3":"user","field4":"field4 1","field5 ":"field5 1"}, 
    {"id":2,"name":"Bill","description":"bill@gmail.com","field3":"user","field4":"field4 2","field5 ":"field5 2"}, 
    {"id":3,"name":"Bob","description":"bob@gmail.com","field3":"user","field4":"field4 3","field5 ":"field5 3"}, 
    {"id":4,"name":"Brian","description":"brian@gmail.com","field3":"user","field4":"field4 4","field5 ":"field5 4"}, 
    {"id":5,"name":"Cendrick","description":"cendrick@gmail.com","field3":"user","field4":"field4 5","field5 ":"field5 5"}, 
    {"id":6,"name":"Evan","description":"evan@gmail.com","field3":"admin","field4":"field4 6","field5 ":"field5 6"}, 
    {"id":7,"name":"Dan","description":"dan@gmail.com","field3":"user","field4":"field4 7","field5 ":"field5 7"}, 
    {"id":8,"name":"Diana","description":"diana@gmail.com","field3":"user","field4":"field4 8","field5 ":"field5 8"}, 
    {"id":9,"name":"name 9","description":"description 1","field3":"field3 9","field4":"field4 9","field5 ":"field5 9"}, 
    {"id":10,"name":"name 10","description":"description 1","field3":"field3 10","field4":"field4 10","field5 ":"field5 10"}, 
    {"id":11,"name":"name 11","description":"description 1","field3":"field3 11","field4":"field4 11","field5 ":"field5 11"}, 
    {"id":12,"name":"name 12","description":"description 1","field3":"field3 12","field4":"field4 12","field5 ":"field5 12"}, 
    {"id":13,"name":"name 13","description":"description 1","field3":"field3 13","field4":"field4 13","field5 ":"field5 13"}, 
    {"id":14,"name":"name 14","description":"description 1","field3":"field3 14","field4":"field4 14","field5 ":"field5 14"}, 
    {"id":15,"name":"name 15","description":"description 1","field3":"field3 15","field4":"field4 15","field5 ":"field5 15"}, 
    {"id":16,"name":"name 16","description":"description 1","field3":"field3 16","field4":"field4 16","field5 ":"field5 16"}, 
    {"id":17,"name":"name 17","description":"description 1","field3":"field3 17","field4":"field4 17","field5 ":"field5 17"}, 
    {"id":18,"name":"name 18","description":"description 1","field3":"field3 18","field4":"field4 18","field5 ":"field5 18"}, 
    {"id":19,"name":"name 19","description":"description 1","field3":"field3 19","field4":"field4 19","field5 ":"field5 19"}, 
    {"id":20,"name":"name 5","description":"description 1","field3":"field3 5","field4":"field4 5","field5 ":"field5 5"}
];

let searchMatch = function (haystack, needle) {
    if (!needle) {
        return true;
    }
    return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
};

// init the filtered items
$scope.search = function () {
    $scope.filteredItems = $filter('filter')($scope.items, function (item) {
        for(let attr in item) {
            if (searchMatch(item[attr], $scope.query))
                return true;
        }
        return false;
    });
    // take care of the sorting order
    if ($scope.sort.sortingOrder !== '') {
        $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
    }
    $scope.currentPage = 0;
    // now group by pages
    $scope.groupToPages();
};


// calculate page in place
$scope.groupToPages = function () {
    $scope.pagedItems = [];
    
    for (let i = 0; i < $scope.filteredItems.length; i++) {
        if (i % $scope.itemsPerPage === 0) {
            $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
        } else {
            $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
        }
    }
};

$scope.range = function (size,start, end) {
    let ret = [];        

    if (size < end) {
        end = size;
        start = size-$scope.gap;
    }
    for (let i = start; i < end; i++) {
        ret.push(i);
    }              
    return ret;
};

$scope.prevPage = function () {
    if ($scope.currentPage > 0) {
        $scope.currentPage--;
    }
};

$scope.nextPage = function () {
    if ($scope.currentPage < $scope.pagedItems.length - 1) {
        $scope.currentPage++;
    }
};

$scope.setPage = function () {
    $scope.currentPage = this.n;
};

// functions have been describe process the data for display
$scope.search();
$scope.testConsole = $event => {
    // eslint-disable-next-line no-console
    console.log($event.target.innerHTML);
}
       
    }

}

