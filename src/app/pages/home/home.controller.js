'use strict';

function MainController($scope, data, currentUser, $filter) {
  'ngInject';

  $scope.data = data;

  $scope.currentUser = currentUser;

  $scope.sort = {
    sortingOrder: 'date',
    reverse: false
  };

  $scope.gap = 5;

  $scope.filteredItems = [];

  let searchMatch = function (haystack, needle) {
    if (!needle) {
      return true;
    }
    return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
  };

  $scope.search = function () {
    $scope.filteredItems = $filter('filter')($scope.data, function (item) {
      for (let attr in item) {
        if (searchMatch(item[attr], $scope.query))
          return true;
      }
      return false;
    });

    if ($scope.sort.sortingOrder !== '') {
      $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
    }
  };
}

export default MainController;