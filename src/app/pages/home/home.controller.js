'use strict';

function MainController($scope, data, currentUser) {
  'ngInject';

  $scope.data = data;

  $scope.currentUser = currentUser;
}

export default MainController;