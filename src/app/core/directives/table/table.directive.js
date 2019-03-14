/* eslint-disable */
'use strict';

export default function (app) {

  app.directive('customTable', tableDirective);

  function tableDirective() {
    'ngInject';

    return {
      restrict: 'E',
      transclude: true,
      template: `
      <table class="table table-striped rounded table-hover">
      <thead>
        <tr>
          <th custom-sort order="'date'" sort="sort" ng-repeat="item in headers">{{item}}
          </th>
        </tr>
      </thead>
    
      <tbody>
        <tr class="table-row" ng-repeat="el in data | orderBy:sort.sortingOrder:sort.reverse">
          <td ng-repeat='item in el '>{{ item}}</td>
    
          <td ng-show='adminTable'>
            <input type="checkbox" ng-checked="value.role === 'admin'" ng-click='changeUserRole(key)'>
          </td>
    
          <td ng-show='adminTable'>
            <button class="btn btn-outline-secondary" type="button" ng-click='resetPsw({data:el.amountFrom})'>Reset
              password</button>
          </td>
    
          <td ng-show='adminTable'><i class="fas fa-history tabble__icon" data-toggle="modal"
              ng-click="setSelectedUser(key)" data-target="#userHistoryModal"></i></td>
    
          <td ng-show='adminTable'><i class="fas fa-user-circle tabble__icon" ui-sref="profile"></i></td>
        </tr>
    
      </tbody>
    </table>
            `,
      scope: {
        headers: '=',
        data: '=',
        sort: '=',
        adminTable: '=',
        changeUserRole: '&',
        resetPsw: '&',
        setSelectedUser: '&'   
      },
      // eslint-disable-next-line no-unused-vars
      link: function(scope,element,attrs) {
        // $(element).click(function( e, rowid ) {
        //   scope.method({myParam: id});
        // });
     }
    };
  }
}