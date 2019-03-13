'use strict';

export default function (app) {

  app.directive('customTable', tableDirective);

  function tableDirective() {
    'ngInject';

    return {
      restrict: 'E',
      template: `
            <table class="table table-striped rounded table-hover">
            <thead>
              <tr>
                 <th  custom-sort order="'date'" sort="sort" ng-repeat="item in headers" >{{item}}
               </th>             
              </tr>
            </thead>
      
            <tbody>
              <tr class="table-row" ng-repeat="el in data | orderBy:sort.sortingOrder:sort.reverse">
                <td ng-repeat='item in el '>{{ item}}</td>
            </tbody>
          </table>
            `,
      scope: {
        headers: '=',
        data: '=',
        sort:'='
      },
    };
  }
}