'use strict';

function MainController($scope, homeService) {
  'ngInject';


  homeService.getData()
    .then(data => {
      $scope.data = data;
    })
}

export default MainController;